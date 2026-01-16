<template>
  <div class="layout">
    <header class="header">
      <div class="container header__inner">
        <div class="logo">IS</div>

        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/services">Services</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="footer">
      <div class="container footer__inner">
        © 2025 Industrial Solutions
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  border-bottom: 1px solid var(--color-border);
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo {
  width: 36px;
  height: 36px;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  font-weight: 700;
}

.nav a {
  margin-left: 24px;
  color: var(--color-text);
}

.footer {
  border-top: 1px solid var(--color-border);
  padding: 24px 0;
  margin-top: 80px;
  text-align: center;
  color: var(--color-muted);
}
</style>
