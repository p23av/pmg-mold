<!-- src/views/HomeView.vue -->
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

import { useMeta } from 'vue-meta'
import { seoConfig } from '@/router/seo.config'

import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

import { RouterLink } from 'vue-router'

// Используем напрямую, без динамических ключей
const homeSeo = seoConfig.HOME

useMeta({
  title: homeSeo.title,
  meta: [
    { name: 'description', content: homeSeo.description },
    { name: 'keywords', content: 'пресс формы, литье алюминия, литье пластмасс, гальваника, порошковая окраска, флокирование' },
    { property: 'og:title', content: homeSeo.title },
    { property: 'og:description', content: homeSeo.description },
    { property: 'og:url', content: 'https://moldrussia.ru' },
    { property: 'og:image', content: 'https://moldrussia.ru/og-image.jpg' }
  ]
})

// Компоненты иконок
const MoldIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M3 17L10 10L14 14L21 7M3 17V21H7L16 12M3 17H7L16 8M21 7V3H17L8 12M21 7H17L8 16" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

const AluminumIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 12H17M12 7V17" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

const PlasticIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M19 7C19 9.20914 17.2091 11 15 11C12.7909 11 11 9.20914 11 7C11 4.79086 12.7909 3 15 3C17.2091 3 19 4.79086 19 7Z" stroke="#F59E0B" stroke-width="2"/>
    <path d="M13 15H9C7.89543 15 7 15.8954 7 17V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V17C17 15.8954 16.1046 15 15 15H13ZM13 15V11" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
  </svg>`
}

const CoatingIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 23C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

const PaintingIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 8V12L15 15" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

const FlockingIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="#EC4899" stroke-width="2"/>
    <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" stroke="#EC4899" stroke-width="2"/>
    <path d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" stroke="#EC4899" stroke-width="2"/>
  </svg>`
}

const posterImage = '/images/hero-poster.jpg'           // оптимизированное фото (размер ~100–250 КБ)
// const videoRef = ref(null)
const videoLoaded = ref(false)
const shouldLoadVideo = ref(false)

onMounted(() => {
  // Небольшая задержка, чтобы не блокировать первую отрисовку
  setTimeout(() => {
    shouldLoadVideo.value = true
  }, 400) // или 0–800 мс — протестируй на реальных устройствах

  // Альтернатива: IntersectionObserver, если hero не всегда в viewport
  // const observer = new IntersectionObserver(...)
})

function onVideoCanPlay() {
  videoLoaded.value = true
  // Можно videoRef.value.play() если autoplay не сработал
}

interface Service {
  title: string
  description: string
  icon: any
  link: string
}

const services: Service[] = [
  {
    title: 'Изготовление пресс-форм',
    description: 'Проектирование и производство пресс-форм любой сложности на современном ЧПУ-оборудовании.',
    icon: MoldIcon,
    link: '/services/molds'
  },
  {
    title: 'Литьё алюминия',
    description: 'Литьё деталей из алюминия под давлением с гарантией качества.',
    icon: AluminumIcon,
    link: '/services/aluminum'
  },
  {
    title: 'Литьё пластмасс',
    description: 'Производство пластиковых деталей методом литья под давлением.',
    icon: PlasticIcon,
    link: '/services/plastic'
  },
  {
    title: 'Гальванические покрытия',
    description: 'Нанесение защитных и декоративных покрытий: хромирование, цинкование, никелирование.',
    icon: CoatingIcon,
    link: '/services/galvanic'
  },
  {
    title: 'Покраска',
    description: 'Порошковая и жидкая покраска, защита от коррозии и износа.',
    icon: PaintingIcon,
    link: '/services/painting'
  },
  {
    title: 'Флокирование',
    description: 'Бархатистые декоративные покрытия для премиальной продукции.',
    icon: FlockingIcon,
    link: '/services/flocking'
  },
]

const portfolioItems = ref([
  { image: 'src/assets/images/portfolio/1.jpg', title: 'Пресс-форма для автопрома', desc: '32 гнезда, точность ±0.01 мм', category: 'Литьё алюминия' },
  { image: 'src/assets/images/portfolio/2.jpg', title: 'Корпус алюминиевый', desc: 'Литьё под давлением, анодирование', category: 'Литьё алюминия' },
  { image: 'src/assets/images/portfolio/3.jpg', title: 'Пластиковая деталь с флоком', desc: 'Премиум-покрытие', category: 'Литьё алюминия' },
  // добавь 6–9 штук
])

