<!-- ContactView.vue -->
<template>
  <div class="page">
    <!-- Header -->
    <HeaderLayout activePage="contact" />

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Свяжитесь с нами</h1>
          <p class="hero-subtitle">Мы готовы обсудить ваш проект и ответить на все вопросы</p>
        </div>
      </div>
    </section>

    <!-- Main Contact Content -->
    <section class="contact-main">
      <div class="container">
        <div class="contact-grid">
          <!-- Form Section -->
          <div class="contact-form-wrapper">
            <div class="contact-form-header">
              <h2>Отправьте нам сообщение</h2>
              <p class="form-description">
                Мы здесь, чтобы помочь! Заполните форму ниже, чтобы связаться с нами по поводу вашего проекта или запроса.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">
                    Ваше полное имя
                    <span class="required">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    placeholder="Иван Иванов"
                    :class="{ 'error': errors.name }"
                    @blur="validateField('name')"
                  />
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>

                <div class="form-group">
                  <label for="email">
                    Ваш адрес электронной почты
                    <span class="required">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    placeholder="ivan.ivanov@example.com"
                    :class="{ 'error': errors.email }"
                    @blur="validateField('email')"
                  />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">
                  Тема сообщения
                  <span class="required">*</span>
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="Запрос по проекту"
                  :class="{ 'error': errors.subject }"
                  @blur="validateField('subject')"
                />
                <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="message">
                  Ваше сообщение
                  <span class="required">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  placeholder="Пожалуйста, подробно опишите ваши потребности или вопросы."
                  :class="{ 'error': errors.message }"
                  @blur="validateField('message')"
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>

              <div class="form-footer">
                <button 
                  type="submit" 
                  class="btn-primary"
                  :disabled="isSubmitting"
                >
                  <span v-if="isSubmitting" class="button-loading">
                    <span class="spinner"></span>
                    Отправка...
                  </span>
                  <span v-else>Отправить сообщение</span>
                </button>
                
                <div v-if="submitSuccess" class="success-message">
                  ✅ Сообщение успешно отправлено! Мы свяжемся с вами в течение 24 часов.
                </div>
              </div>
            </form>
          </div>

          <!-- Contact Info Section -->
          <div class="contact-info-wrapper">
            <!-- Quick Contact -->
            <div class="info-card">
              <div class="info-card-header">
                <h3>Контактная информация</h3>
                <p>Свяжитесь с нами удобным для вас способом</p>
              </div>
              
              <div class="contact-methods">
                <a href="tel:+15551234567" class="contact-method">
                  <div class="method-icon phone">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="currentColor"/>
                      <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.977 13.192 15.732 13.233C15.487 13.275 15.277 13.429 15.156 13.65C14.136 15.417 12.406 16.625 10.588 16.496C10.332 16.478 10.086 16.57 9.909 16.748L8.307 18.351C6.119 17.364 5.067 15.286 5.009 14.953C4.948 14.604 5.086 14.254 5.367 14.019C6.497 13.091 7.42 12.557 8.303 12.303C8.817 12.156 9.359 12.293 9.748 12.683L11.052 13.987C12.347 13.582 13.582 12.347 13.987 11.052L12.682 9.748C12.292 9.359 12.155 8.817 12.302 8.303C12.556 7.42 13.09 6.497 14.018 5.367C14.253 5.086 14.603 4.948 14.952 5.009C15.285 5.067 17.363 6.119 18.35 8.307L16.747 9.909C16.569 10.086 16.477 10.332 16.495 10.588C16.624 12.406 15.416 14.136 13.649 15.156C13.428 15.277 13.274 15.487 13.232 15.732C13.19 15.977 13.266 16.229 13.441 16.422L15.041 18.143C15.394 18.524 15.881 18.75 16.396 18.75C17.589 18.75 20.674 17.116 21.364 15.918C22.053 14.72 21.996 12.665 21.996 11.999C21.996 11.333 21.496 10.833 20.996 10.333C20.496 9.833 19.996 9.333 19.996 8.999C19.996 8.665 20.163 8.332 20.422 8.073C20.681 7.814 21.014 7.647 21.348 7.647C21.682 7.647 22.015 7.814 22.274 8.073C22.866 8.665 23.75 10.082 23.75 11.999C23.75 13.916 22.034 16.666 20.836 18.078C19.638 19.49 17.416 21.25 16.396 21.25C15.376 21.25 14.486 20.786 13.857 20.157L11.779 17.934C9.186 19.714 6.477 20.749 4.567 20.749C3.097 20.749 1.75 19.402 1.75 17.932C1.75 15.233 4.049 11.581 7.367 9.367C9.095 8.203 10.979 7.248 12.682 6.682C14.385 6.116 16.04 5.917 17.336 6.085C18.632 6.253 19.75 6.833 19.75 8.999C19.75 10.165 20.75 11.165 21.25 11.665C21.75 12.165 22.25 12.665 22.25 13.332C22.25 13.999 21.75 16.28 20.836 17.492C19.922 18.704 18.247 19.75 17.396 19.75C16.544 19.75 15.938 19.404 15.579 19.057L16.422 13.443Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="method-content">
                    <div class="method-label">Телефон</div>
                    <div class="method-value">+1 (555) 123-4567</div>
                  </div>
                  <div class="method-arrow">→</div>
                </a>

                <a href="mailto:info@industrialsolutions.com" class="contact-method">
                  <div class="method-icon email">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="method-content">
                    <div class="method-label">Email</div>
                    <div class="method-value">info@industrialsolutions.com</div>
                  </div>
                  <div class="method-arrow">→</div>
                </a>

                <div class="contact-method" @click="openMap">
                  <div class="method-icon location">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="method-content">
                    <div class="method-label">Адрес</div>
                    <div class="method-value">123 Industrial Park, Cityville</div>
                  </div>
                  <div class="method-arrow">→</div>
                </div>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="info-card">
              <div class="info-card-header">
                <h3>Часы работы</h3>
                <p>Наше рабочее время для поддержки и запросов</p>
              </div>
              
              <div class="hours-list">
                <div class="hours-item" v-for="(hour, index) in workingHours" :key="index" :class="{ closed: hour.closed }">
                  <div class="hours-day">{{ hour.day }}</div>
                  <div class="hours-time">{{ hour.time }}</div>
                  <div class="hours-status">{{ hour.status }}</div>
                </div>
              </div>
            </div>

            <!-- Map -->
            <div class="info-card map-card">
              <div class="map-container" ref="mapContainer">
                <div class="map-overlay">
                  <div class="map-marker">
                    <div class="marker-pin"></div>
                    <div class="marker-pulse"></div>
                  </div>
                  <div class="map-address">
                    <div class="address-title">Наш офис</div>
                    <div class="address-text">123 Industrial Park, Cityville, State 12345</div>
                  </div>
                </div>
              </div>
              <button class="btn-secondary full-width" @click="openMap">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                </svg>
                Открыть в Яндекс Картах
              </button>
            </div>

            <!-- Quick CTA -->
            <div class="cta-card">
              <div class="cta-icon">⚡</div>
              <h3>Нужно срочно?</h3>
              <p>Получите коммерческое предложение в течение 2 часов</p>
              <button class="btn-primary full-width" @click="handleQuickRequest">
                Получить срочное КП
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Часто задаваемые вопросы</h2>
          <p>Ответы на популярные вопросы о сотрудничестве</p>
        </div>
        
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <span class="faq-toggle">{{ openFaqs[index] ? '−' : '+' }}</span>
            </div>
            <div class="faq-answer" :class="{ open: openFaqs[index] }">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterLayout />
  </div>
