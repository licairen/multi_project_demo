<!--
 * @Autor: 李建鹏
 * @Date: 2022-04-14 16:07:52
 * @LastEditTime: 2022-04-14 20:00:25
 * @Description: 
-->
<template>
  <div id="app">
    <img
      alt="项目B"
      src="https://dummyimage.com/300x300/ff55ee/fff&text=PROJECT-B"
    />
    <router-view />
  </div>
</template>

<style lang="scss">
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
