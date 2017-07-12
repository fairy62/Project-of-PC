<template>
  <div id="daoway">
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    created () {
      axios.get('/api/item/anmo')
        .then(response => {
          const data = response.data
          const baojie = data.data
          console.log(baojie)
        })
    }
  }
</script>

<style>

</style>
