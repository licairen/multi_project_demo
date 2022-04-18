<!--
 * @Autor: 李建鹏
 * @Date: 2021-05-19 15:33:26
 * @LastEditTime: 2022-04-17 17:21:45
 * @Description: 
-->
<template>
  <div class="home">
    <mainComponent msg="PROJECT-Demo 项目" />
  </div>
</template>

<script>
import mainComponent from "@/components/main.vue";

export default {
  name: "Demo-Home",
  components: {
    mainComponent,
  },
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped></style>
