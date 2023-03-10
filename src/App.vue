<template>
  <Main-Layout>
    <RouterView />
  </Main-Layout>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'
export default {
  components: { MainLayout },
}
</script>