<!--
 * @Autor: 李建鹏
 * @Date: 2021-05-19 15:33:26
 * @LastEditTime: 2022-04-17 17:23:07
 * @Description: 
-->
<template>
  <div class="home">
    <mainComponent msg="PROJECT-A 项目" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import mainComponent from "@/components/main.vue";

export default {
  name: "A-Home",
  components: {
    mainComponent
  },
  data () {
    return {}
  },
  mounted () {}
};
</script>

<style scoped>

</style>
