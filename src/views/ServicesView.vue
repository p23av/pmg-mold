<!-- ServicesView.vue -->
<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'
import { RouterLink } from 'vue-router'

// Иконки
const MoldIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M3 17L10 10L14 14L21 7M3 17V21H7L16 12M3 17H7L16 8M21 7V3H17L8 12M21 7H17L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

const AluminumIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7 12H17M12 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

const PlasticIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M19 7C19 9.20914 17.2091 11 15 11C12.7909 11 11 9.20914 11 7C11 4.79086 12.7909 3 15 3C17.2091 3 19 4.79086 19 7Z" stroke="currentColor" stroke-width="2"/>
    <path d="M13 15H9C7.89543 15 7 15.8954 7 17V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V17C17 15.8954 16.1046 15 15 15H13ZM13 15V11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  </svg>`
}

const GalvanicIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 23C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

const PaintingIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12 8V12L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
}

const FlockingIcon = {
  template: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none">
    <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" stroke="currentColor" stroke-width="2"/>
    <path d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6Z" stroke="currentColor" stroke-width="2"/>
    <path d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" stroke="currentColor" stroke-width="2"/>
  </svg>`
}

// Данные услуг
interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  icon: any
  color: string
  features: string[]
  stats: Array<{ value: string; label: string }>
}

const services: Service[] = [
  {
    id: 'molds',
    title: 'Изготовление пресс-форм',
    subtitle: 'Точное оснащение для требовательных применений',
    description: 'Проектирование и производство пресс-форм любой сложности на современном ЧПУ-оборудовании.',
    icon: MoldIcon,
    color: '#3B82F6',
    features: ['CAD/CAM технологии', 'Сложные геометрии', 'Многогнёздные формы'],
    stats: [
      { value: '±0.005', label: 'Допуск, мм' },
      { value: '50+', label: 'Проектов' }
    ]
  },
  {
    id: 'aluminum',
    title: 'Литьё алюминия',
    subtitle: 'Лёгкие и прочные компоненты для промышленности',
    description: 'Литьё деталей из алюминия под давлением с гарантией качества.',
    icon: AluminumIcon,
    color: '#10B981',
    features: ['Тонкие стенки от 1.5 мм', 'Сложные геометрии', 'Превосходная теплоотдача'],
    stats: [
      { value: '50г-15кг', label: 'Диапазон веса' },
      { value: '6 сплавов', label: 'Материалы' }
    ]
  },
  {
    id: 'plastic',
    title: 'Литьё пластмасс',
    subtitle: 'Универсальные решения для полимерных компонентов',
    description: 'Производство пластиковых деталей методом литья под давлением.',
    icon: PlasticIcon,
    color: '#F59E0B',
    features: ['ABS, PC, PP, PE', 'Бикомпонентное литье', 'Лазерная маркировка'],
    stats: [
      { value: '0.1г-3кг', label: 'Размер деталей' },
      { value: '9+', label: 'Материалов' }
    ]
  },
  {
    id: 'galvanic',
    title: 'Гальванические покрытия',
    subtitle: 'Электрохимические покрытия для защиты и декора',
    description: 'Нанесение защитных и декоративных покрытий: хромирование, цинкование, никелирование.',
    icon: GalvanicIcon,
    color: '#8B5CF6',
    features: ['Цинкование', 'Никелирование', 'Хромирование', 'Меднение'],
    stats: [
      { value: '5-50 мкм', label: 'Толщина' },
      { value: '240 ч', label: 'Солевой туман' }
    ]
  },
  {
    id: 'painting',
    title: 'Покраска',
    subtitle: 'Защитные и декоративные покрытия',
    description: 'Порошковая и жидкая покраска, защита от коррозии и износа.',
    icon: PaintingIcon,
    color: '#3B82F6',
    features: ['Порошковая покраска', 'Жидкая покраска', 'Антивандальные', 'RAL цвета'],
    stats: [
      { value: '40-120 мкм', label: 'Толщина' },
      { value: '1000 ч', label: 'Защита' }
    ]
  },
  {
    id: 'flocking',
    title: 'Флокирование',
    subtitle: 'Декоративные бархатные покрытия',
    description: 'Бархатистые декоративные покрытия для премиальной продукции.',
    icon: FlockingIcon,
    color: '#EC4899',
    features: ['Бархатистая поверхность', 'Антистатика', 'Шумопоглощение', 'Теплоизоляция'],
    stats: [
      { value: '0.3-3 мм', label: 'Длина ворса' },
      { value: '10+', label: 'Цветов' }
    ]
  }
]

const requestQuote = () => {
  // Логика открытия формы
  console.log('Open quote form')
}
</script>

<template>
  <div class="services-page">
    <!-- Header -->
    <HeaderLayout activePage="services" />

    <!-- Hero -->
    <section class="services-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Наши услуги</h1>
          <p class="hero-subtitle">
            Полный цикл производства от проектирования до готовой продукции. 
            Мы предлагаем комплексные решения для вашего бизнеса.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">24+</div>
              <div class="stat-label">Лет опыта</div>
            </div>
            <div class="stat">
              <div class="stat-number">6</div>
              <div class="stat-label">Основных услуг</div>
            </div>
            <div class="stat">
              <div class="stat-number">±0.005</div>
              <div class="stat-label">Допуск, мм</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-grid-section">
      <div class="container">
        <div class="services-grid">
          <RouterLink
            v-for="service in services"
            :key="service.id"
            :to="`/services/${service.id}`"
            class="service-card"
          >
            <div class="service-card__icon" :style="{ color: service.color }">
              <component :is="service.icon" />
            </div>
            <div class="service-card__content">
              <h3 class="service-card__title">{{ service.title }}</h3>
              <p class="service-card__subtitle">{{ service.subtitle }}</p>
              <p class="service-card__description">{{ service.description }}</p>
              
              <div class="service-card__features">
                <span 
                  v-for="(feature, index) in service.features"
                  :key="index"
                  class="service-card__feature"
                >
                  {{ feature }}
                </span>
              </div>
              
              <div class="service-card__stats">
                <div class="service-card__stat">
                  <div class="service-card__stat-value">{{ service.stats[0]?.value }}</div>
                  <div class="service-card__stat-label">{{ service.stats[0]?.label }}</div>
                </div>
                <div class="service-card__stat">
                  <div class="service-card__stat-value">{{ service.stats[1]?.value }}</div>
                  <div class="service-card__stat-label">{{ service.stats[1]?.label }}</div>
                </div>
              </div>
              
              <div class="service-card__footer">
                <span class="service-card__link">
                  Подробнее
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Процесс работы</h2>
          <p class="section-subtitle">От заявки до готовой продукции — прозрачно и эффективно</p>
        </div>
        
        <div class="process-steps">
          <div class="process-step">
            <div class="process-step__number">01</div>
            <h3 class="process-step__title">Консультация</h3>
            <p class="process-step__description">Обсуждение задачи, анализ требований</p>
          </div>
          
          <div class="process-step">
            <div class="process-step__number">02</div>
            <h3 class="process-step__title">Расчёт</h3>
            <p class="process-step__description">Составление ТЗ и коммерческого предложения</p>
          </div>
          
          <div class="process-step">
            <div class="process-step__number">03</div>
            <h3 class="process-step__title">Производство</h3>
            <p class="process-step__description">Изготовление с контролем качества</p>
          </div>
          
          <div class="process-step">
            <div class="process-step__number">04</div>
            <h3 class="process-step__title">Поставка</h3>
            <p class="process-step__description">Отгрузка и сопроводительная документация</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="services-cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Нужна консультация?</h2>
          <p class="cta-description">
            Наши специалисты ответят на все вопросы и помогут подобрать оптимальное решение
          </p>
          <div class="cta-buttons">
            <button class="btn btn-primary btn-large" @click="requestQuote">
              Получить расчёт
            </button>
            <a href="tel:+74951234567" class="btn btn-outline btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C16.824 21 13.7615 19.8491 11.3928 17.7742C9.024 15.6993 7.5 12.8261 7.5 9.75C7.5 8.25544 7.69399 6.77216 8.07403 5.33894C8.45406 3.90573 9.01537 2.53661 9.74264 1.27208C10.1512 0.59413 10.8284 0.125 11.5858 0.125C12.3432 0.125 13.0204 0.59413 13.4289 1.27208L15.9306 5.58065C16.305 6.21387 16.4169 6.9698 16.2427 7.68204C16.0684 8.39428 15.6211 9.00804 15 9.395L13 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterLayout />
  </div>
</template>

<style scoped>
.services-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1f2937;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero */
.services-hero {
  padding: 100px 0;
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: 20px;
  opacity: 0.9;
  line-height: 1.6;
  margin-bottom: 48px;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 16px;
  opacity: 0.9;
  font-weight: 500;
}

/* Services Grid */
.services-grid-section {
  padding: 80px 0;
  background: #f9fafb;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  text-decoration: none;
  color: inherit;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  display: block;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: #e5e7eb;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.service-card__icon {
  margin-bottom: 24px;
  transition: transform 0.3s ease;
}

.service-card:hover .service-card__icon {
  transform: scale(1.1);
}

.service-card__title {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
  line-height: 1.2;
}

.service-card__subtitle {
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 16px;
  font-weight: 500;
}

.service-card__description {
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.service-card__features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
  padding: 20px 0;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
}

.service-card__feature {
  background: #f3f4f6;
  color: #374151;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
}

.service-card__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.service-card__stat {
  text-align: center;
  padding: 12px;
  background: #f8fafc;
  border-radius: 12px;
}

.service-card__stat-value {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
}

.service-card__stat-label {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.service-card__footer {
  border-top: 1px solid #e5e7eb;
  padding-top: 20px;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #2563eb;
  font-weight: 600;
  font-size: 15px;
  transition: gap 0.2s;
}

.service-card:hover .service-card__link {
  gap: 12px;
}

/* Process */
.process-section {
  padding: 80px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 40px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: 18px;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.process-step {
  text-align: center;
  padding: 40px 24px;
  background: #f8fafc;
  border-radius: 16px;
  border: 2px solid transparent;
  transition: all 0.3s;
}

.process-step:hover {
  border-color: #3B82F6;
  background: white;
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.1);
}

.process-step__number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  line-height: 1;
}

.process-step__title {
  font-size: 20px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.process-step__description {
  color: #6b7280;
  line-height: 1.5;
}

/* CTA */
.services-cta {
  padding: 80px 0;
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

.cta-description {
  font-size: 18px;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  gap: 12px;
  white-space: nowrap;
  text-decoration: none;
}

.btn-primary {
  background: white;
  color: #1e40af;
  box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.2);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 12px -2px rgba(255, 255, 255, 0.3);
}

.btn-outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
}

.btn-outline:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
}

.btn-large {
  min-width: 200px;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 40px;
  }
  
  .hero-subtitle {
    font-size: 18px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
  
  .services-hero {
    padding: 80px 0;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 40px;
  }
  
  .stat-number {
    font-size: 32px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .process-steps {
    grid-template-columns: 1fr;
  }
  
  .services-grid-section {
    padding: 60px 0;
  }
  
  .process-section {
    padding: 60px 0;
  }
  
  .services-cta {
    padding: 60px 0;
  }
  
  .cta-title {
    font-size: 32px;
  }
  
  .cta-description {
    font-size: 16px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-large {
    width: 100%;
    max-width: 300px;
  }
  
  .service-card {
    padding: 24px;
  }
  
  .service-card__title {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .hero-stats {
    gap: 20px;
  }
  
  .stat-number {
    font-size: 28px;
  }
  
  .service-card__stats {
    grid-template-columns: 1fr;
  }
}
</style>