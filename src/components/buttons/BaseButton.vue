<template>
    <button class="button accessibility-pattern-dots">{{ buttonText }}</button>
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
.button {
    padding: 5px 8px;
    border: solid var(--colour-primary) var(--border-width);
    background-color: var(--colour-primary-faded);
    color: var(--colour-primary);
    border-radius: var(--border-radius);
    transition: all 0.1s ease;
}

.button:hover {
    background-color: var(--colour-primary);
    cursor: pointer;
}

.button:active {
    background-color: var(--colour-primary-dark);
    color: var(--text-normal);
    cursor: pointer;
}
</style>