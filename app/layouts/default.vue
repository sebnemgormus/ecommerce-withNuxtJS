<script setup lang="ts"></script>

<template>
    <div>
        <TopBar />
        <Header />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
import TopBar from '~/components/TopBar.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>