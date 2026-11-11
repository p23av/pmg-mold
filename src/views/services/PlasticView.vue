<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

</script>

<template>
  <div class="page">
    <HeaderLayout />

    <section class="hero-service">
      <div class="container">
        <h1>Литье пластмасс под давлением на заказ</h1>
        <p class="hero-subtitle">
          Производство пластиковых деталей любой сложности. 
          Современные термопластавтоматы, широкий выбор материалов.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">50-1000</span>
            <span class="stat-label">тоннаж, тс</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100+</span>
            <span class="stat-label">марок пластика</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0.01</span>
            <span class="stat-label">мм точность</span>
          </div>
        </div>
      </div>
    </section>

    <section class="advantages">
      <div class="container">
        <h2>Наши возможности</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">🎯</div>
            <h3>Высокая точность</h3>
            <p>Стабильность размеров от партии к партии, минимальные допуски.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🔄</div>
            <h3>Сложная геометрия</h3>
            <p>Литье деталей с поднутрениями, резьбой, сложными внутренними полостями.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">⚡</div>
            <h3>Быстрая переналадка</h3>
            <p>Быстрая смена пресс-форм, оптимизация времени цикла.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">📊</div>
            <h3>Любая серийность</h3>
            <p>От опытных партий (100 шт) до крупносерийного производства (100000+).</p>
          </div>
        </div>
      </div>
    </section>

    <section class="materials">
      <div class="container">
        <h2>Материалы для литья</h2>
        <div class="materials-grid">
          <div class="material-card">
            <h3>ABS</h3>
            <p>Ударопрочный, для корпусных деталей, бытовой техники</p>
          </div>
          <div class="material-card">
            <h3>Полипропилен (PP)</h3>
            <p>Химически стойкий, для автокомпонентов, тары</p>
          </div>
          <div class="material-card">
            <h3>Полиамид (PA)</h3>
            <p>Прочный, износостойкий, для нагруженных деталей</p>
          </div>
          <div class="material-card">
            <h3>Поликарбонат (PC)</h3>
            <p>Прозрачный, ударопрочный, для оптики, защитных кожухов</p>
          </div>
          <div class="material-card">
            <h3>Полиэтилен (PE)</h3>
            <p>Эластичный, морозостойкий</p>
          </div>
          <div class="material-card">
            <h3>POM</h3>
            <p>Скольжения, для втулок, шестерен</p>
          </div>
        </div>
      </div>
    </section>

    <section class="applications">
      <div class="container">
        <h2>Применение</h2>
        <div class="applications-grid">
          <div class="application-item">🚗 Автокомпоненты</div>
          <div class="application-item">📱 Электроника и корпуса</div>
          <div class="application-item">💊 Медицинские изделия</div>
          <div class="application-item">🏭 Промышленные детали</div>
          <div class="application-item">📦 Упаковка</div>
          <div class="application-item">🧸 Товары народного потребления</div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>Нужны пластиковые детали?</h2>
          <p>Разработаем технологию и изготовим пробную партию</p>
          <div class="cta-buttons">
            <RouterLink to="/contact" class="btn-primary">Оставить заявку</RouterLink>
            <button class="btn-secondary">Технические требования</button>
          </div>
        </div>
      </div>
    </section>

    <FooterLayout />
  </div>
</template>

<style scoped>
/* Копируем стили из AluminumView.vue или выносим общие в отдельный файл */
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

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.material-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid #f59e0b;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.material-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
}

.material-card p {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
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