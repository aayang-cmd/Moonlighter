<template>
  <header class="app-header">
    <nav>
      <button @click="$emit('change-view','home')">Home</button>
      <button @click="$emit('change-view','menu')">Menu</button>
      <button @click="$emit('change-view','contact')">Contact</button>
      <button @click="$emit('change-view','about')">About</button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header { background:#fff; padding:12px; border-bottom:1px solid #eee; }
nav { display:flex; gap:8px; }
button { background:#42b983; color:white; border:none; padding:8px 12px; border-radius:4px; cursor:pointer; }
button:hover { opacity:0.9 }
</style>
