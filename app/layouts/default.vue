<script setup lang="ts"></script>

<template>
    <div>
        <TopBar />
        <Header />
        <slot />
    </div>
</template>

<script setup>
import TopBar from '~/components/TopBar.vue'
import Header from '~/components/Header.vue'
</script>