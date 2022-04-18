<!--
 * @Autor: 李建鹏
 * @Date: 2022-04-14 16:07:54
 * @LastEditTime: 2022-04-17 17:26:02
 * @Description: 
-->
<template>
  <div class="home">
    <mainComponent msg="PROJECT-C 项目" />
  </div>
</template>

<script>
import mainComponent from "@/components/main.vue";

export default {
  name: "C-Home",
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
