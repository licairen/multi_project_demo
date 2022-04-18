<!--
 * @Autor: 李建鹏
 * @Date: 2021-05-19 15:33:26
 * @LastEditTime: 2022-04-14 19:59:52
 * @Description: 
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>运行环境：{{`NODE_ENV___${NODE_ENV}`}}</div>
    <div>接口地址：{{`VUE_APP_URL___${VUE_APP_URL}`}}</div>
    
  </div>
</template>

<script>
export default {
  name: "main",
  props: {
    msg: String
  },
  data() {
    return {
      NODE_ENV: '',
      VUE_APP_URL: '',
    }
  },
  mounted() {
    this.NODE_ENV = process.env.NODE_ENV
    this.VUE_APP_URL = process.env.VUE_APP_URL
    console.log(this.msg)
    console.log(`NODE_ENV---${process.env.NODE_ENV}-----${process.env.VUE_APP_URL}`)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
