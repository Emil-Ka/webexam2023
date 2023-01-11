<template class="wrapper">
  <Header />
  <router-view />
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
  @import '@/design/reset.css';
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
  @import '@/design/base.css';
  @import '@/design/print.css';
</style>
