<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

</script>

<template>
  <div class="page">
    <HeaderLayout />

    <section class="hero-service">
      <div class="container">
        <h1>Порошковая окраска металла на заказ</h1>
        <p class="hero-subtitle">
          Современная линия порошковой окраски. Широкая цветовая гамма, 
          стойкое покрытие, защита от коррозии и механических повреждений.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">300+</span>
            <span class="stat-label">цветов RAL</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">до 3м</span>
            <span class="stat-label">габариты</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">контроль</span>
          </div>
        </div>
      </div>
    </section>

    <section class="advantages">
      <div class="container">
        <h2>Преимущества порошковой окраски</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">🛡️</div>
            <h3>Высокая стойкость</h3>
            <p>Устойчивость к царапинам, сколам, УФ-излучению, химическим веществам.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🎨</div>
            <h3>Любой цвет</h3>
            <p>Широкий выбор цветов по RAL, специальные эффекты (металлик, молотковый).</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🌱</div>
            <h3>Экологичность</h3>
            <p>Без растворителей, безвредно для персонала и окружающей среды.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">⚡</div>
            <h3>Быстрое отверждение</h3>
            <p>Короткое время цикла, высокая производительность.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <h2>Этапы окраски</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Подготовка</h3>
            <p>Очистка, обезжиривание, пескоструйная обработка для лучшей адгезии.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Нанесение</h3>
            <p>Электростатическое нанесение порошка в камере напыления.</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Полимеризация</h3>
            <p>Отверждение в печи при температуре 180-200°C.</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h3>Контроль</h3>
            <p>Проверка толщины покрытия, адгезии, внешнего вида.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="applications">
      <div class="container">
        <h2>Что окрашиваем</h2>
        <div class="applications-grid">
          <div class="application-item">🏗️ Металлоконструкции</div>
          <div class="application-item">🚗 Автозапчасти</div>
          <div class="application-item">🏭 Промышленное оборудование</div>
          <div class="application-item">🔩 Крепеж и метизы</div>
          <div class="application-item">📦 Профиль, листовой металл</div>
          <div class="application-item">🪑 Мебель</div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>Нужно покрасить детали?</h2>
          <p>Рассчитаем стоимость за 1 день, срочная окраска</p>
          <div class="cta-buttons">
            <RouterLink to="/contact" class="btn-primary">Оставить заявку</RouterLink>
            <button class="btn-secondary">Скачать техтребования</button>
          </div>
        </div>
      </div>
    </section>

    <FooterLayout />
  </div>
</template>

<style scoped>
/* Стили аналогичные предыдущим */
.page {
  font-family: 'Inter', sans-serif;
  color: #1f2937;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.hero-service {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  text-align: center;
}

.hero-service h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #0f172a;
}

.hero-subtitle {
  font-size: 20px;
  color: #475569;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 36px;
  font-weight: 800;
  color: #3b82f6;
  line-height: 1.2;
}

.stat-label {
  font-size: 14px;
  color: #64748b;
}

section {
  padding: 60px 0;
}

section:nth-child(even) {
  background: #f8fafc;
}

h2 {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
  color: #0f172a;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.advantage-card {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.advantage-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.advantage-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #0f172a;
}

.advantage-card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.step {
  text-align: center;
  padding: 32px;
  background: white;
  border-radius: 16px;
}

.step-number {
  width: 48px;
  height: 48px;
  background: #3b82f6;
  color: white;
  font-size: 24px;
  font-weight: 700;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.step h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #0f172a;
}

.step p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.application-item {
  padding: 16px 24px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  color: #475569;
  text-align: center;
}

.cta {
  padding: 0 0 60px;
}

.cta-card {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  padding: 60px;
  border-radius: 24px;
  text-align: center;
}

.cta-card h2 {
  color: white;
  margin-bottom: 16px;
}

.cta-card p {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.btn-primary {
  display: inline-block;
  padding: 16px 32px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59,130,246,0.3);
}

.btn-secondary {
  padding: 16px 32px;
  background: transparent;
  border: 2px solid rgba(255,255,255,0.3);
  color: white;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  border-color: white;
  background: rgba(255,255,255,0.1);
}

@media (max-width: 768px) {
  .hero-service h1 {
    font-size: 32px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  h2 {
    font-size: 28px;
  }
  
  .cta-card {
    padding: 40px 24px;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
}
</style>