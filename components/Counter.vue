<template>
    <div>
        <div>
            Number: {{ number }} 
        </div>
        <br />
        <button @click="increase()">Increase</button>
    </div>
</template>

<script setup>
const props = defineProps(['number', 'increase'])
</script>