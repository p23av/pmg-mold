<!-- AboutView.vue -->
<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

// Импорт изображений
import heroImage from '@/assets/images/hero.jpg'
import engineerImage from '@/assets/images/engineer.jpg'

// Для галереи фабрики
import factory1 from '@/assets/images/factory1.jpg'
import factory2 from '@/assets/images/factory2.jpg'
import factory3 from '@/assets/images/factory3.jpg'
import factory4 from '@/assets/images/factory4.jpg'
import factory5 from '@/assets/images/factory5.jpg'
import factory6 from '@/assets/images/factory6.jpg'
</script>

<template>
  <div class="page">
    <!-- Header -->
    <HeaderLayout activePage="about" />

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero__grid">
          <div class="hero__content">
            <h1 class="hero__title">О компании СТД Индастриал</h1>
            <p class="hero__subtitle">
              Более двух десятилетий мы являемся лидерами в области прецизионного производства, 
              предлагая высочайшее качество в изготовлении пресс-форм, литье металлов и пластмасс, 
              а также нанесении защитных покрытий.
            </p>
            <div class="hero__stats">
              <div class="stat">
                <div class="stat__number">30+</div>
                <div class="stat__label">Лет опыта</div>
              </div>
              <div class="stat">
                <div class="stat__number">500+</div>
                <div class="stat__label">Проектов</div>
              </div>
              <div class="stat">
                <div class="stat__number">100+</div>
                <div class="stat__label">Клиентов</div>
              </div>
            </div>
          </div>
          <div class="hero__image-wrapper">
            <div class="hero__image">
              <img :src="heroImage" alt="Производственное оборудование для литья и изготовления пресс-форм" />
              <div class="hero__experience-badge">
                <span>Основана в 1990</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Наша история -->
    <section class="story">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">История компании: точность и инновации</h2>
          <p class="section-subtitle">От небольшой мастерской до лидера отрасли</p>
        </div>
        <div class="story__grid">
          <div class="story__content">
            <p class="story__text">
              Основанная в 1990 году, компания СТД Индастриал начинала как небольшая мастерская 
              с целью революционизировать производство пресс-форм. За годы работы мы выросли в полноценного 
              промышленного партнёра для сотен предприятий.
            </p>
            <p class="story__text">
              Наш путь отмечен постоянными инвестициями в современное оборудование, развитие квалификации 
              сотрудников и бескомпромиссным подходом к качеству. Сегодня мы предоставляем полный цикл услуг: 
              от проектирования пресс-форм до литья алюминия и пластмасс, нанесения гальванических покрытий 
              и порошковой окраски.
            </p>
            <div class="story__milestones">
              <div class="milestone">
                <div class="milestone__year">1990</div>
                <div class="milestone__title">Основание компании</div>
                <div class="milestone__description">Начало работы как мастерская по изготовлению пресс-форм</div>
              </div>
              <div class="milestone">
                <div class="milestone__year">2005</div>
                <div class="milestone__title">Расширение мощностей</div>
                <div class="milestone__description">Ввод в эксплуатацию нового цеха литья под давлением</div>
              </div>
              <div class="milestone">
                <div class="milestone__year">2015</div>
                <div class="milestone__title">Международные стандарты</div>
                <div class="milestone__description">Получение сертификатов ISO 9001 и ISO 14001</div>
              </div>
            </div>
          </div>
          <div class="story__image">
            <div class="story__image-wrapper">
              <img :src="engineerImage" alt="Цех по производству пресс-форм и литью деталей" />
              <div class="story__image-overlay">
                <span>Традиции качества с 1990 года</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Миссия и ценности -->
    <section class="values">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Наша миссия и основные ценности</h2>
          <p class="section-subtitle">Принципы, которые определяют нашу работу</p>
        </div>
        <div class="values__grid">
          <div class="value-card">
            <div class="value-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="value-card__title">Инновации</h3>
            <p class="value-card__description">Постоянное внедрение новых технологий и методов для совершенствования производственных процессов.</p>
          </div>
          <div class="value-card">
            <div class="value-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="value-card__title">Контроль качества</h3>
            <p class="value-card__description">Неукоснительное соблюдение высочайших стандартов качества на всех этапах производства.</p>
          </div>
          <div class="value-card">
            <div class="value-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#8B5CF6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="value-card__title">Партнёрство</h3>
            <p class="value-card__description">Выстраивание долгосрочных отношений с клиентами для понимания и превосходства их ожиданий.</p>
          </div>
          <div class="value-card">
            <div class="value-card__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 23C17.16 22.74 21 17.55 21 12V7L12 2ZM12 22C7.58 22 4 18.42 4 14V8L12 3.5L20 8V14C20 18.42 16.42 22 12 22Z" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="value-card__title">Экологичность</h3>
            <p class="value-card__description">Внедрение экологически ответственных практик в производственные процессы.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Сертификаты -->
    <section class="certifications">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Гарантия качества и соответствия стандартам</h2>
          <p class="section-subtitle">Наши достижения и подтверждения качества</p>
        </div>
        <div class="certifications__grid">
          <div class="certification-card">
            <div class="certification-card__icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M12 3C13.2841 3 14.5598 3.25561 15.7496 3.75411C16.9393 4.25261 18.0199 4.98454 18.9349 5.90901C19.85 6.83347 20.5824 7.93266 21.0911 9.14637C21.5998 10.3601 21.875 11.6648 21.9 13C21.8867 15.1624 21.1314 17.2496 19.767 18.8891C18.4027 20.5287 16.5204 21.612 14.463 21.945C13.4654 22.0914 12.4586 22.0357 11.4814 21.7802C10.5043 21.5247 9.57455 21.0738 8.74071 20.4496C7.90688 19.8254 7.18383 19.039 6.60956 18.1305C6.03529 17.222 5.61995 16.2073 5.384 15.136M3 13C2.99738 10.8376 3.75269 8.7504 5.11704 7.11087C6.4814 5.47133 8.36373 4.38802 10.421 4.05502C11.4186 3.90858 12.4254 3.96426 13.4026 4.21978C14.3797 4.47529 15.3095 4.92621 16.1433 5.55039C16.9771 6.17458 17.7002 6.96103 18.2744 7.86953C18.8487 8.77803 19.2641 9.79272 19.5 10.864" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="certification-card__title">Сертификат ISO 9001</h3>
            <p class="certification-card__description">Гарантия стабильного качества продукции и удовлетворённости клиентов.</p>
            <div class="certification-card__year">Сертифицировано с 2015</div>
          </div>
          <div class="certification-card">
            <div class="certification-card__icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 23C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z" stroke="#3B82F6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="certification-card__title">Сертификат ISO 14001</h3>
            <p class="certification-card__description">Соблюдение стандартов экологического менеджмента и устойчивого развития.</p>
            <div class="certification-card__year">Сертифицировано с 2015</div>
          </div>
          <div class="certification-card">
            <div class="certification-card__icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                <path d="M9 12L11 14L15 10M12 3C13.2841 3 14.5598 3.25561 15.7496 3.75411C16.9393 4.25261 18.0199 4.98454 18.9349 5.90901C19.85 6.83347 20.5824 7.93266 21.0911 9.14637C21.5998 10.3601 21.875 11.6648 21.9 13C21.8867 15.1624 21.1314 17.2496 19.767 18.8891C18.4027 20.5287 16.5204 21.612 14.463 21.945C13.4654 22.0914 12.4586 22.0357 11.4814 21.7802C10.5043 21.5247 9.57455 21.0738 8.74071 20.4496C7.90688 19.8254 7.18383 19.039 6.60956 18.1305C6.03529 17.222 5.61995 16.2073 5.384 15.136M3 13C2.99738 10.8376 3.75269 8.7504 5.11704 7.11087C6.4814 5.47133 8.36373 4.38802 10.421 4.05502C11.4186 3.90858 12.4254 3.96426 13.4026 4.21978C14.3797 4.47529 15.3095 4.92621 16.1433 5.55039C16.9771 6.17458 17.7002 6.96103 18.2744 7.86953C18.8487 8.77803 19.2641 9.79272 19.5 10.864" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="certification-card__title">Отраслевые стандарты</h3>
            <p class="certification-card__description">Соответствие специфическим требованиям автопрома, аэрокосмической отрасли и других секторов.</p>
            <div class="certification-card__year">Соответствуем с 2010</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Галерея производства -->
    <section class="gallery">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Наше производство</h2>
          <p class="section-subtitle">Современное оборудование и передовые технологии</p>
        </div>
        <div class="gallery__grid">
          <div class="gallery__item">
            <img :src="factory1" alt="Цех литья алюминия под давлением" />
            <div class="gallery__overlay">Цех литья алюминия</div>
          </div>
          <div class="gallery__item">
            <img :src="factory2" alt="Участок изготовления пресс-форм" />
            <div class="gallery__overlay">Изготовление пресс-форм</div>
          </div>
          <div class="gallery__item">
            <img :src="factory3" alt="Оборудование для литья пластмасс" />
            <div class="gallery__overlay">Литьё пластмасс</div>
          </div>
          <div class="gallery__item">
            <img :src="factory4" alt="Линия гальванических покрытий" />
            <div class="gallery__overlay">Гальванические покрытия</div>
          </div>
          <div class="gallery__item">
            <img :src="factory5" alt="Камера порошковой окраски" />
            <div class="gallery__overlay">Порошковая окраска</div>
          </div>
          <div class="gallery__item">
            <img :src="factory6" alt="Контроль качества готовых деталей" />
            <div class="gallery__overlay">Контроль качества</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="cta">
      <div class="container">
        <div class="cta__content">
          <h2 class="cta__title">Готовы стать нашим партнёром?</h2>
          <p class="cta__description">
            Узнайте, как СТД Индастриал может реализовать ваш проект с помощью точного производства, 
            современного литья и профессиональной обработки поверхностей.
          </p>
          <div class="cta__buttons">
            <button class="btn btn-primary btn-large" @click="$router.push('/contact')">
              Получить коммерческое предложение
            </button>
            <a href="tel:+79999999999" class="btn btn-outline btn-large">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              +7 (999) 999-99-99
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
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero__title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #111827;
}

