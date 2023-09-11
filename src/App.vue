<template>
    <div class="bg">
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style>

#app {
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
