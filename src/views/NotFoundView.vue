<script setup lang="ts">
import { useMeta } from 'vue-meta'
import { seoConfig } from '@/router/seo.config'
import { useRouter } from 'vue-router'
import HeaderLayout from '@/layouts/HeaderLayout.vue'
import FooterLayout from '@/layouts/FooterLayout.vue'

const router = useRouter()

useMeta({
  title: seoConfig.NOT_FOUND.title,
  meta: [
    { name: 'description', content: seoConfig.NOT_FOUND.description }
  ]
})

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="page">
    <HeaderLayout />

    <section class="not-found">
      <div class="container">
        <div class="not-found-content">
          <h1 class="error-code">404</h1>
          <h2>Страница не найдена</h2>
          <p>Извините, запрашиваемая страница не существует или была перемещена.</p>
          <div class="actions">
            <button @click="goHome" class="btn-primary">Вернуться на главную</button>
            <RouterLink to="/contact" class="btn-secondary">Связаться с нами</RouterLink>
          </div>
        </div>
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

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  flex: 1;
}

.not-found {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  flex: 1;
  display: flex;
  align-items: center;
}

.not-found-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.error-code {
  font-size: 120px;
  font-weight: 800;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 24px;
}

.not-found h2 {
  font-size: 36px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 16px;
}

.not-found p {
  font-size: 18px;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
}

.actions {
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
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(59,130,246,0.3);
}

.btn-secondary {
  display: inline-block;
  padding: 16px 32px;
  background: transparent;
  border: 2px solid #e2e8f0;
  color: #475569;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 80px;
  }
  
  .not-found h2 {
    font-size: 28px;
  }
  
  .not-found p {
    font-size: 16px;
  }
  
  .actions {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
  }
}
</style>