<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

</script>

<template>
  <div class="page">
    <HeaderLayout />

    <!-- Hero Section -->
    <section class="hero-service">
      <div class="container">
        <h1>Изготовление пресс-форм для литья алюминия и пластмасс</h1>
        <p class="hero-subtitle">
          Проектируем и производим пресс-формы любой сложности на современном ЧПУ-оборудовании. 
          Гарантия точности до ±0.01 мм и долговечности оснастки.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">30+</span>
            <span class="stat-label">лет опыта</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">500+</span>
            <span class="stat-label">пресс-форм</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0.01</span>
            <span class="stat-label">мм точность</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Типы пресс-форм -->
    <section class="types">
      <div class="container">
        <h2>Типы пресс-форм, которые мы производим</h2>
        <div class="types-grid">
          <div class="type-card">
            <div class="type-icon">🔩</div>
            <h3>Для литья алюминия</h3>
            <p>Пресс-формы для литья алюминиевых сплавов под давлением. Высокая стойкость к термоциклическим нагрузкам.</p>
          </div>
          <div class="type-card">
            <div class="type-icon">🧴</div>
            <h3>Для литья пластмасс</h3>
            <p>Многогнездные пресс-формы для термопластов, с горячеканальными системами и быстрой сменой вставок.</p>
          </div>
          <div class="type-card">
            <div class="type-icon">⚙️</div>
            <h3>Для цинковых сплавов</h3>
            <p>Износостойкие пресс-формы для литья ЦАМ, с оптимизированной системой охлаждения.</p>
          </div>
          <div class="type-card">
            <div class="type-icon">📐</div>
            <h3>Крупногабаритные</h3>
            <p>Пресс-формы для крупногабаритных деталей весом до 50 кг, с усиленной конструкцией.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Этапы производства -->
    <section class="process">
      <div class="container">
        <h2>Этапы изготовления пресс-форм</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Проектирование</h3>
            <p>3D-моделирование, расчет литниковых систем, термодинамический анализ.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Мехобработка</h3>
            <p>Фрезеровка на 5-осевых станках с ЧПУ, электроэрозионная обработка.</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Термообработка</h3>
            <p>Закалка, отпуск, азотирование для повышения твердости и износостойкости.</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h3>Сборка и тесты</h3>
            <p>Сборка пресс-формы, контроль геометрии, тестовый розлив.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Материалы -->
    <section class="materials">
      <div class="container">
        <h2>Используемые материалы</h2>
        <div class="materials-grid">
          <div class="material-item">
            <strong>1.2343 (H11)</strong> - для форм литья алюминия
          </div>
          <div class="material-item">
            <strong>1.2344 (H13)</strong> - повышенная стойкость
          </div>
          <div class="material-item">
            <strong>1.2767</strong> - для форм под давлением
          </div>
          <div class="material-item">
            <strong>Нержавеющие стали</strong> - для пищевых производств
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>Нужна пресс-форма под ваш проект?</h2>
          <p>Рассчитаем стоимость изготовления за 1 рабочий день</p>
          <div class="cta-buttons">
            <RouterLink to="/contact" class="btn-primary">Связаться с нами</RouterLink>
            <button class="btn-secondary">Скачать опросный лист</button>
          </div>
        </div>
      </div>
    </section>

    <FooterLayout />
  </div>
</template>

<style scoped>
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

.types-grid,
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.type-card,
.advantage-card {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s;
}

.type-card:hover,
.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.type-icon,
.advantage-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.type-card h3,
.advantage-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #0f172a;
}

.type-card p,
.advantage-card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  position: relative;
}

.step {
  text-align: center;
  padding: 32px;
  background: white;
  border-radius: 16px;
  position: relative;
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

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.material-item {
  padding: 16px 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  text-align: center;
  color: #475569;
}

.material-item strong {
  color: #0f172a;
  font-weight: 600;
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
  
  .process-steps {
    grid-template-columns: 1fr;
  }
  
  .cta-card {
    padding: 40px 24px;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
}
</style>