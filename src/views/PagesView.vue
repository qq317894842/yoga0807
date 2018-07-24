<template>
  <div class="pages-view">
    <header-view></header-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  name: 'pages-view',
  components: {
    'header-view':Header,
    'footer-view':Footer
  }
}
</script>

<style scoped>
 .pages-view{
   background: #f6f6f6;
 }
</style>
