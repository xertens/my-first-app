<template>
    <NuxtLayout>
        <div p-2 bg-blue-100 rounded-2xl @click="increase">Hello World!</div>
        {{ number }} - {{ doubled }}
        <NuxtLink to="/about">About</NuxtLink>
    </NuxtLayout>
</template>

<script setup>
const { number, increase } = useNumber()
const doubled = computed(() => number.value * 2)
// something
</script>