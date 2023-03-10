<template>
  <main>
    <Navbar />
    <div class="main-router-content">
      <slot />
    </div>
  </main>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: { Navbar },

}
</script>

<style></style>