// Табы
const categories = ['Все', 'Пресс-формы', 'Литьё алюминия', 'Литьё пластмасс', 'Гальваника', 'Покраска', 'Флокирование']
const activeCategory = ref('Все')

// Фильтрованные items для текущей категории
const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'Все') return portfolioItems.value
  return portfolioItems.value.filter(item => item.category === activeCategory.value)
})

// Для оборудования (плейсхолдеры)
// const equipmentItems = [
//   { image: '/images/equipment/cnc.jpg', title: 'ЧПУ 5-осевой центр' },
//   { image: '/images/equipment/thermoplast.jpg', title: 'Термопластавтомат 500 т' },
//   { image: '/images/equipment/galvanic.jpg', title: 'Гальваническая линия' },
//   // добавь фото реальных станков
// ]

// Для клиентов (логотипы — серые, hover цвет)
const clientLogos = [
  'src/assets/images/clients/logo1.webp',
  'src/assets/images/clients/logo2.webp',
  'src/assets/images/clients/logo3.webp',
  'src/assets/images/clients/logo4.webp',
  'src/assets/images/clients/logo5.webp',
  'src/assets/images/clients/logo6.webp',
  'src/assets/images/clients/logo7.webp',
  'src/assets/images/clients/logo8.webp',
  // добавь 8–12
]
</script>

