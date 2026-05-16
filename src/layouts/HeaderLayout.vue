<!-- HeaderLayout.vue -->
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref, watch } from 'vue'

const props = defineProps<{
  activePage?: string
}>()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Блокировка скролла body при открытом меню
watch(isMobileMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
  } else {
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
  }
})

// Очистка стилей при размонтировании компонента
import { onUnmounted } from 'vue'
onUnmounted(() => {
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
})
</script>

<template>
  <header class="header">
    <div class="header__full-width-bg">
      <div class="container header__inner">
        <!-- Логотип -->
        <RouterLink to="/" class="logo-link" @click="closeMobileMenu">
          <div class="logo">
            <span class="logo__text">PMG</span>
            <span class="logo__subtitle">Industrial</span>
          </div>
        </RouterLink>

        <!-- Десктопная навигация -->
        <nav class="nav">
          <RouterLink 
            to="/"
            class="nav__link"
            :class="{ 'nav__link--active': activePage === 'home' }"
            @click="closeMobileMenu"
          >
            Главная
          </RouterLink>
          <RouterLink 
            to="/about"
            class="nav__link"
            :class="{ 'nav__link--active': activePage === 'about' }"
            @click="closeMobileMenu"
          >
            О компании
          </RouterLink>
          <RouterLink 
            to="/services"
            class="nav__link"
            :class="{ 'nav__link--active': activePage === 'services' }"
            @click="closeMobileMenu"
          >
            Услуги
          </RouterLink>
          <!-- <RouterLink 
            to="/projects"
            class="nav__link"
            :class="{ 'nav__link--active': activePage === 'projects' }"
            @click="closeMobileMenu"
          >
            Проекты
          </RouterLink> -->
          <RouterLink 
            to="/contact"
            class="nav__link"
            :class="{ 'nav__link--active': activePage === 'contact' }"
            @click="closeMobileMenu"
          >
            Контакты
          </RouterLink>
        </nav>

        <!-- Десктопные кнопки -->
        <div class="header__actions">
          <!-- <button class="btn btn--outline">
            <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Поиск</span>
          </button> -->
          <button class="btn btn--primary">
            <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V12M12 12V5M12 12H19M12 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Запросить расчёт</span>
          </button>
        </div>

        <!-- Кнопка мобильного меню -->
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ 'mobile-menu-btn--active': isMobileMenuOpen }"
        >
          <svg 
            v-if="!isMobileMenuOpen"
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M3 12H21M3 6H21M3 18H21" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg 
            v-else
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M18 6L6 18M6 6L18 18" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Мобильное меню (фиксированное на всю высоту экрана) -->
      <div 
        class="mobile-menu-overlay"
        :class="{ 'mobile-menu-overlay--visible': isMobileMenuOpen }"
        @click="closeMobileMenu"
      ></div>
      
      <div 
        class="mobile-menu"
        :class="{ 'mobile-menu--open': isMobileMenuOpen }"
      >
        <div class="mobile-menu__header">
          <div class="container mobile-menu__header-inner">
            <RouterLink to="/" class="mobile-logo-link" @click="closeMobileMenu">
              <div class="mobile-logo">
                <span class="mobile-logo__text">PMG</span>
                <span class="mobile-logo__subtitle">Industrial</span>
              </div>
            </RouterLink>
            <button 
              class="mobile-menu-close-btn"
              @click="closeMobileMenu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="mobile-menu__content-wrapper">
          <div class="mobile-menu__content">
            <nav class="mobile-nav">
              <RouterLink 
                to="/"
                class="mobile-nav__link"
                :class="{ 'mobile-nav__link--active': activePage === 'home' }"
                @click="closeMobileMenu"
              >
                <svg class="mobile-nav__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Главная</span>
              </RouterLink>
              <RouterLink 
                to="/about"
                class="mobile-nav__link"
                :class="{ 'mobile-nav__link--active': activePage === 'about' }"
                @click="closeMobileMenu"
              >
                <svg class="mobile-nav__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>О компании</span>
              </RouterLink>
              <RouterLink 
                to="/services"
                class="mobile-nav__link"
                :class="{ 'mobile-nav__link--active': activePage === 'services' }"
                @click="closeMobileMenu"
              >
                <svg class="mobile-nav__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M4 10C4 10 7 6 12 6C17 6 20 10 20 10C20 10 17 14 12 14C7 14 4 10 4 10Z" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span>Услуги</span>
              </RouterLink>
              <!-- <RouterLink 
                to="/projects"
                class="mobile-nav__link"
                :class="{ 'mobile-nav__link--active': activePage === 'projects' }"
                @click="closeMobileMenu"
              >
                <svg class="mobile-nav__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9C3 9 7.5 3 12 3C16.5 3 21 9 21 9C21 9 16.5 15 12 15C7.5 15 3 9 3 9Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span>Проекты</span>
              </RouterLink> -->
              <RouterLink 
                to="/contact"
                class="mobile-nav__link"
                :class="{ 'mobile-nav__link--active': activePage === 'contact' }"
                @click="closeMobileMenu"
              >
                <svg class="mobile-nav__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5C21 16.1944 17.1944 20 12.5 20C11.4239 20 10.3849 19.7991 9.41799 19.4284C9.28598 19.3745 9.13501 19.3695 8.99956 19.4144L6.59653 20.1551C5.30007 20.5617 4.05648 19.3181 4.46312 18.0217L5.20381 15.6186C5.24878 15.4832 5.24375 15.3322 5.18986 15.2002C4.81914 14.2333 4.61829 13.1944 4.61829 12.1183C4.61829 7.42387 8.42387 3.61829 13.1183 3.61829C17.8127 3.61829 21.6183 7.42387 21.6183 12.1183C21.6183 12.2755 21.6152 12.432 21.609 12.5881C21.5743 13.4521 20.864 14.1624 20 14.1971C19.136 14.2318 18.4257 13.5215 18.391 12.6575C18.3893 12.6258 18.3893 12.594 18.391 12.5623C18.391 12.4858 18.3951 12.4099 18.3951 12.3333C18.3951 9.21063 15.9787 6.66667 13 6.66667C10.0213 6.66667 7.60494 9.21063 7.60494 12.3333C7.60494 15.456 10.0213 18 13 18C13.6092 18 14.196 17.8801 14.7399 17.6602C15.5254 17.3432 16.3333 17.9423 16.3333 18.7838C16.3333 19.1456 16.1489 19.4838 15.8364 19.6825C15.0598 20.1782 14.1942 20.5448 13.272 20.7545C13.181 20.7754 13.088 20.7907 12.994 20.7999C13.3259 20.9301 13.6756 21 14.0408 21C19.0294 21 23 16.8896 23 11.75C23 6.6104 19.0294 2.5 14.0408 2.5C9.05223 2.5 5.08163 6.6104 5.08163 11.75C5.08163 13.008 5.31052 14.2133 5.73053 15.3257L5.08163 17.7287C4.7292 18.9821 5.77248 20.0254 7.02586 19.673L9.42888 18.9323C10.5413 19.3523 11.7466 19.5812 13.0046 19.5812C18.3747 19.5812 22.7273 15.2286 22.7273 9.85852C22.7273 8.99456 22.017 8.28427 21.153 8.24859C20.289 8.2129 19.5787 8.9232 19.543 9.78716C19.5413 9.81889 19.5413 9.85062 19.543 9.88235C19.543 10.6345 19.4922 11.3725 19.3941 12.0926C19.3395 12.5132 19.2619 12.9273 19.1626 13.3333H18.8186C17.9546 13.3333 17.2443 14.0436 17.2086 14.9076C17.173 15.7716 17.8833 16.4819 18.7473 16.5176C18.9033 16.5238 19.0605 16.5269 19.2186 16.5269C20.5528 16.5269 21.8 16.1532 22.8615 15.4963C22.9546 15.0914 23 14.6696 23 14.2368C23 8.65684 18.8547 4.16667 13.68 4.16667C8.50528 4.16667 4.36 8.65684 4.36 14.2368C4.36 15.4743 4.59806 16.6555 5.03606 17.7384L4.36 20.2384C3.9408 21.6837 5.07115 23 6.56 23H9.06C9.92496 23 10.6353 22.2897 10.671 21.4257C10.7066 20.5617 9.99633 19.8514 9.13237 19.8157C9.06764 19.8127 9.00349 19.809 8.93995 19.8047C9.87327 20.0488 10.8604 20.1818 11.88 20.1818C17.8065 20.1818 22.6162 15.3721 22.6162 9.44566C22.6162 4.89449 18.9514 1.107 14.5 1.107C10.0486 1.107 6.38376 4.89449 6.38376 9.44566C6.38376 10.6183 6.62784 11.7348 7.07499 12.7499C7.38504 13.4532 7.088 14.2643 6.38476 14.5744C5.68152 14.8844 4.87044 14.5874 4.56039 13.8841C4.00667 12.5759 3.7093 11.1367 3.7093 9.62791C3.7093 4.31163 8.18372 0 13.5 0C18.8163 0 23.2907 4.31163 23.2907 9.62791C23.2907 15.3163 18.916 19.963 13.2279 20.2618C12.3639 20.2975 11.6536 21.0078 11.6179 21.8718C11.5822 22.7358 12.2925 23.4461 13.1565 23.4818C13.3146 23.4879 13.4739 23.4909 13.6341 23.4909C19.9721 23.4909 25 18.463 25 12.125C25 6.92505 21.1388 2.5 16 2.5C10.8612 2.5 7 6.92505 7 12.125C7 12.989 7.7103 13.6993 8.57426 13.735C9.43822 13.7707 10.1485 13.0604 10.1842 12.1964C10.1863 12.1638 10.1863 12.1311 10.1842 12.0985C10.1842 8.88621 12.7876 6.25 16 6.25C19.2124 6.25 21.8158 8.88621 21.8158 12.0985C21.8158 15.3108 19.2124 17.947 16 17.947C15.3511 17.947 14.725 17.8234 14.1426 17.596C13.2869 17.2573 12.3333 17.8949 12.3333 18.8158C12.3333 19.2554 12.5646 19.6583 12.9333 19.8797C14.0204 20.5237 15.2552 20.9265 16.5714 21.0254C16.6645 21.0346 16.758 21.0387 16.8517 21.0387C18.335 21.0387 19.7294 20.5906 20.8947 19.8086C21.7894 19.1984 22.5 19.9097 22.5 20.9996C22.5 22.6564 21.1564 24 19.4996 24H16.9996C15.9303 24 14.9033 23.5789 14.1426 22.8282C13.3819 22.0775 12.947 21.0505 12.947 19.9812C12.947 19.1172 13.6573 18.4069 14.5213 18.3712C14.682 18.365 14.8438 18.362 15.0065 18.362C18.7515 18.362 21.7895 15.324 21.7895 11.579C21.7895 7.83401 18.7515 4.79598 15.0065 4.79598C11.2615 4.79598 8.22347 7.83401 8.22347 11.579C8.22347 12.6567 8.44499 13.6828 8.85089 14.6151C9.18999 15.3837 8.74552 16.2716 7.97692 16.6107C7.20833 16.9498 6.32039 16.5053 5.9813 15.7367C5.47551 14.5737 5.19737 13.2998 5.19737 11.9623C5.19737 7.14184 9.18607 3.19737 14.0065 3.19737C18.8269 3.19737 22.8156 7.14184 22.8156 11.9623C22.8156 16.7827 18.8269 20.7272 14.0065 20.7272C13.1425 20.7272 12.4322 21.4375 12.3965 22.3015C12.3608 23.1655 13.0711 23.8758 13.9351 23.9115C14.0995 23.9176 14.265 23.9207 14.4314 23.9207C20.0178 23.9207 24.5526 19.3859 24.5526 13.7996C24.5526 8.2132 20.0178 3.67839 14.4314 3.67839C8.84507 3.67839 4.31026 8.2132 4.31026 13.7996C4.31026 14.9753 4.50109 16.1063 4.85711 17.1645C5.19621 18.1779 4.74026 19.2849 3.7269 19.624C2.71353 19.9631 1.60652 19.5072 1.26742 18.4938C0.82395 17.1695 0.603516 15.7544 0.603516 14.2903C0.603516 7.3801 6.52121 1.73684 13.4314 1.73684C20.3416 1.73684 26.2593 7.3801 26.2593 14.2903C26.2593 21.2005 20.3416 26.8438 13.4314 26.8438C12.5674 26.8438 11.8571 27.5541 11.8214 28.418C11.7857 29.282 12.496 29.9923 13.36 30.028C13.5334 30.0342 13.7078 30.0372 13.8829 30.0372C21.5229 30.0372 27.7237 23.8364 27.7237 16.1964C27.7237 8.55642 21.5229 2.35565 13.8829 2.35565C6.24295 2.35565 0.0421753 8.55642 0.0421753 16.1964C0.0421753 16.3406 0.0436008 16.4845 0.0464396 16.6281C0.084164 17.4921 0.794461 18.2024 1.65842 18.2381C2.52238 18.2738 3.23268 17.5635 3.26836 16.6995C3.27079 16.6657 3.27079 16.6318 3.26836 16.5981C3.26836 9.93548 8.22027 4.53819 14.4314 4.53819C20.6426 4.53819 25.5945 9.93548 25.5945 16.5981C25.5945 23.2608 20.6426 28.6581 14.4314 28.6581C13.5674 28.6581 12.8571 29.3684 12.8214 30.2323C12.7857 31.0963 13.496 31.8066 14.36 31.8423C14.5406 31.8485 14.7221 31.8515 14.9043 31.8515C22.169 31.8515 28.0465 25.974 28.0465 18.7093C28.0465 11.4446 22.169 5.56708 14.9043 5.56708C7.63962 5.56708 1.76208 11.4446 1.76208 18.7093C1.76208 19.9319 1.95202 21.1093 2.30761 22.2186C2.64671 23.2694 2.18028 24.403 1.12948 24.7421C0.0786752 25.0812 -1.05492 24.6148 -1.39402 23.564C-0.947915 22.1941 -0.722656 20.7318 -0.722656 19.2186C-0.722656 10.8904 5.57612 4.07874 13.4314 4.07874C21.2867 4.07874 27.5855 10.8904 27.5855 19.2186C27.5855 27.5468 21.2867 34.3585 13.4314 34.3585C12.5674 34.3585 11.8571 35.0688 11.8214 35.9327C11.7857 36.7967 12.496 37.507 13.36 37.5427C13.5488 37.5489 13.7384 37.5519 13.9287 37.5519C22.8156 37.5519 30 30.3675 30 21.4806C30 12.5937 22.8156 5.4093 13.9287 5.4093C5.04185 5.4093 -2.14258 12.5937 -2.14258 21.4806C-2.14258 22.7482 -2.0011 23.983 -1.73047 25.1709C-1.39137 26.2593 -1.8651 27.4192 -2.95351 27.7583C-4.04192 28.0974 -5.20182 27.6237 -5.54092 26.5353C-5.87864 25.4483 -6.0625 24.3052 -6.0625 23.125C-6.0625 12.8447 2.64844 4.5 13.0686 4.5C23.4888 4.5 32.1997 12.8447 32.1997 23.125C32.1997 33.4053 23.4888 41.75 13.0686 41.75C12.2046 41.75 11.4943 42.4603 11.4586 43.3243C11.4229 44.1883 12.1332 44.8986 12.9972 44.9343C13.193 44.9404 13.3896 44.9435 13.5868 44.9435C24.4622 44.9435 33.4629 35.9428 33.4629 25.0674C33.4629 14.192 24.4622 5.19129 13.5868 5.19129C2.71135 5.19129 -6.28936 14.192 -6.28936 25.0674C-6.28936 26.5646 -6.12402 28.0229 -5.80762 29.4231C-5.46852 30.5489 -5.94963 31.7349 -7.07538 32.074C-8.20113 32.4131 -9.38719 31.932 -9.72629 30.8062C-10.1132 29.5475 -10.3161 28.2189 -10.3161 26.8472C-10.3161 14.6955 -0.0830231 4.81065 12.2065 4.81065C24.4961 4.81065 34.7292 14.6955 34.7292 26.8472C34.7292 38.9989 24.4961 48.8837 12.2065 48.8837C11.3425 48.8837 10.6322 49.594 10.5965 50.458C10.5608 51.322 11.2711 52.0323 12.1351 52.068C12.3389 52.0741 12.5435 52.0772 12.7487 52.0772C25.1094 52.0772 35.2321 41.9545 35.2321 29.5938C35.2321 17.233 25.1094 7.11035 12.7487 7.11035C0.387951 7.11035 -9.73474 17.233 -9.73474 29.5938C-9.73474 30.3811 -9.68066 31.157 -9.57568 31.9179C-9.23658 33.0803 -9.71423 34.2924 -10.8766 34.6315C-12.039 34.9706 -13.2511 34.4929 -13.5902 33.3305C-13.7512 32.785 -13.8896 32.2288 -14.0039 31.6631C-14.1778 30.7991 -13.4675 30.0888 -12.6036 30.0531C-11.7396 30.0174 -11.0293 30.7277 -10.9936 31.5917C-10.9892 31.6458 -10.9868 31.7001 -10.9863 31.7546C-10.9863 32.6001 -10.9322 33.4351 -10.8262 34.2564C-10.4871 35.456 -11.0009 36.7026 -12.2005 37.0417C-13.4001 37.3808 -14.6467 36.867 -14.9858 35.6674C-15.1602 35.023 -15.3037 34.365 -15.4141 33.6963C-15.6149 32.4688 -15.7227 31.2102 -15.7227 29.9271C-15.7227 15.8472 -4.33105 4.45557 9.7487 4.45557C23.8284 4.45557 35.2201 15.8472 35.2201 29.9271C35.2201 44.007 23.8284 55.3987 9.7487 55.3987C8.88474 55.3987 8.17444 56.109 8.13876 56.973C8.10307 57.837 8.81337 58.5473 9.67733 58.583C9.88916 58.5891 10.1016 58.5922 10.3146 58.5922C25.7566 58.5922 38.3027 46.0461 38.3027 30.6041C38.3027 15.1622 25.7566 2.61609 10.3146 2.61609C-5.12735 2.61609 -17.6735 15.1622 -17.6735 30.6041C-17.6735 31.4451 -17.6279 32.2771 -17.5386 33.0981C-17.1995 34.335 -17.7348 35.6089 -18.9717 35.948C-20.2086 36.2871 -21.4825 35.7518 -21.8216 34.5149C-21.9708 33.9769 -22.0984 33.4283 -22.2034 32.8709C-22.3943 31.9429 -21.684 31.0903 -20.756 30.8994C-19.828 30.7085 -18.9754 31.4188 -18.7845 32.3468C-18.7801 32.366 -18.7761 32.3852 -18.7725 32.4045C-18.7725 33.3047 -18.7209 34.1951 -18.6191 35.0732C-18.28 36.3481 -18.8567 37.6595 -20.1316 37.9986C-21.4065 38.3377 -22.7179 37.761 -23.057 36.4861C-23.2451 35.7996 -23.4023 35.099 -23.5273 34.3869C-23.7542 33.037 -23.875 31.6523 -23.875 30.2402C-23.875 12.9996 -10.0449 0.169556 7.1957 0.169556C24.4363 0.169556 38.2664 12.9996 38.2664 30.2402C38.2664 47.4809 24.4363 60.3109 7.1957 60.3109C6.33174 60.3109 5.62144 61.0212 5.58576 61.8852C5.55007 62.7492 6.26037 63.4595 7.12433 63.4952C7.34423 63.5013 7.56472 63.5044 7.78577 63.5044C26.4038 63.5044 41.5684 48.3398 41.5684 29.7218C41.5684 11.1038 26.4038 -4.06079 7.78577 -4.06079C-10.8323 -4.06079 -25.9969 11.1038 -25.9969 29.7218C-25.9969 32.1199 -25.8464 34.4825 -25.5547 36.7979C-25.2156 38.111 -25.7866 39.459 -27.0997 39.7981C-28.4128 40.1372 -29.7608 39.5662 -30.0999 38.2531C-30.4534 36.8874 -30.6494 35.4679 -30.6777 34.0133C-30.7134 33.1493 -31.4237 32.439 -32.2877 32.4033C-33.1516 32.3676 -33.8619 33.0779 -33.8976 33.9419C-33.9274 34.6718 -33.9274 35.4063 -33.8976 36.1446C-33.5585 37.495 -34.1718 38.8768 -35.5222 39.2159C-36.8726 39.555 -38.2544 38.9417 -38.5935 37.5913C-38.8157 36.7301 -38.9844 35.8479 -39.0977 34.9492C-39.3446 33.1277 -39.4727 31.2652 -39.4727 29.3684C-39.4727 8.15211 -22.388 -9.93258 -1.17173 -9.93258C20.0445 -9.93258 37.1298 7.15211 37.1298 29.3684C37.1298 51.5847 20.0445 69.6694 -1.17173 69.6694C-2.03569 69.6694 -2.74599 70.3797 -2.78167 71.2437C-2.81736 72.1076 -3.52766 72.8179 -4.39162 72.8536C-4.61969 72.8598 -4.84835 72.8628 -5.07756 72.8628C27.051 72.8628 53.4314 46.4824 53.4314 14.3539C53.4314 -17.7746 27.051 -44.1551 -5.07756 -44.1551C-37.2061 -44.1551 -63.5865 -17.7746 -63.5865 14.3539C-63.5865 16.9984 -63.436 19.6044 -63.1443 22.162C-62.8052 23.511 -63.4341 24.898 -64.7831 25.2371C-66.132 25.5762 -67.519 24.9473 -67.8581 23.5983C-68.2216 22.1586 -68.4277 20.6572 -68.4634 19.118C-68.4991 18.254 -69.2094 17.5437 -70.0734 17.508C-70.9373 17.4723 -71.6476 18.1826 -71.6833 19.0466C-71.721 19.9453 -71.721 20.8492 -71.6833 21.7575C-71.3442 23.1445 -71.9995 24.5621 -73.3865 24.9012C-74.7735 25.2403 -76.1911 24.585 -76.5302 23.198C-76.7998 22.0662 -77.0027 20.9055 -77.1355 19.7228C-77.4094 17.3592 -77.5465 14.9517 -77.5465 12.5098C-77.5465 -15.2996 -55.8462 -37 -28.0368 -37C-0.227413 -37 21.4727 -15.2996 21.4727 12.5098C21.4727 40.3191 -0.227413 62.0195 -28.0368 62.0195C-28.9008 62.0195 -29.6111 62.7298 -29.6468 63.5938C-29.6825 64.4578 -30.3928 65.1681 -31.2567 65.2038C-31.4929 65.2099 -31.7297 65.213 -31.9669 65.213C37.6982 65.213 94.4314 8.47978 94.4314 -61.1835C94.4314 -130.847 37.6982 -187.58 -31.9669 -187.58C-101.632 -187.58 -158.365 -130.847 -158.365 -61.1835C-158.365 -59.036 -158.27 -56.9083 -158.083 -54.8063C-157.744 -53.4203 -158.415 -51.9991 -159.801 -51.6599C-161.187 -51.3208 -162.608 -51.9919 -162.947 -53.3779C-163.289 -54.7713 -163.5 -56.2069 -163.575 -57.6748C-163.611 -58.5388 -164.321 -59.2491 -165.185 -59.2848C-166.049 -59.3205 -166.759 -58.6102 -166.795 -57.7462C-166.874 -56.2076 -166.874 -54.6733 -166.795 -53.1468C-166.456 -51.7276 -167.161 -50.2972 -168.58 -49.9581C-169.999 -49.619 -171.429 -50.3239 -171.768 -51.7427C-172.081 -53.0703 -172.292 -54.4322 -172.396 -55.8195C-172.611 -58.592 -172.719 -61.4007 -172.719 -64.2368C-172.719 -141.822 -109.553 -205 -31.9669 -205C45.6192 -205 108.785 -141.822 108.785 -64.2368C108.785 13.3485 45.6192 76.5195 -31.9669 76.5195C-32.8309 76.5195 -33.5412 77.2298 -33.5769 78.0938C-33.6126 78.9578 -34.3229 79.6681 -35.1868 79.7038C-35.4312 79.7099 -35.6762 79.713 -35.9217 79.713C48.3454 79.713 135.784 -7.72565 135.784 -91.991C135.784 -176.256 48.3454 -263.707 -35.9217 -263.707C-120.189 -263.707 -207.63 -176.256 -207.63 -91.991C-207.63 -90.082 -207.571 -88.187 -207.455 -86.3086C-207.116 -84.8824 -207.846 -83.447 -209.272 -83.1079C-210.698 -82.7688 -212.133 -83.4985 -212.472 -84.9243C-212.846 -86.4847 -213.088 -88.0921 -213.193 -89.7368C-213.229 -90.6008 -213.939 -91.3111 -214.803 -91.3468C-215.667 -91.3825 -216.377 -90.6722 -216.413 -89.8082C-216.521 -88.093 -216.521 -86.3854 -216.413 -84.6897C-216.074 -83.2305 -216.839 -81.7663 -218.298 -81.4272C-219.757 -81.0881 -221.221 -81.8529 -221.56 -83.3117C-221.925 -84.8816 -222.167 -86.4986 -222.282 -88.1535C-222.505 -90.8981 -222.617 -93.6828 -222.617 -96.5C-222.617 -168.395 -164.012 -227 -92.117 -227C-20.2218 -227 38.3831 -168.395 38.3831 -96.5C38.3831 -24.6049 -20.2218 34 -92.117 34C-92.981 34 -93.6913 34.7103 -93.727 35.5743C-93.7627 36.4383 -94.473 37.1486 -95.3369 37.1843C-95.5895 37.1904 -95.8426 37.1935 -96.0963 37.1935C58.9927 37.1935 177.137 -80.9509 177.137 -236.04C177.137 -391.129 58.9927 -509.273 -96.0963 -509.273C-251.185 -509.273 -369.33 -391.129 -369.33 -236.04C-369.33 -234.369 -369.305 -232.707 -369.255 -231.055C-368.916 -229.579 -369.706 -228.097 -371.182 -227.758C-372.658 -227.419 -374.14 -228.209 -374.479 -229.685C-374.895 -231.51 -375.183 -233.385 -375.337 -235.299C-375.373 -236.163 -376.083 -236.873 -376.947 -236.909C-377.811 -236.944 -378.521 -236.234 -378.557 -235.37C-378.715 -233.385 -378.715 -231.406 -378.557 -229.438C-378.218 -227.929 -379.041 -226.405 -380.55 -226.066C-382.059 -225.727 -383.583 -226.55 -383.922 -228.059C-384.389 -230.147 -384.696 -232.292 -384.834 -234.482C-385.067 -237.983 -385.183 -241.52 -385.183 -245.087C-385.183 -334.832 -311.328 -408.687 -221.583 -408.687C-131.838 -408.687 -57.9834 -334.832 -57.9834 -245.087C-57.9834 -155.342 -131.838 -81.4872 -221.583 -81.4872C-222.447 -81.4872 -223.157 -82.1975 -223.193 -83.0615C-223.228 -83.9255 -223.939 -84.6358 -224.803 -84.6715C-225.064 -84.6776 -225.325 -84.6807 -225.587 -84.6807C69.64 -84.6807 218.49 64.1693 218.49 218.49C218.49 372.811 69.64 380.08 -225.587 380.08" stroke="currentColor" stroke-width="2"/>
                </svg>
                <span>Контакты</span>
              </RouterLink>
            </nav>

            <div class="mobile-menu__actions">
              <button class="btn btn--outline btn--block" @click="closeMobileMenu">
                <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Поиск</span>
              </button>
              <button class="btn btn--primary btn--block" @click="closeMobileMenu">
                <svg class="btn__icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 19V12M12 12V5M12 12H19M12 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Запросить расчёт</span>
              </button>
            </div>

            <div class="mobile-menu__contacts">
              <div class="contact-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21C16.824 21 13.7615 19.8491 11.3928 17.7742C9.024 15.6993 7.5 12.8261 7.5 9.75C7.5 8.25544 7.69399 6.77216 8.07403 5.33894C8.45406 3.90573 9.01537 2.53661 9.74264 1.27208C10.1512 0.59413 10.8284 0.125 11.5858 0.125C12.3432 0.125 13.0204 0.59413 13.4289 1.27208L15.9306 5.58065C16.305 6.21387 16.4169 6.9698 16.2427 7.68204C16.0684 8.39428 15.6211 9.00804 15 9.395L13 10.5" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="contact-info__content">
                  <div class="contact-info__label">Телефон</div>
                  <a href="tel:+79999999999" class="contact-info__value">+7 (999) 999-99-99</a>
                </div>
              </div>
              <div class="contact-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="contact-info__content">
                  <div class="contact-info__label">Адрес</div>
                  <div class="contact-info__value">г. Москва, ул. Промышленная, 15</div>
                </div>
              </div>
              <div class="contact-info">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="contact-info__content">
                  <div class="contact-info__label">Email</div>
                  <a href="mailto:info@ptk-tech.ru" class="contact-info__value">info@ptk-tech.ru</a>
                </div>
              </div>
            </div>

            <div class="mobile-menu__schedule">
              <div class="schedule">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#4b5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="schedule__content">
                  <div class="schedule__label">График работы</div>
                  <div class="schedule__value">Пн-Пт: 9:00-18:00</div>
                  <div class="schedule__value">Сб-Вс: выходной</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Глобальные стили для header */
