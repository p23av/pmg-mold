// scripts/prerender.mjs
// Пререндеринг SPA: после `vite build` проходит по всем маршрутам
// через установленный браузер (Edge/Chrome) и сохраняет готовый HTML
// в dist/<маршрут>/index.html — поисковые роботы видят контент без JS.
import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer-core'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const distDir = join(root, process.env.DIST_DIR || 'dist')
const PORT = Number(process.env.PRERENDER_PORT || 4173)
const BASE = `http://localhost:${PORT}`

// Все маршруты сайта (должны совпадать с роутером)
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/services/molds',
  '/services/aluminum',
  '/services/plastic',
  '/services/galvanic',
  '/services/painting',
  '/services/flocking',
  '/privacy',
  '/terms'
]

// Ищем установленный браузер
const browserCandidates = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
]
const executablePath = browserCandidates.find(p => existsSync(p))
if (!executablePath) {
  console.error('Не найден ни Edge, ни Chrome. Укажите путь к браузеру в scripts/prerender.mjs')
  process.exit(1)
}

// Ждём, пока поднимется сервер превью
async function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now()
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url)
      if (res.ok) return
    } catch { /* сервер ещё не поднялся */ }
    await new Promise(r => setTimeout(r, 300))
  }
  throw new Error(`Сервер ${url} не ответил за ${timeoutMs} мс`)
}

// Запускаем vite preview
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
  cwd: root,
  stdio: 'ignore',
  shell: true
})

// На Windows server.kill() убивает только cmd-обёртку, поэтому
// убиваем всё дерево процессов через taskkill
const cleanup = () => {
  try {
    if (server.pid) {
      spawn('taskkill', ['/pid', String(server.pid), '/T', '/F'], { stdio: 'ignore', shell: true })
    }
  } catch { /* уже остановлен */ }
}
process.on('exit', cleanup)

try {
  await waitForServer(BASE)

  const browser = await puppeteer.launch({
    executablePath,
    headless: 'shell',
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  })

  let rendered = 0
  for (const route of routes) {
    const page = await browser.newPage()
    try {
      await page.goto(BASE + route, { waitUntil: 'networkidle0', timeout: 60000 })
      // Даём vue-meta применить title/мета-теги
      await new Promise(r => setTimeout(r, 800))
      const html = await page.content()

      const outFile = route === '/'
        ? join(distDir, 'index.html')
        : join(distDir, route, 'index.html')
      mkdirSync(dirname(outFile), { recursive: true })
      writeFileSync(outFile, html, 'utf-8')
      rendered++
      console.log(`✓ ${route}`)
    } catch (err) {
      console.error(`✗ ${route}: ${err.message}`)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  console.log(`\nПререндерено страниц: ${rendered}/${routes.length}`)
  if (rendered === 0) process.exit(1)
} finally {
  cleanup()
}