<template>
  <div class="page">
    <!-- Header -->
    <HeaderLayout activePage="home" />

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero__grid">
          <div class="hero__content">
            <h1 class="hero__title">
              Пресс-формы и литьё под давлением любой сложности<br>
              Полный цикл: от чертежа до готовой детали за 2–4 недели
            </h1>
            <p class="hero__subtitle">
              С 1990 года производим пресс-формы и занимаемся литьём алюминия/пластика, а также оказываем различные услуги по обработке металла для обеспечения полного цикла производства.<br>
              Бесплатный расчёт стоимости за 24 часа.
            </p>
            <div class="hero__buttons">
              <RouterLink to="/contact" class="btn btn-primary">
                Получить расчёт
              </RouterLink>
              <RouterLink to="/services" class="btn btn-outline">
                Смотреть услуги
              </RouterLink>
            </div>
          </div>
          <div class="hero__image-wrapper">
            <div class="hero__image">
              <!-- <img src="/images/hero.jpg" alt="Производство пресс-форм и литьё металла" /> -->
              <img
                v-if="!videoLoaded"
                :src="posterImage"
                alt="Производство пресс-форм"
                class="w-full h-full object-cover"
                fetchpriority="high"
              />

              <!-- 2. Видео появляется только после загрузки -->
              <video
                v-if="shouldLoadVideo"
                ref="videoRef"
                autoplay
                loop
                muted
                playsinline
                preload="none"
                :poster="posterImage"
                class="w-full h-full object-cover transition-opacity duration-500"
                :class="{ 'opacity-0': !videoLoaded, 'opacity-100': videoLoaded }"
                @canplay="onVideoCanPlay"
              >
                <!-- <source src="/videos/hero-production.webm" type="video/webm" /> -->
                <source src="/src/assets/video/mold-factory.mp4"  type="video/mp4"  />
                Ваш браузер не поддерживает видео.
              </video>
              
              <div class="hero__badge">
                <span>Работаем с 2002 года</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <!-- <section class="features">
      <div class="container">
        <div class="features__grid">
          <div class="feature">
            <div class="feature__number">18+</div>
            <h3 class="feature__title">Лет опыта</h3>
            <p class="feature__description">Успешной работы на рынке</p>
          </div>
          <div class="feature">
            <div class="feature__number">500+</div>
            <h3 class="feature__title">Проектов</h3>
            <p class="feature__description">Реализовано для клиентов</p>
          </div>
          <div class="feature">
            <div class="feature__number">50+</div>
            <h3 class="feature__title">Оборудования</h3>
            <p class="feature__description">Современных станков</p>
          </div>
          <div class="feature">
            <div class="feature__number">24/7</div>
            <h3 class="feature__title">Поддержка</h3>
            <p class="feature__description">Техническая консультация</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 2. УТП (Features) -->
    <section class="features bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
      <div class="container">
        <div class="features__grid">
          <div class="feature"><div class="feature__number">24+</div><h3>Лет опыта</h3><p>На рынке металлообработки</p></div>
          <div class="feature"><div class="feature__number">500+</div><h3>Проектов</h3><p>Успешно реализовано</p></div>
          <div class="feature"><div class="feature__number">50+</div><h3>Единиц оборудования</h3><p>Современный парк</p></div>
          <div class="feature"><div class="feature__number">24 ч</div><h3>Расчёт стоимости</h3><p>Бесплатно и точно</p></div>
          <div class="feature"><div class="feature__number">Полный цикл</div><h3>Производство</h3><p>От проектирования до покрытий</p></div>
          <div class="feature"><div class="feature__number">Гарантия</div><h3>Сроков</h3><p>Без штрафов за просрочку</p></div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <!-- <section class="services">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Наши ключевые услуги</h2>
          <p class="section-subtitle">Полный цикл производства от проектирования до готовой продукции</p>
        </div>
        <div class="services__grid">
          <RouterLink
            v-for="service in services"
            :key="service.title"
            :to="service.link"
            class="service-card"
          >
            <div class="service-card__icon">
              <component :is="service.icon" />
            </div>
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__description">{{ service.description }}</p>
            <div class="service-card__link">
              Подробнее
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>
    </section> -->

    <!-- 3. Услуги – без изменений, но после УТП -->
    <section class="services py-20 bg-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Ключевые услуги</h2>
          <p class="section-subtitle">Полный цикл производства от проектирования до готовой продукции</p>
        </div>
        <div class="services__grid">
          <RouterLink v-for="service in services" :key="service.title" :to="service.link" class="service-card">
            <div class="service-card__icon"><component :is="service.icon" /></div>
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__description">{{ service.description }}</p>
            <div class="service-card__link">Подробнее →</div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 4. Форма расчёта – новая, самая важная -->
    <section class="quick-quote">
      <div class="container">
        <div class="quote-content">
          <h2 class="quote-title">Узнайте стоимость вашего проекта за 24 часа</h2>
          <p class="quote-subtitle">
            Отправьте чертежи, 3D-модель или описание детали — менеджер свяжется и подготовит точный расчёт бесплатно и без обязательств.
          </p>

          <form class="quote-form">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Ваше имя *</label>
                <input type="text" id="name" placeholder="Как к вам обращаться" required />
              </div>
              <div class="form-group">
                <label for="phone">Телефон *</label>
                <input type="tel" id="phone" placeholder="+7 (___) ___-__-__" required />
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="example@company.ru" />
            </div>

            <div class="form-group">
              <label for="description">Описание детали / ссылка на чертёж</label>
              <textarea id="description" rows="5" placeholder="Материал, размеры, количество, особые требования..."></textarea>
            </div>

            <div class="form-group file-group">
              <label for="files">Прикрепить файлы (STL, STEP, PDF, DWG и др., до 20 МБ)</label>
              <input type="file" id="files" multiple accept=".stl,.step,.stp,.iges,.pdf,.dwg,.dxf,.jpg,.png" />
              <small class="file-hint">Можно прикрепить несколько файлов</small>
            </div>

            <div class="form-privacy">
              <p>Ваши данные защищены. Мы не передаём информацию третьим лицам. Ответим в течение рабочего дня.</p>
            </div>

            <button type="submit" class="btn btn-primary btn-large submit-btn">
              Отправить и получить расчёт
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- 5. Почему мы -->
    <section class="why-us">
      <div class="container">
        <div class="why-us__grid">
          <div class="why-us__image">
            <img src="/images/engineer.jpg" alt="Инженер за работой на производстве" />
            <div class="why-us__experience"><span>24 года</span><p>опыта</p></div>
          </div>
          <div class="why-us__content">
            <h2 class="why-us__title">Почему выбирают нас?</h2>
            <p class="why-us__description">
              Компания СТД Индастриал — это надёжный партнёр в области металлообработки и
              литья пластмасс. Мы сочетаем многолетний опыт с современным оборудованием для
              производства деталей высочайшего качества.
            </p>
            
            <div class="why-us__list">
              <div class="why-us__item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Строгий контроль качества на всех этапах производства</span>
              </div>
              <div class="why-us__item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Индивидуальный подход к каждому проекту</span>
              </div>
              <div class="why-us__item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Использование экологичных технологий и материалов</span>
              </div>
              <div class="why-us__item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Соблюдение сроков и прозрачное ценообразование</span>
              </div>
              <div class="why-us__item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Техническая поддержка на всех этапах сотрудничества</span>
              </div>
            </div>
            
            <RouterLink to="/contact" class="btn btn-primary">
              Связаться с нами
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Портфолио с табами и горизонтальной каруселью -->
    <section class="portfolio">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Примеры наших работ</h2>
          <p class="section-subtitle">Более 500 проектов в автопроме, электронике, медицине и потребительских товарах</p>
        </div>

        <!-- Табы -->
        <div class="portfolio-tabs">
          <button
            v-for="cat in categories"
            :key="cat"
            class="tab-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Карусель -->
        <div class="portfolio-carousel">
          <div class="carousel-inner" v-if="filteredPortfolio.length > 0">
            <div class="portfolio-card" v-for="item in filteredPortfolio" :key="item.title">
              <img :src="item.image" :alt="item.title" class="portfolio-img" />
              <div class="portfolio-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </div>
          <p v-else class="no-items">В этой категории пока нет примеров. Выберите другую.</p>
        </div>

        <div class="text-center mt-12">
          <RouterLink to="/portfolio" class="btn btn-primary btn-large">Смотреть все кейсы</RouterLink>
        </div>
      </div>
    </section>

    <!-- 7. Оборудование – новая -->
    <!-- <section class="equipment py-20 bg-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Наш парк оборудования</h2>
          <p class="section-subtitle">Более 50 современных станков для полного цикла производства</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="item in equipmentItems" :key="item.title" class="rounded-xl overflow-hidden shadow-lg">
            <img :src="item.image" :alt="item.title" class="w-full h-64 object-cover" />
            <div class="p-6 text-center bg-gray-50">
              <h3 class="text-xl font-bold">{{ item.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- 8. Клиенты – новая -->
    <section class="clients">
      <div class="container text-center">
        <h2 class="section-title">Нам доверяют</h2>
        <div class="clients-logos">
          <img
            v-for="(logo, i) in clientLogos"
            :key="i"
            :src="logo"
            alt="Клиент"
            class="client-logo"
          />
        </div>
      </div>
    </section>

    <!-- 9. Финальный CTA -->
    <section class="cta py-20 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
      <div class="container text-center">
        <h2 class="cta__title text-4xl font-bold mb-6">Готовы запустить ваш проект?</h2>
        <p class="text-xl mb-10 opacity-90">Отправьте запрос прямо сейчас — ответим в течение рабочего дня</p>
        <div class="cta__buttons flex justify-center gap-6 flex-wrap">
          <RouterLink to="/contact" class="btn btn-primary btn-large">Получить расчёт</RouterLink>
          <a href="tel:+79999999999" class="btn btn-outline btn-large flex items-center gap-3">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            +7 (999) 999-99-99
          </a>
          <!-- Добавь иконки WA/Telegram если нужно -->
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterLayout />
  </div>
</template>

<style scoped>

video {
  transition: opacity 0.8s ease;
}

.page {
  color: #1f2937;
  overflow-x: hidden;
}

.container {
  width: 85%;
  margin: 0 auto;
  padding: 0 24px;
}

/* Typography */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #111827;
}

.section-subtitle {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  gap: 0.5rem;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
}

.btn-outline {
  background: transparent;
  border: 2px solid #d1d5db;
  color: #374151;
}

.btn-outline:hover {
  border-color: #2563eb;
  color: #2563eb;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

/* Hero Section */
.hero {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  z-index: 0;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  position: relative;
  z-index: 1;
}

.hero__title {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.1;
  text-align: start;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  color: #111827;
}

.quick-quote form input, .quick-quote form textarea {
  background: white;
  border: 1px solid rgba(255,255,255,0.3);
  color: #111827;
}
.quick-quote form input::placeholder, .quick-quote form textarea::placeholder {
  color: #6b7280;
}

/* Форма расчёта */
.quick-quote {
  padding: 6rem 0;
  background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%);
  color: white;
  text-align: center;
}

.quote-content {
  max-width: 800px;
  margin: 0 auto;
}

.quote-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  line-height: 1.2;
}

