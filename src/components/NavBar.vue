<template>
  <nav class="nav">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/menu" class="nav-link">Menu</router-link>
  </nav>
</template>

<script>
export default { name: 'NavBar' }
</script>

<style scoped>
.nav { display:flex; gap:12px; padding:12px; background:#000; }
.nav-link { text-decoration:none; color:#fff; padding:8px 12px; border-radius:4px; }
.nav-link.router-link-active { background:#222; color:#fff; }
</style>
