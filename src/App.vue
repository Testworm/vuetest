<template>
  <div id="app">
    <router-link to="/pageDetail">详情</router-link>
    <router-link to="/pageMain">主页</router-link>
    <router-link to="/testvue">测试组件</router-link>
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
