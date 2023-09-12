<template>
    <swiper class="mySwiper" direction="vertical" :loop="true" :free-mode="true">
      <swiper-slide >
        <BlurText text="milet"/>
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>

</template>
<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import BlurText from "@/conponents/BlurText";

</script>
<style scoped lang="scss">

.swiper {
  width: 100vw;
  height: 100vh;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