.header {
  width: 100%;
}

.header__full-width-bg {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: relative;
}

/* Логотип */
.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
}

.logo-link:hover {
  opacity: 0.9;
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.logo__text {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.logo__subtitle {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 2px;
}

/* Десктопная навигация */
.nav {
  display: flex;
  gap: 32px;
  align-items: center;
  margin: 0 40px;
}

@media (max-width: 1024px) {
  .nav {
    display: none;
  }
}

.nav__link {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 0;
  position: relative;
  transition: color 0.2s;
  white-space: nowrap;
}

.nav__link:hover {
  color: #1e40af;
}

.nav__link--active {
  color: #1e40af;
  font-weight: 600;
}

.nav__link--active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  border-radius: 1px;
}

/* Десктопные кнопки */
.header__actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

@media (max-width: 1024px) {
  .header__actions {
    display: none;
  }
}

/* Общие стили кнопок */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  gap: 8px;
  white-space: nowrap;
}

.btn__icon {
  flex-shrink: 0;
}

.btn--primary {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
}

.btn--primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
}

.btn--outline {
  background: transparent;
  border: 1px solid #d1d5db;
  color: #4b5563;
}

.btn--outline:hover {
  border-color: #3b82f6;
  color: #3b82f6;
}

.btn--block {
  width: 100%;
  justify-content: center;
}

