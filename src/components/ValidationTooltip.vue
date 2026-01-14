<template>
    <Teleport to="body">
        <Transition 
        name="tooltip"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
        @leave="onLeave">
            <div
                v-if="isVisible" 
                class="container"    
                ref="tooltipRef"     
                :style="{
                    position: 'fixed',
                    top: position.top + 'px',
                    left: position.left + 'px',
                    zIndex: 99999
                }">
                <p class="tooltip-title">Validation Errors</p>
                <ul>
                    <li class="broken-rule" v-for="brokenRule in brokenRules" :key="brokenRule">
                        <p>- {{ brokenRule }}</p>
                    </li>
                </ul>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, nextTick } from 'vue'


const props = defineProps({
    brokenRules: {
        type: Array<string>,
        required: true,
    },
    show: {
        type: Boolean,
        required: true,
    },
    triggerRef: {
        type: HTMLElement,
        required: true,
    }
});

const isVisible = ref(false)
const tooltipRef = ref(null)
const position = ref({ top: 0, left: 0 })

const showTooltip = () => {
  isVisible.value = true
  nextTick(() => {
    calculatePosition();
});
}

const hideTooltip = () => {
  isVisible.value = false
}

watch(() => props.show, (newValue, oldValue) => {
    if(newValue) {
        showTooltip();
    }
    else {
        hideTooltip();
    }
})

const calculatePosition = () => {
  if (!tooltipRef.value || !props.triggerRef) return;

  const triggerRect = props.triggerRef.getBoundingClientRect()
  const tooltipRect = tooltipRef.value.getBoundingClientRect()

  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  
  let top = triggerRect.bottom + 8 // Default: below trigger
  let left = triggerRect.left
  
  // Check if tooltip would overflow viewport
  if (left + tooltipRect.width > viewport.width) {
    left = triggerRect.right - tooltipRect.width
  }
  
  if (top + tooltipRect.height > viewport.height) {
    top = triggerRect.top - tooltipRect.height - 8 // Show above
  }
  
  position.value = { top, left }
}

// Transition hooks for better control
const onBeforeEnter = (el) => {
  // Set initial state
  el.style.opacity = '0'
  el.style.transform = 'scale(0.9) translateY(-8px)'
}

const onEnter = async (el, done) => {
  // Ensure positioning is calculated before animation
  await calculatePosition()
  
  // Force reflow
  el.offsetHeight
  
  // Animate to final state
  el.style.transition = 'all 0.2s ease-out'
  el.style.opacity = '1'
  el.style.transform = 'scale(1) translateY(0)'
  
  // Call done when transition completes
  setTimeout(done, 200)
}

const onLeave = (el, done) => {
  el.style.transition = 'all 0.15s ease-in'
  el.style.opacity = '0'
  el.style.transform = 'scale(0.9) translateY(-4px)'
  
  setTimeout(done, 150)
}

</script>

<style scoped>
.container {
    padding: 8px 12px;
    border: solid var(--colour-red) var(--colour-red);
    background-color: var(--colour-red);
    color: var(--colour-red);
    border-radius: var(--border-radius);
}

.tooltip-title {
    font-size: 16px;
    font-weight: bold;
}

.broken-rule {
    font-size: 12px;
    font-weight: normal;
}

.container ul {
    list-style: none;
    padding: 4px 8px;
}

/* Transitions */ 
/* Fade + Scale Animation */
.tooltip-enter-active {
  transition: all 0.2s ease-out;
}

.tooltip-leave-active {
  transition: all 0.15s ease-in;
}

.tooltip-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-8px);
}

.tooltip-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-4px);
}
</style>