.hero__subtitle {
  font-size: 1.25rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.stat {
  text-align: center;
}

.stat__number {
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
}

.stat__label {
  font-size: 0.875rem;
  color: #6b7280;
  font-weight: 500;
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

.hero__experience-badge {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: white;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.hero__experience-badge span {
  font-weight: 600;
  color: #111827;
}

/* Story Section */
.story {
  padding: 6rem 0;
  background: white;
}

.story__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.story__text {
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.story__milestones {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.milestone {
  padding: 1.5rem;
  border-left: 4px solid #2563eb;
  background: #f8fafc;
  border-radius: 0 0.5rem 0.5rem 0;
}

.milestone__year {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.milestone__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
}

.milestone__description {
  color: #6b7280;
  line-height: 1.5;
}

.story__image-wrapper {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.story__image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
}

.story__image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 2rem;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
}

/* Values Section */
.values {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.values__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s;
  border: 1px solid #e5e7eb;
}

.value-card:hover {
  transform: translateY(-0.5rem);
  border-color: #2563eb;
  box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
}

.value-card__icon {
  margin-bottom: 1.5rem;
}

.value-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.value-card__description {
  color: #6b7280;
  line-height: 1.6;
}

/* Certifications Section */
.certifications {
  padding: 6rem 0;
  background: white;
}

.certifications__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.certification-card {
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid #e5e7eb;
  transition: all 0.3s;
}

.certification-card:hover {
  transform: translateY(-0.5rem);
  border-color: #10B981;
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.1);
}

.certification-card__icon {
  margin-bottom: 1.5rem;
}

.certification-card__title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
}

.certification-card__description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.certification-card__year {
  font-size: 0.875rem;
  color: #2563eb;
  font-weight: 600;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

/* Gallery Section */
.gallery {
  padding: 6rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.gallery__item {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.gallery__item:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.gallery__item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.gallery__item:hover img {
  transform: scale(1.05);
}

.gallery__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 1.5rem;
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
}

/* CTA Section */
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

.cta .btn-outline {
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
}

.cta .btn-outline:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero__title {
    font-size: 2.5rem;
  }
  
  .hero__grid,
  .story__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .hero::before {
    width: 100%;
    height: 50%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
  }
  
  .hero__stats {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .hero__title {
    font-size: 2rem;
  }
  
  .hero__stats {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta__buttons {
    flex-direction: column;
  }
  
  .btn {
    width: 100%;
  }
  
  .gallery__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .hero__stats {
    grid-template-columns: 1fr;
  }
  
  .gallery__grid {
    grid-template-columns: 1fr;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .values__grid,
  .certifications__grid {
    grid-template-columns: 1fr;
  }
}
</style>