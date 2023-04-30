<template>
    <NuxtLayout name="admin">
        <div @click="increase">
            I am something {{ number }}
        </div>
    </NuxtLayout>
</template>

<script setup>
const { number, increase } = useNumber()
</script>