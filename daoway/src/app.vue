<template>
  <div id="daoway">
    <router-view :serviceItems="serviceItems"></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        // 装着所有服务项目的数组，服务项目为一个一个的对象
        serviceItems: [],
      }
    },
    created () {
      axios.get('/daoway/all')
        .then(response => {
          const data = response.data
          // console.log(data)
          this.serviceItems = data.data
          // console.log(this.serviceItems)
        })
    }

  }
</script>

<style>

</style>