</template>

<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'
import { reactive, ref } from 'vue'

// Состояние формы
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Ошибки валидации
const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Состояния UI
const isSubmitting = ref(false)
const submitSuccess = ref(false)

// FAQ данные
const faqs = [
  {
    question: 'Сколько времени занимает подготовка коммерческого предложения?',
    answer: 'Обычно мы подготавливаем КП в течение 1-2 рабочих дней. Для срочных запросов доступна услуга "Экспресс-КП" в течение 2 часов.'
  },
  {
    question: 'Какие способы оплаты вы принимаете?',
    answer: 'Мы принимаем банковские переводы, карты Visa/Mastercard и работаем по безналичному расчету с НДС.'
  },
  {
    question: 'Есть ли у вас услуги доставки?',
    answer: 'Да, мы организуем доставку по всей России и в страны СНГ. Стоимость доставки рассчитывается индивидуально.'
  },
  {
    question: 'Предоставляете ли вы гарантию на продукцию?',
    answer: 'На всю продукцию предоставляется гарантия от 12 до 36 месяцев в зависимости от категории товара.'
  }
]

const openFaqs = ref<boolean[]>(Array(faqs.length).fill(false))

// Рабочие часы
const workingHours = [
  { day: 'Понедельник - Пятница', time: '8:00 - 17:00', status: 'Открыто', closed: false },
  { day: 'Суббота', time: '9:00 - 13:00', status: 'Открыто', closed: false },
  { day: 'Воскресенье', time: 'Выходной', status: 'Закрыто', closed: true }
]

