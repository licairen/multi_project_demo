<!--
 * @Autor: 李建鹏
 * @Date: 2022-04-14 16:07:52
 * @LastEditTime: 2022-04-18 18:15:40
 * @Description: 
-->
<template>
  <div class="home">
    <mainComponent msg="PROJECT-B 项目" />
  </div>
</template>

<script>
// @ is an alias to /src
import mainComponent from "@/components/main.vue";

export default {
  name: "B-Home",
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
