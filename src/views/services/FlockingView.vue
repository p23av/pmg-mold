<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

</script>

<template>
  <div class="page">
    <HeaderLayout />

    <section class="hero-service">
      <div class="container">
        <h1>Флокирование - декоративное бархатное покрытие</h1>
        <p class="hero-subtitle">
          Нанесение бархатистого покрытия на пластик, металл, дерево и другие поверхности.
          Премиальный внешний вид, приятная тактильность, защита от царапин.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">20+</span>
            <span class="stat-label">цветов</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0.5-5</span>
            <span class="stat-label">мм ворс</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">вручную</span>
          </div>
        </div>
      </div>
    </section>

    <section class="advantages">
      <div class="container">
        <h2>Преимущества флокирования</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">🧸</div>
            <h3>Бархатистая поверхность</h3>
            <p>Приятная на ощупь, премиальный внешний вид изделия.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🛡️</div>
            <h3>Защита</h3>
            <p>Предохраняет от царапин, сколов, небольших ударов.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🔇</div>
            <h3>Шумопоглощение</h3>
            <p>Снижает шум, вибрацию (для автокомпонентов, корпусов).</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🎨</div>
            <h3>Любые цвета</h3>
            <p>Широкая палитра, возможность подбора под бренд.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="materials">
      <div class="container">
        <h2>Материалы для флокирования</h2>
        <div class="materials-grid">
          <div class="material-card">
            <h3>Пластик</h3>
            <p>ABS, полипропилен, поликарбонат</p>
          </div>
          <div class="material-card">
            <h3>Металл</h3>
            <p>Сталь, алюминий, сплавы</p>
          </div>
          <div class="material-card">
            <h3>Дерево</h3>
            <p>Массив, МДФ, фанера</p>
          </div>
          <div class="material-card">
            <h3>Стекло</h3>
            <p>Декоративные элементы</p>
          </div>
          <div class="material-card">
            <h3>Резина</h3>
            <p>Уплотнители, ручки</p>
          </div>
          <div class="material-card">
            <h3>Кожа</h3>
            <p>Отделка интерьеров</p>
          </div>
        </div>
      </div>
    </section>

    <section class="applications">
      <div class="container">
        <h2>Где применяется</h2>
        <div class="applications-grid">
          <div class="application-item">🚗 Автомобильный тюнинг (торпедо, панели)</div>
          <div class="application-item">🎁 Подарочная упаковка, футляры</div>
          <div class="application-item">🛋️ Мебель (ящики, полки)</div>
          <div class="application-item">💍 Ювелирные шкатулки</div>
          <div class="application-item">📦 Корпуса приборов</div>
          <div class="application-item">👠 Обувь, аксессуары</div>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <h2>Технология нанесения</h2>
        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Подготовка</h3>
            <p>Очистка, обезжиривание, грунтование поверхности.</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Нанесение клея</h3>
            <p>Специальный флоковый клей, равномерный слой.</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Электростатическое нанесение</h3>
            <p>Ворсинки ориентируются вертикально в электростатическом поле.</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h3>Сушка</h3>
            <p>Полимеризация клея, фиксация ворса.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>Хотите уникальное покрытие?</h2>
          <p>Сделаем образец по вашему изделию</p>
          <div class="cta-buttons">
            <RouterLink to="/contact" class="btn-primary">Заказать флокирование</RouterLink>
            <button class="btn-secondary">Каталог цветов</button>
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

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.material-card {
  padding: 16px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  text-align: center;
}

.material-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
}

.material-card p {
  color: #64748b;
  font-size: 14px;
  margin: 0;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}

.application-item {
  padding: 16px 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  color: #475569;
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