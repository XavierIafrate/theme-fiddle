<template>
    <div class="theme-editor-container">
        <h4>Theme</h4>
        <table class="variable-table">
              <thead>
                <tr>
                    <td>Variable</td>
                    <td>Value</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in variables">
                    <td class="variable-key">{{ item.key }}</td>
                    <td class="variable-value"><div class="colour-pip" :style="{ 'background-color': item.value }"></div>{{ item.value }}</td>
                </tr>
            </tbody>
        </table>
        
        <div>Selected: {{ selected }}</div>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>Light</option>
            <option>Dark</option>
            <option>Protanopia</option>
            <option>Tritanopia</option>
            <option>Achromatopsia</option>
        </select>
    </div>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue';
    import { resolveTheme, applyTheme } from '@/ui/theme';
    
    let selected = ref('');

    const stored = localStorage.getItem('theme-info');
    const variableObject = JSON.parse(stored);
    const variables = ref([]);

    Object.entries(variableObject).forEach(([name, value] : [string, string]) => {
        variables.value.push({ key: name, value: value });
    });

    watch(selected, () => {
        console.log(selected.value)
        let theme = resolveTheme(selected.value);
        if(theme) {
            applyTheme(theme);
        }
    })
</script>

<style scoped>
.theme-editor-container {
    padding: 12px 20px;
    background-color: black;
    color: white;
    border-radius: 8px;
    border: 2px solid dodgerblue;
    z-index: 1000;
    font-size: 8px;
    position: sticky;
    right: 0;
    bottom: 0;
    margin-left: auto;
    width:max-content;
}

h4 {
    font-size: large;
}

.variable-table {
    display: block;
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 5px;
}

.variable-table thead {
    position: sticky;
    top: 0;
    background-color: black;
    font-weight: bold;
}

.variable-value, .variable-key {
    padding: 2px;
    font-family: 'Courier New', Courier, monospace;
}

.variable-value * {
    display: inline-flex;
}

.colour-pip {
    height: 12px;
    aspect-ratio: 1;
    border: 1px solid white;
    border-radius: 100%;
}
</style>