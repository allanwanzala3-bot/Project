<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-shell">
    <NavBar />
    <main class="main-content">
      <RouterView />
    </main>
    <footer class="footer">
      <p>© 2026 Kennedy Odunga. </p>
    </footer>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient( #2543a5 100%);
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem;
}

.footer {
  text-align: center;
  padding: 1.2rem;
  color: #3949AB;
  background: #ffffff;
  border-top: 1px solid #e3e8f0;
}

@media (max-width: 768px) {
  .main-content {
    padding: 0.75rem;
  }
}

</style>