// Валидация поля
const validateField = (field: keyof typeof form) => {
  const value = form[field].trim()
  
  switch (field) {
    case 'name':
      errors.name = value.length < 2 ? 'Имя должно содержать минимум 2 символа' : ''
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      errors.email = !emailRegex.test(value) ? 'Введите корректный email' : ''
      break
    case 'subject':
      errors.subject = value.length < 5 ? 'Тема должна содержать минимум 5 символов' : ''
      break
    case 'message':
      errors.message = value.length < 20 ? 'Сообщение должно содержать минимум 20 символов' : ''
      break
  }
}

// Проверка всей формы
const validateForm = (): boolean => {
  Object.keys(form).forEach(field => {
    validateField(field as keyof typeof form)
  })
  
  return !Object.values(errors).some(error => error !== '')
}

// Обработчик отправки формы
const handleSubmit = async () => {
  if (!validateForm()) {
    alert('Пожалуйста, исправьте ошибки в форме')
    return
  }

  isSubmitting.value = true
  submitSuccess.value = false

  try {
    // Имитация отправки на сервер
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Форма отправлена:', form)
    
    submitSuccess.value = true
    
    // Сброс формы
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = ''
    })
    
    // Скрыть успешное сообщение через 5 секунд
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Ошибка отправки:', error)
    alert('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.')
  } finally {
    isSubmitting.value = false
  }
}

// Быстрый запрос КП
const handleQuickRequest = () => {
  // Здесь можно реализовать логику быстрого запроса
  window.location.href = '/request-quote'
}

// Открытие карты
const openMap = () => {
  const address = encodeURIComponent('123 Industrial Park, Cityville, State 12345')
  window.open(`https://yandex.ru/maps/?text=${address}`, '_blank')
}

// Переключение FAQ
const toggleFaq = (index: number) => {
  openFaqs.value[index] = !openFaqs.value[index]
}
</script>

<style scoped>
.page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1a1a1a;
  background: #ffffff;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 120px 0 80px;
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

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 20px;
  background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 20px;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* Main Contact Section */
