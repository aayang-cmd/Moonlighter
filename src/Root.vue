<template>
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'AppRoot',
  components: { NavBar }
}
</script>

<style>
main { padding: 16px }
</style>
