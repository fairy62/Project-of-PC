<template>
  <div id="daoway">
    <daoway-header></daoway-header>
    <router-view></router-view>
    <daoway-footer></daoway-footer>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import dMain from './components/main/main.vue'
  import footer from './components/footer/footer.vue'

  export default {
    components: {
      'daoway-header': header,
      'daoway-main':dMain,
      'daoway-footer':footer
    }
  }
</script>

<style>

</style>