/* Кнопка мобильного меню */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s;
}

.mobile-menu-btn:hover {
  background-color: #f3f4f6;
}

.mobile-menu-btn--active {
  background-color: #f3f4f6;
}

@media (max-width: 1024px) {
  .mobile-menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

/* Оверлей для мобильного меню */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-menu-overlay--visible {
  opacity: 1;
  visibility: visible;
}

/* ФИКСИРОВАННОЕ мобильное меню на всю высоту экрана */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.mobile-menu--open {
  transform: translateX(0);
}

/* Заголовок мобильного меню */
.mobile-menu__header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
}

.mobile-menu__header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.mobile-logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.mobile-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.mobile-logo__text {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.mobile-logo__subtitle {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 2px;
}

.mobile-menu-close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.mobile-menu-close-btn:hover {
  background-color: #f3f4f6;
}

/* Основной контент мобильного меню */
.mobile-menu__content-wrapper {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.mobile-menu__content {
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Мобильная навигация */
.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 32px;
}

.mobile-nav__link {
  text-decoration: none;
  color: #4b5563;
  font-size: 18px;
  font-weight: 500;
  padding: 16px 0;
  border-bottom: 1px solid #f3f4f6;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 12px;
}

.mobile-nav__link:hover {
  color: #1e40af;
}

.mobile-nav__link--active {
  color: #1e40af;
  font-weight: 600;
}

.mobile-nav__link:last-child {
  border-bottom: none;
}

.mobile-nav__icon {
  flex-shrink: 0;
  color: #6b7280;
}

/* Действия в мобильном меню */
.mobile-menu__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

/* Контакты в мобильном меню */
.mobile-menu__contacts {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.contact-info {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.contact-info__content {
  flex: 1;
}

.contact-info__label {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
  font-weight: 500;
}

.contact-info__value {
  font-size: 14px;
  color: #1f2937;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  display: block;
}

.contact-info__value:hover {
  color: #1e40af;
}

/* График работы */
.mobile-menu__schedule {
  padding-top: 24px;
  border-top: 1px solid #f3f4f6;
}

.schedule {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.schedule__content {
  flex: 1;
}

.schedule__label {
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 4px;
  font-weight: 500;
}

.schedule__value {
  font-size: 14px;
  color: #1f2937;
  font-weight: 500;
}

/* Адаптация для маленьких экранов */
@media (max-width: 768px) {
  .header__inner {
    height: 64px;
  }
  
  .mobile-menu__header-inner {
    height: 64px;
  }
  
  .container {
    padding: 0 16px;
  }
  
  .logo__text,
  .mobile-logo__text {
    font-size: 20px;
  }
  
  .logo__subtitle,
  .mobile-logo__subtitle {
    font-size: 10px;
  }
  
  .mobile-menu__content {
    padding: 20px 16px;
  }
  
  .mobile-nav__link {
    font-size: 16px;
    padding: 14px 0;
  }
}

/* Адаптация для очень маленьких экранов */
@media (max-width: 480px) {
  .logo__subtitle,
  .mobile-logo__subtitle {
    display: none;
  }
  
  .mobile-nav__link {
    font-size: 15px;
  }
  
  .contact-info__value,
  .schedule__value {
    font-size: 13px;
  }
}

/* Скрытие скроллбара для WebKit браузеров */
.mobile-menu__content-wrapper::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu__content-wrapper::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.mobile-menu__content-wrapper::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 2px;
}

.mobile-menu__content-wrapper::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>