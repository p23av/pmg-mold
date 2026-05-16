<script setup lang="ts">
import { useMeta } from 'vue-meta'
import { seoConfig } from '@/router/seo.config'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

useMeta({
  title: seoConfig.ALUMINUM.title,
  meta: [
    { name: 'description', content: seoConfig.ALUMINUM.description },
    { name: 'keywords', content: 'литье алюминия, литье алюминия под давлением, алюминиевое литье, литье алюминиевых деталей' }
  ]
})
</script>

<template>
  <div class="page">
    <HeaderLayout />

    <section class="hero-service">
      <div class="container">
        <h1>Литье алюминия под давлением на заказ</h1>
        <p class="hero-subtitle">
          Профессиональное литье алюминиевых деталей любой сложности. 
          Современные литейные машины, контроль качества на всех этапах.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-number">200+</span>
            <span class="stat-label">тонн/год</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">50-2000</span>
            <span class="stat-label">тоннаж, тс</span>
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
        <h2>Преимущества литья под давлением</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <div class="advantage-icon">⚡</div>
            <h3>Высокая точность</h3>
            <p>Детали соответствуют чертежам с минимальными допусками, снижение мехобработки.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">🏭</div>
            <h3>Сложная геометрия</h3>
            <p>Возможность литья тонкостенных деталей со сложными внутренними полостями.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">⚙️</div>
            <h3>Высокая прочность</h3>
            <p>Плотная мелкозернистая структура металла обеспечивает высокие механические свойства.</p>
          </div>
          <div class="advantage-card">
            <div class="advantage-icon">📈</div>
            <h3>Серийность</h3>
            <p>Эффективно для крупных партий - от 1000 до 100000+ деталей в год.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="applications">
      <div class="container">
        <h2>Применение алюминиевого литья</h2>
        <div class="applications-grid">
          <div class="application-item">🚗 Автомобилестроение (блоки двигателей, корпуса)</div>
          <div class="application-item">⚡ Электротехника (корпуса, радиаторы)</div>
          <div class="application-item">🏭 Машиностроение (корпусные детали)</div>
          <div class="application-item">🔧 Промышленное оборудование</div>
          <div class="application-item">💡 Светотехника (корпуса светильников)</div>
          <div class="application-item">📦 Товары народного потребления</div>
        </div>
      </div>
    </section>

    <section class="alloys">
      <div class="container">
        <h2>Сплавы алюминия</h2>
        <div class="alloys-grid">
          <div class="alloy-card">
            <h3>АК12 (АЛ2)</h3>
            <p>Высокая жидкотекучесть, для сложных тонкостенных деталей</p>
          </div>
          <div class="alloy-card">
            <h3>АК9ч (АЛ4)</h3>
            <p>Повышенная прочность, герметичность</p>
          </div>
          <div class="alloy-card">
            <h3>АК7ч (АЛ9)</h3>
            <p>Хорошая свариваемость, для ответственных деталей</p>
          </div>
          <div class="alloy-card">
            <h3>АК5М2 (АЛ5)</h3>
            <p>Жаропрочный, для работы при повышенных температурах</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-card">
          <h2>Рассчитаем стоимость литья под ваш проект</h2>
          <p>Пришлите чертеж или 3D-модель - получите КП за 24 часа</p>
          <div class="cta-buttons">
            <RouterLink to="/contact" class="btn-primary">Отправить запрос</RouterLink>
            <button class="btn-secondary">Требования к чертежам</button>
          </div>
        </div>
      </div>
    </section>

    <FooterLayout />
  </div>
</template>

<style scoped>
/* Те же стили, что в MoldsView.vue */
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

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
}

.alloys-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  max-width: 900px;
  margin: 0 auto;
}

.alloy-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border-left: 4px solid #3b82f6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.alloy-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
}

.alloy-card p {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
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
  
  .cta-card {
    padding: 40px 24px;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
}
</style>