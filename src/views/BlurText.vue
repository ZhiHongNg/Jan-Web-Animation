<template>
    <div class="container">
        <h1 :class="{'active':animationActive}" @click="animationActive=!animationActive">
            <span>M</span>
            <span>I</span>
            <span>L</span>
            <span>E</span>
            <span>T</span>
        </h1>
    </div>
</template>

<script setup>
import {ref} from "vue";

const title = ref('Jan-Animation')
const animationActive = ref(false)
setTimeout(() => animationActive.value = true, 3000)
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