.quote-subtitle {
  font-size: 1.25rem;
  opacity: 0.95;
  margin-bottom: 3rem;
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}

.quote-form {
  display: grid;
  gap: 1.5rem;
  max-width: 720px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: white;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.file-group input[type="file"] {
  width: 100%;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px dashed rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
}

.file-hint {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  opacity: 0.8;
}

.form-privacy {
  font-size: 0.95rem;
  opacity: 0.9;
  margin: 1rem 0;
}

.submit-btn {
  width: 100%;
  padding: 1.25rem;
  font-size: 1.25rem;
  background: white;
  color: #2563eb;
  border: none;
  border-radius: 0.5rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.submit-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.15);
  background: #f3f4f6;
}

/* Портфолио и оборудование – hover эффекты */
.portfolio-item:hover img, .equipment > div:hover img {
  transform: scale(1.05);
  transition: transform 0.4s;
}

/* Клиенты grayscale */
.clients img {
  transition: all 0.3s;
}
.clients img:hover {
  transform: scale(1.1);
  filter: grayscale(0) !important;
}

/* Портфолио */
.portfolio {
  padding: 6rem 0;
  background: #f8fafc;
}

.portfolio-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 500;
  background: #e5e7eb;
  color: #374151;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn.active,
.tab-btn:hover {
  background: #2563eb;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2);
}

