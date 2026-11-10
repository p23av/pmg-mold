<!-- FooterLayout.vue -->
<template>
  <footer class="footer">
    <div class="footer__full-width-bg">
      <div class="container">
        <!-- Основной контент футера -->
        <div class="footer__grid">
          <!-- О компании -->
          <div class="footer__about">
            <RouterLink to="/" class="footer-logo-link">
              <div class="footer-logo">
                <span class="footer-logo__text">СТД</span>
                <span class="footer-logo__subtitle">Индастриал</span>
              </div>
            </RouterLink>
            <p class="footer__description">
              Предоставляем инновационные промышленные решения в области 
              изготовления пресс-форм, литья и поверхностных обработок. 
              Более 30 лет опыта в производстве.
            </p>
            <div class="footer__social">
              <a href="#" class="social-link" aria-label="ВКонтакте">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M7 9C7 9 9 7 11 7C13 7 14 8 14 10C14 12 12 12 12 12C12 12 10 12 10 14C10 16 11 17 13 17C15 17 17 16 17 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 5L2 12.5L9 15M21 5L15 21L9 15M21 5L9 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22.54 6.42C22.421 5.94541 22.179 5.51057 21.838 5.15941C21.497 4.80824 21.069 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.93 4.59 2.5 4.85 2.16 5.2C1.82 5.55 1.58 5.99 1.46 6.47C1.145 8.16 1 10.08 1 12C1 13.92 1.145 15.84 1.46 17.58C1.58 18.05 1.82 18.48 2.16 18.83C2.5 19.18 2.93 19.44 3.4 19.57C5.12 20 12 20 12 20C12 20 18.88 20 20.6 19.54C21.07 19.41 21.5 19.15 21.84 18.8C22.18 18.45 22.42 18.01 22.54 17.53C22.855 15.84 23 13.92 23 12C23 10.08 22.855 8.16 22.54 6.42Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.75 15.02L15.5 12L9.75 8.98V15.02Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Быстрые ссылки -->
          <div class="footer__links">
            <h4 class="footer__title">Навигация</h4>
            <RouterLink to="/" class="footer__link">Главная</RouterLink>
            <RouterLink to="/about" class="footer__link">О компании</RouterLink>
            <RouterLink to="/services" class="footer__link">Услуги</RouterLink>
            <!-- <RouterLink to="/projects" class="footer__link">Проекты</RouterLink> -->
            <RouterLink to="/contact" class="footer__link">Контакты</RouterLink>
          </div>

          <!-- Услуги -->
          <div class="footer__services">
            <h4 class="footer__title">Услуги</h4>
            <RouterLink to="/services#molds" class="footer__link">Изготовление пресс-форм</RouterLink>
            <RouterLink to="/services#aluminum" class="footer__link">Литьё алюминия</RouterLink>
            <RouterLink to="/services#plastic" class="footer__link">Литьё пластмасс</RouterLink>
            <RouterLink to="/services#galvanic" class="footer__link">Гальванические покрытия</RouterLink>
            <RouterLink to="/services#protective" class="footer__link">Защитные покрытия</RouterLink>
            <RouterLink to="/services#decorative" class="footer__link">Декоративные покрытия</RouterLink>
          </div>

          <!-- Контакты -->
          <div class="footer__contact">
            <h4 class="footer__title">Контакты</h4>
            <div class="contact-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>г. Москва, ул. Промышленная, 15</span>
            </div>
            <div class="contact-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C16.824 21 13.7615 19.8491 11.3928 17.7742C9.024 15.6993 7.5 12.8261 7.5 9.75C7.5 8.25544 7.69399 6.77216 8.07403 5.33894C8.45406 3.90573 9.01537 2.53661 9.74264 1.27208C10.1512 0.59413 10.8284 0.125 11.5858 0.125C12.3432 0.125 13.0204 0.59413 13.4289 1.27208L15.9306 5.58065C16.305 6.21387 16.4169 6.9698 16.2427 7.68204C16.0684 8.39428 15.6211 9.00804 15 9.395L13 10.5" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a href="tel:+79999999999">+7 (999) 999-99-99</a>
            </div>
            <div class="contact-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a href="mailto:info@moldrussia.ru">info@moldrussia.ru</a>
            </div>
            <div class="contact-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Пн-Пт: 9:00-18:00</span>
            </div>
          </div>
        </div>

        <!-- Кнопка обратной связи -->
        <!-- <div class="footer__cta">
          <div class="cta-content">
            <h3 class="cta-title">Есть вопросы или нужна консультация?</h3>
            <p class="cta-description">Наши специалисты ответят на все ваши вопросы и подберут оптимальное решение</p>
            <button class="btn btn--primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 19V12M12 12V5M12 12H19M12 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Запросить расчёт</span>
            </button>
          </div>
        </div> -->

        <!-- Нижняя часть футера -->
        <div class="footer__bottom">
          <div class="footer__bottom-content">
            <div class="copyright">
              © 2026 СТД Индастриал. Все права защищены.
            </div>
            <div class="footer__legal">
              <RouterLink to="/privacy" class="legal-link">Политика конфиденциальности</RouterLink>
              <RouterLink to="/terms" class="legal-link">Пользовательское соглашение</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Глобальные стили для футера */
