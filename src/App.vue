<template>
  <div class="app">
    <div class="container">
      <el-container class="el-box">
        <router-view class="view" />
      </el-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    background: url('assets/zekedrone-250745.jpg') no-repeat;
    background-size: cover;
  }
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    position: relative;
  }
  .container {
    height: 100%;
  }
  .el-box {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
