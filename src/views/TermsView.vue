<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

</script>

<template>
  <div class="page">
    <HeaderLayout active-page="terms" />

    <section class="legal">
      <div class="container">
        <h1>Пользовательское соглашение</h1>
        <p class="legal__updated">Последнее обновление: 2026 г.</p>

        <h2>1. Общие условия</h2>
        <p>
          Настоящее Пользовательское соглашение регулирует порядок использования сайта
          СТД Индастриал. Продолжая пользоваться сайтом, вы подтверждаете согласие
          с изложенными ниже условиями.
        </p>

        <h2>2. Информация на сайте</h2>
        <p>
          Материалы сайта носят информационный характер и не являются публичной офертой.
          Точные условия, сроки и стоимость работ определяются в индивидуальном порядке
          после обращения к менеджерам компании.
        </p>

        <h2>3. Интеллектуальная собственность</h2>
        <p>
          Все тексты, изображения и иные материалы сайта являются собственностью
          Компании. Копирование и распространение материалов без письменного согласия
          правообладателя запрещено.
        </p>

        <h2>4. Ответственность</h2>
        <p>
          Компания не несёт ответственности за временную недоступность сайта и возможные
          технические неточности в размещённых материалах.
        </p>

        <h2>5. Контакты</h2>
        <p>
          По всем вопросам, связанным с использованием сайта:
          телефон <a href="tel:+79999999999">+7 (999) 999-99-99</a>,
          e-mail <a href="mailto:info@moldrussia.ru">info@moldrussia.ru</a>.
        </p>
      </div>
    </section>

    <FooterLayout />
  </div>
</template>

<style scoped>
.page {
  font-family: 'Inter', sans-serif;
  color: #1f2937;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.legal {
  flex: 1;
  padding: 64px 0 96px;
}

.legal h1 {
  font-size: 36px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}

.legal__updated {
  color: #64748b;
  font-size: 14px;
  margin-bottom: 40px;
}

.legal h2 {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin: 32px 0 12px;
}

.legal p {
  font-size: 16px;
  color: #475569;
  line-height: 1.7;
  max-width: 800px;
}

.legal a {
  color: #1e40af;
  text-decoration: none;
}

.legal a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .legal h1 {
    font-size: 28px;
  }
}
</style>