.contact-main {
  padding: 80px 0;
  background: #ffffff;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

/* Form Styles */
.contact-form-wrapper {
  padding: 40px;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.contact-form-header h2 {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 12px;
  color: #0f172a;
}

.form-description {
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 32px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #334155;
  font-size: 14px;
}

.required {
  color: #ef4444;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #ffffff;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ef4444;
}

.form-group input.error:focus,
.form-group textarea.error:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.error-message {
  display: block;
  margin-top: 8px;
  font-size: 14px;
  color: #ef4444;
}

.form-group textarea {
  min-height: 180px;
  resize: vertical;
}

.form-footer {
  margin-top: 32px;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 32px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.button-loading {
  display: flex;
  align-items: center;
  gap: 12px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.success-message {
  margin-top: 16px;
  padding: 16px;
  background: #10b981;
  color: white;
  border-radius: 12px;
  font-size: 14px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Contact Info Styles */
.contact-info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card {
  padding: 32px;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04);
}

.info-card-header h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px;
  color: #0f172a;
}

.info-card-header p {
  font-size: 14px;
  color: #64748b;
  margin: 0 0 24px;
  line-height: 1.5;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-method {
  display: flex;
  align-items: center;
  padding: 20px;
  background: #f8fafc;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  cursor: pointer;
}

.contact-method:hover {
  background: #f1f5f9;
  transform: translateX(4px);
}

.method-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  flex-shrink: 0;
}

.method-icon.phone {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
}

.method-icon.email {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
}

.method-icon.location {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
}

.method-content {
  flex: 1;
}

.method-label {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
}

.method-value {
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
}

.method-arrow {
  color: #94a3b8;
  font-size: 20px;
  transition: transform 0.3s ease;
}

.contact-method:hover .method-arrow {
  transform: translateX(4px);
}

/* Hours Styles */
.hours-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.hours-item:hover {
  background: #f1f5f9;
}

.hours-item.closed {
  opacity: 0.6;
}

.hours-day {
  font-size: 14px;
  font-weight: 600;
  color: #334155;
}

.hours-time {
  font-size: 14px;
  color: #475569;
}

.hours-status {
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  background: #10b981;
  color: white;
}

.hours-item.closed .hours-status {
  background: #ef4444;
}

/* Map Styles */
.map-card {
  padding: 0;
  overflow: hidden;
}

.map-container {
  position: relative;
  height: 240px;
  background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
  overflow: hidden;
}

.map-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(45deg, #cbd5e1 25%, transparent 25%),
    linear-gradient(-45deg, #cbd5e1 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #cbd5e1 75%),
    linear-gradient(-45deg, transparent 75%, #cbd5e1 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  opacity: 0.5;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.map-marker {
  position: relative;
  margin-bottom: 24px;
}

.marker-pin {
  width: 40px;
  height: 40px;
  background: #3b82f6;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.marker-pin::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: white;
  border-radius: 50%;
}

.marker-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0;
  }
}

.map-address {
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.address-title {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 4px;
}

.address-text {
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
}

.btn-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background: transparent;
  border: 2px solid #e2e8f0;
  color: #475569;
  border-radius: 0 0 20px 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.btn-secondary:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.full-width {
  width: 100%;
}

/* CTA Card */
.cta-card {
  padding: 32px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-radius: 20px;
  color: white;
  text-align: center;
}

.cta-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.cta-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 8px;
}

.cta-card p {
  font-size: 14px;
  color: #cbd5e1;
  margin: 0 0 24px;
  line-height: 1.5;
}

.cta-card .btn-primary {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.cta-card .btn-primary:hover {
  box-shadow: 0 10px 25px rgba(245, 158, 11, 0.3);
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background: #f8fafc;
}

.section-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
}

.section-header h2 {
  font-size: 42px;
  font-weight: 800;
  margin: 0 0 12px;
  color: #0f172a;
}

.section-header p {
  font-size: 18px;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: white;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.faq-question {
  padding: 24px;
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: #f8fafc;
}

.faq-toggle {
  font-size: 24px;
  color: #3b82f6;
  font-weight: 300;
  transition: transform 0.3s ease;
}

.faq-answer {
  padding: 0 24px;
  max-height: 0;
  overflow: hidden;
  font-size: 14px;
  color: #475569;
  line-height: 1.6;
  transition: all 0.3s ease;
}

.faq-answer.open {
  padding: 0 24px 24px;
  max-height: 500px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .contact-grid {
    gap: 48px;
  }
  
  .hero-title {
    font-size: 48px;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .contact-form-wrapper,
  .info-card {
    padding: 24px;
  }
  
  .hero {
    padding: 80px 0 60px;
  }
  
  .hero-title {
    font-size: 36px;
  }
  
  .hero-subtitle {
    font-size: 16px;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .contact-form-header h2 {
    font-size: 28px;
  }
  
  .section-header h2 {
    font-size: 32px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }
  
  .contact-form-wrapper {
    padding: 20px;
  }
  
  .hero-title {
    font-size: 28px;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 14px;
  }
  
  .btn-primary,
  .btn-secondary {
    padding: 16px;
    font-size: 15px;
  }
  
  .method-content .method-value {
    font-size: 14px;
  }
}
</style>