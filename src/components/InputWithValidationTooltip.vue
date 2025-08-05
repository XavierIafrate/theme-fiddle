<template>
    <div>

    <input 
        ref="inputRef"
        type="text"
        v-model="textValue"
        @keyup="handleTooltip"
        @mouseenter="handleTooltip"
        @focus="handleTooltip"
        @mouseleave="ensureTooltipHides"
        @blur="ensureTooltipHides"></input>
        <!-- <p>{{ showTooltip }}</p> -->
    <!-- <ValidationTooltip 
        :show="showTooltip"
        :broken-rules="['Never talk about fight club', 'See rule 1']" 
        :trigger-ref="inputRef"
         /> -->
         <ValidationTooltipIncUnbroken
            :show="showTooltip"
            :rules="[{
                text: 'Never talk about fight club',
                broken: true,
            },
            {
                text: 'See rule 1',
                broken: false,
            }]" 
            :trigger-ref="inputRef" />
    </div>

</template> 

<script setup lang="ts">
import { ref } from 'vue';
import ValidationTooltip from './ValidationTooltip.vue';
import ValidationTooltipIncUnbroken from './ValidationTooltipIncUnbroken.vue';

const textValue = ref('test')
const inputRef = ref(null);
function isValid() {
    return textValue.value != 'test';
}

const showTooltip = ref(false);

function handleTooltip() {
    if(!isValid()) {
        showTooltip.value = true;
        return;
    }

    showTooltip.value = false;
}

function ensureTooltipHides() {
    showTooltip.value = false;
}

</script>