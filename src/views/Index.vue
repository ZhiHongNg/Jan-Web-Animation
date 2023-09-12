<template>
  <div class="bg">
    <SwiperContainer/>
  </div>

</template>

<script setup>

import BlurText from "@/conponents/BlurText.vue";
import SwiperContainer from "@/conponents/SwiperContainer.vue"; // 修改为正确的路径
</script>

<style scoped lang="scss">
.bg{
  background: url('/src/assets/bg_op.jpg')  center center no-repeat;
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  transition: opacity 3s cubic-bezier(0.5, 1, 0.89, 1) 2.5s;
}
</style>