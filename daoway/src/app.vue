<template>
  <div id="daoway">
    <keep-alive>
      <router-view :serviceItems="serviceItems" :provider="provider"></router-view>
    </keep-alive>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        // 装着所有服务项目的数组，服务项目为一个一个的对象
        serviceItems: [],
        provider: []
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
      axios.get('/daoway/pro')
        .then(response => {
          const data = response.data
          // console.log(data)
          this.provider = data.data
          // console.log(this.serviceItems)
        })
    }

  }
</script>

<style>

</style>
