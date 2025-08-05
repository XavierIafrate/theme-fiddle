<template>
    <button>{{ buttonText }}</button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    buttonText: {
        type: String,
        default: 'Button',
    }
})

</script>

<style scoped>
button {
    padding: 5px 8px;
    border: solid var(--primary-600) var(--border-width);
    background-color: var(--primary-200);
    color: var(--primary-600);
    border-radius: var(--border-radius);
    transition: all 0.1s ease;
}

button:hover {
    background-color: var(--primary-100);
    cursor: pointer;
}

button:active {
    background-color: var(--primary-600);
    color: var(--primary-200);
    cursor: pointer;
}
</style>