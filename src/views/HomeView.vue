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
              Точное литьё и пресс-формы для современного производства
            </h1>
            <p class="hero__subtitle">
              Специализируемся на изготовлении пресс-форм, литье алюминия и пластмасс под давлением,
              а также нанесении защитных покрытий. Качество, проверенное временем — с 2005 года.
            </p>
            <div class="hero__buttons">
              <button class="btn btn-primary">
                Получить расчёт
              </button>
              <RouterLink to="/services" class="btn btn-outline">
                Смотреть услуги
              </RouterLink>
            </div>
          </div>
          <div class="hero__image-wrapper">
            <div class="hero__image">
              <img src="/images/hero.jpg" alt="Производство пресс-форм и литьё металла" />
              <div class="hero__badge">
                <span>Работаем с 2005 года</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="services">
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
    </section>

    <!-- Features -->
    <section class="features">
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
    </section>

    <!-- Why Us -->
    <section class="why-us">
      <div class="container">
        <div class="why-us__grid">
          <div class="why-us__image">
            <img src="/images/engineer.jpg" alt="Инженер за работой на производстве" />
            <div class="why-us__experience">
              <span>18 лет</span>
              <p>опыта в отрасли</p>
            </div>
          </div>
          <div class="why-us__content">
            <h2 class="why-us__title">Почему выбирают нас?</h2>
            <p class="why-us__description">
              Компания ПТК Технологии — это надёжный партнёр в области металлообработки и
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

    <!-- CTA -->
    <section class="cta">
      <div class="container">
        <div class="cta__content">
          <h2 class="cta__title">Готовы к сотрудничеству?</h2>
          <p class="cta__description">
            Отправьте чертежи или описание детали для бесплатного расчета стоимости и сроков
          </p>
          <div class="cta__buttons">
            <button class="btn btn-primary btn-large">
              Получить расчёт
            </button>
            <a href="tel:+74951234567" class="btn btn-outline btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C16.824 21 13.7615 19.8491 11.3928 17.7742C9.024 15.6993 7.5 12.8261 7.5 9.75C7.5 8.25544 7.69399 6.77216 8.07403 5.33894C8.45406 3.90573 9.01537 2.53661 9.74264 1.27208C10.1512 0.59413 10.8284 0.125 11.5858 0.125C12.3432 0.125 13.0204 0.59413 13.4289 1.27208L15.9306 5.58065C16.305 6.21387 16.4169 6.9698 16.2427 7.68204C16.0684 8.39428 15.6211 9.00804 15 9.395L13 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterLayout />
  </div>
</template>

<script setup lang="ts">
import HeaderLayout from '@/components/HeaderLayout.vue'
import FooterLayout from '@/components/FooterLayout.vue'
import { RouterLink } from 'vue-router'

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
</script>

<style scoped>
.page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #1f2937;
  overflow-x: hidden;
}

.container {
  max-width: 1280px;
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

@media (max-width: 1024px) {
  .hero::before {
    opacity: 0.3;
    width: 100%;
    height: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  }
}

.hero__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

@media (max-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.hero__title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #111827;
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
}

.hero__image {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
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