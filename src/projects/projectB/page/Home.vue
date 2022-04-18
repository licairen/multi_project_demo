<!--
 * @Autor: 李建鹏
 * @Date: 2022-04-14 16:07:52
 * @LastEditTime: 2022-04-17 17:25:06
 * @Description: 
-->
<template>
  <div class="home">
    <mainComponent msg="PROJECT-b 项目" />
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
