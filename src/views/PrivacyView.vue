<script setup lang="ts">
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

</script>

<template>
  <div class="page">
    <HeaderLayout active-page="privacy" />

    <section class="legal">
      <div class="container">
        <h1>Политика конфиденциальности</h1>
        <p class="legal__updated">Последнее обновление: 2026 г.</p>

        <h2>1. Общие положения</h2>
        <p>
          Настоящая Политика конфиденциальности определяет порядок обработки и защиты
          персональных данных пользователей сайта СТД Индастриал (далее — «Компания»).
          Используя сайт, вы соглашаетесь с условиями настоящей Политики.
        </p>

        <h2>2. Какие данные мы собираем</h2>
        <p>
          При заполнении форм на сайте вы можете оставить: имя, телефон, адрес электронной
          почты и текст обращения. Эти данные используются исключительно для связи с вами
          и подготовки коммерческого предложения.
        </p>

        <h2>3. Как мы используем данные</h2>
        <p>
          Персональные данные обрабатываются в соответствии с Федеральным законом
          № 152-ФЗ «О персональных данных» и не передаются третьим лицам, за исключением
          случаев, предусмотренных законодательством РФ.
        </p>

        <h2>4. Хранение и защита</h2>
        <p>
          Компания принимает необходимые организационные и технические меры для защиты
          персональных данных от неправомерного доступа, изменения, раскрытия или
          уничтожения.
        </p>

        <h2>5. Контакты</h2>
        <p>
          По вопросам обработки персональных данных вы можете связаться с нами:
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
