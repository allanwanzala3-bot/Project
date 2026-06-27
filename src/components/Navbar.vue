<script setup>
</script>

<template>
  <nav class="navbar">
    <router-link class="brand" to="/">Kennedy Odunga</router-link>
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/work">Work</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/education">Academic</router-link>
      <router-link to="/achievements">Achievements</router-link>
      <router-link to="/certificates">Certificates</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.25rem;
  background: #0f172a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
  gap: 1rem;
}

.brand {
  font-size: 1.15rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
}

.nav-links a {
  text-decoration: none;
  color: #dbeafe;
  font-weight: 500;
  white-space: nowrap;
}

.nav-links a.router-link-active {
  color: white;
  border-bottom: 2px solid #60a5fa;
}

@media (max-width: 900px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-links {
    justify-content: center;
    gap: 0.65rem;
  }
}

@media (max-width: 600px) {
  .navbar {
    padding: 0.85rem 0.85rem;
  }

  .brand {
    text-align: center;
    width: 100%;
  }

  .nav-links {
    justify-content: center;
  }

  .nav-links a {
    font-size: 0.95rem;
  }
}

</style>