.portfolio-carousel {
  overflow-x: auto;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
}

.portfolio-carousel::-webkit-scrollbar {
  height: 8px;
}

.portfolio-carousel::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

.portfolio-carousel::-webkit-scrollbar-track {
  background: transparent;
}

.carousel-inner {
  display: flex;
  gap: 2rem;
  flex-wrap: nowrap;
  min-width: max-content;
}

.portfolio-card {
  flex: 0 0 320px;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
}

.portfolio-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.portfolio-card:hover .portfolio-img {
  transform: scale(1.05);
}

.portfolio-info {
  padding: 1.5rem;
}

.portfolio-info h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #111827;
}

.portfolio-info p {
  color: #6b7280;
  font-size: 1rem;
}

.no-items {
  text-align: center;
  color: #6b7280;
  font-size: 1.125rem;
  padding: 4rem 0;
}

/* Клиенты */
.clients {
  padding: 4rem 0;
  background: #f8fafc;
}

.clients-logos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.client-logo {
  height: 80px;
  width: 100%;
  object-fit: contain;
  filter: grayscale(80%);
  opacity: 0.75;
  transition: filter 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
}

.client-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.08);
}

/* ///////////////////////////////////////////////////////////////////////////// */

@media (min-width: 768px) {
  .clients-logos {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1024px) {
  .hero::before {
    opacity: 0.3;
    width: 100%;
    height: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  }
}

@media (max-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 1024px) {
  .hero__title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 2rem;
  }
}

.hero__subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: start;
}

.hero__buttons {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .hero__buttons {
    flex-direction: column;
  }
  
  .hero__buttons .btn {
    width: 100%;
    margin-bottom: 1rem;
  }
}

.hero__image-wrapper {
  position: relative;
  height: 100%;
}

.hero__image {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  height: 100%;
  margin-top: 2rem;
}

.hero__image video {
  height: 100%;
  object-fit: cover;
}

.hero__image img {
  width: 100%;
  height: auto;
  display: block;
}

.hero__badge {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.hero__badge span {
  font-weight: 600;
  color: #111827;
}

/* Services */
.services {
  padding: 6rem 0;
  background: white;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
}

.service-card:hover {
  transform: translateY(-0.5rem);
  border-color: #2563eb;
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
}

.service-card__icon {
  margin-bottom: 1.5rem;
}

.service-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.service-card__description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #2563eb;
  font-weight: 600;
  transition: gap 0.2s;
}

.service-card:hover .service-card__link {
  gap: 1rem;
}

/* Features */
.features {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.feature__number {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.feature__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
}

.feature__description {
  color: #6b7280;
}

/* Why Us */
.why-us {
  padding: 6rem 0;
  background: white;
}

.why-us__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

@media (max-width: 1024px) {
  .why-us__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.why-us__image {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.why-us__image img {
  width: 100%;
  height: auto;
  display: block;
}

.why-us__experience {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.why-us__experience span {
  display: block;
  font-size: 2rem;
  font-weight: 800;
  color: #2563eb;
}

.why-us__experience p {
  margin: 0;
  color: #6b7280;
  font-size: 0.875rem;
}

.why-us__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #111827;
}

@media (max-width: 768px) {
  .why-us__title {
    font-size: 2rem;
  }
}

.why-us__description {
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.why-us__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.why-us__item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.why-us__item span {
  flex: 1;
  color: #374151;
  line-height: 1.5;
}

/* CTA */
.cta {
  padding: 6rem 0;
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
  color: white;
  text-align: center;
}

.cta__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .cta__title {
    font-size: 2rem;
  }
}

.cta__description {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.cta__buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cta__buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta__buttons .btn-large {
    width: 100%;
    max-width: 300px;
  }
}

.cta .btn-outline {
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.cta .btn-outline:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>