<template>
<button class="container" @click.prevent="handleClick" :class="isActive ? 'active' : 'inactive'">
    <div class="pip" :class="isActive ? 'moon' : 'sun'">
        <div class="crescent-mask" :class="isActive ? 'active' : 'inactive'"></div>
    </div>
</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Colours } from '@/ui/colours';

const isActive = ref(false);

function handleClick() {
    if(isActive.value) {
        isActive.value = false;
        emit('valueChanged', 'Light');
        return;
    }
    isActive.value = true;
    emit('valueChanged', 'Dark');

}

const emit = defineEmits(['valueChanged'])
</script>

<style scoped>
.container {
    width: 35px;
    height: 20px;
    border-radius: 10px;
    border: solid 2px v-bind(Colours.Grey[600]);
    cursor: pointer;
    background-color: v-bind(Colours.Blue[300]);
    transition: all .2s ease-in-out;
}

.pip {
    position:relative;
    left: 2px;
    height: 12px;
    width: 12px;
    border: 1px solid v-bind(Colours.Yellow[400]);
    border-radius: 50%;
    pointer-events: none;
    transition: all .2s ease-in-out;
    background-color: v-bind(Colours.Yellow[300]);

}

.active {
    background-color: v-bind(Colours.Blue[950]) !important;
    scale: 1 !important;
}

.moon {
    left: calc(100% - 12px - 2px);
    background-color: v-bind(Colours.Yellow[500]);
    border-color: v-bind(Colours.Yellow[500]);
    border-radius: 50%;
}

.crescent-mask {
    height: calc(90% + 2px);
    width: calc(90% + 2px);
    position:relative;
    border: 1px solid v-bind(Colours.Blue[950]);
    scale: 0;
    top: -2px;
    left: -2px;
    border-radius: 50%;
    background-color:transparent;
    transition: all .2s ease;
}
</style>