<template>
  <div class="container">
    <h1 :class="{'active':animationActive}" :v-attr>
      <span v-for="(char,index) in charArray" :key="index">{{ char }}</span>
    </h1>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const props = defineProps({
  text: {
    required: true,
  }
})
const charArray = ref([])
const animationActive = ref(false)

onMounted(() => {
  for (let i = 0; i < props.text.length; i++) {
    charArray.value.push(props.text.charAt(i));
  }
  setTimeout(()=>animationActive.value = true,500)
})


</script>

<style lang="scss" scoped>
h1 {
  color: white;
  font-weight: 300;
  font-size: 28px;
  letter-spacing: 1.4rem;

  span {
    display: inline-block;
    vertical-align: baseline;
    transform: translateX(-20px);
    opacity: 0;
    filter: blur(3px);
    transition: transform 1.5s cubic-bezier(0.23, 0.93, 0.5, 1),
    opacity 1.5s cubic-bezier(0.23, 0.93, 0.5, 1),
    filter 1.5s cubic-bezier(0.23, 0.93, 0.5, 1);

    @for $i from 1 through 50 {
      &:nth-child(#{$i}) {
        transition-delay: $i * 0.15s;
      }
    }
  }

  &.active span {
    transform: translateX(0);
    opacity: 1;
    filter: blur(0);
  }
}
</style>
