<!--
 * @Autor: 李建鹏
 * @Date: 2021-05-19 15:33:26
 * @LastEditTime: 2022-04-17 17:33:21
 * @Description: 
-->
<template>
  <div id="app">
   <img
      alt="项目A"
      src="https://dummyimage.com/300x300/FF0097/fff&text=PROJECT-A"
    />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  border-radius: 16px;
}
</style>
