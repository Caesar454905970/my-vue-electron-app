<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
// import {ipcRenderer} from "electron"
//
// //给主进程发送一个消息
// ipcRenderer.sendSync("test","param1")
</script>

<template>

  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 4 + TypeScript + Vite" />
    <div>做个小测试</div>
    <img style="width: 200px;height: 200px" src="files://C:/1.png" alt=""  />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