.footer {
  width: 100%;
}

.footer__full-width-bg {
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Основной контент футера */
.footer__grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 48px;
  padding: 64px 0 0;
}

@media (max-width: 1024px) {
  .footer__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 48px 0;
  }
}

/* Логотип в футере */
.footer-logo-link {
  text-decoration: none;
  display: inline-block;
  margin-bottom: 20px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo__text {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.footer-logo__subtitle {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 2px;
}

/* Описание компании */
.footer__description {
  color: #4b5563;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 24px;
  max-width: 320px;
}

/* Социальные сети */
.footer__social {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: white;
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: all 0.2s;
  text-decoration: none;
}

.social-link:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  color: #1e40af;
  transform: translateY(-2px);
}

/* Заголовки разделов */
.footer__title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 8px;
}

.footer__title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 32px;
  height: 2px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 1px;
}

/* Ссылки в футере */
.footer__links,
.footer__services,
.footer__contact {
  display: flex;
  flex-direction: column;
}

.footer__link {
  color: #4b5563;
  text-decoration: none;
  font-size: 14px;
  padding: 8px 0;
  transition: all 0.2s;
  position: relative;
  display: flex;
  align-items: center;
}

.footer__link:hover {
  color: #1e40af;
  transform: translateX(4px);
}

.footer__link::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  background: #d1d5db;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s;
}

.footer__link:hover::before {
  opacity: 1;
}

/* Контактная информация */
.contact-info {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  color: #4b5563;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;
}

.contact-info svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-info a {
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s;
}

.contact-info a:hover {
  color: #1e40af;
}

/* CTA секция */
.footer__cta {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 12px;
  padding: 40px;
  margin: 32px 0;
  color: white;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.2;
}

.cta-description {
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 24px;
  line-height: 1.5;
}

/* Кнопки */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  gap: 8px;
  white-space: nowrap;
}

.btn--primary {
  background: white;
  color: #1e40af;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
}

.btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
}

/* Нижняя часть футера */
.footer__bottom {
  border-top: 1px solid #e5e7eb;
  padding: 24px 0;
}

.footer__bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 768px) {
  .footer__bottom-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }
}

.copyright {
  color: #6b7280;
  font-size: 14px;
}

.footer__legal {
  display: flex;
  gap: 24px;
}

@media (max-width: 768px) {
  .footer__legal {
    flex-direction: column;
    gap: 12px;
  }
}

.legal-link {
  color: #6b7280;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.legal-link:hover {
  color: #1e40af;
}

/* Адаптация для маленьких экранов */
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
  
  .footer__grid {
    padding: 40px 0;
  }
  
  .footer__cta {
    padding: 32px 24px;
    margin: 24px 0;
  }
  
  .cta-title {
    font-size: 20px;
  }
  
  .cta-description {
    font-size: 14px;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 14px;
  }
}

/* Адаптация для очень маленьких экранов */
@media (max-width: 480px) {
  .footer-logo__text {
    font-size: 20px;
  }
  
  .footer-logo__subtitle {
    font-size: 10px;
  }
  
  .footer__description {
    font-size: 13px;
  }
  
  .social-link {
    width: 36px;
    height: 36px;
  }
  
  .footer__title {
    font-size: 15px;
    margin-bottom: 16px;
  }
  
  .footer__link {
    font-size: 13px;
    padding: 6px 0;
  }
  
  .contact-info {
    font-size: 13px;
  }
  
  .footer__cta {
    padding: 24px 16px;
  }
  
  .cta-title {
    font-size: 18px;
  }
  
  .cta-description {
    font-size: 13px;
  }
}
</style>