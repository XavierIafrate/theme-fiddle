<script setup lang="ts">
import BaseButton from "./components/buttons/BaseButton.vue"
import ThemeButton from "./components/ThemeButton.vue";
import { ITheme, resolveTheme, applyTheme } from "./ui/theme"
import { UIConfig } from "./ui/ui";
import InputWithValidationTooltip from './components/InputWithValidationTooltip.vue';
import ThemeEditor from "./components/ThemeEditor.vue";
import SuccessCallout from "./components/callouts/SuccessCallout.vue";
import ErrorCallout from "./components/callouts/ErrorCallout.vue";
import PrimaryCallout from "./components/callouts/PrimaryCallout.vue";
import AccentCallout from "./components/callouts/AccentCallout.vue";
import InfoCallout from "./components/callouts/InfoCallout.vue";
import WarningCallout from "./components/callouts/WarningCallout.vue";

const handleThemeChange = (selectedTheme : String) : void => {
  let theme : ITheme = resolveTheme(selectedTheme);
  applyTheme(theme);
}

const setCssProperty = (name: string, value: string) : void => {
  document.documentElement.style.setProperty(name, value);
  localStorage.setItem(`css-var-${name}`, value);
}

const setUIDefaults = () => {
  setCssProperty('--border-radius', UIConfig.BorderRadius);
  setCssProperty('--border-width', UIConfig.BorderWidth);
};

setUIDefaults();

</script>

<template>
  <div class="app-container">
    <ThemeButton @valueChanged="handleThemeChange"></ThemeButton>
    <div class="button-container">
      <BaseButton></BaseButton>
    </div>  
    <div class="callout-container">
    <ErrorCallout></ErrorCallout>
    <SuccessCallout></SuccessCallout>
    <PrimaryCallout></PrimaryCallout>
    <AccentCallout></AccentCallout>
    <InfoCallout></InfoCallout>
    <WarningCallout></WarningCallout>
    </div>

    <div class="text-container">
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>

    </div>
    <InputWithValidationTooltip></InputWithValidationTooltip>
    <ThemeEditor v-if="true"></ThemeEditor>
  </div>
</template>

<style scoped>
.app-container {
  padding: 10%;
  background-color: var(--colour-base-10);
  margin: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.3s ease;
}

.app-container > div {
  margin: 8px 16px;
}

</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
}

body {
  color: var(--text-normal);
}

/* .text-container {
  colour: 
} */

.text-container :nth-child(1) {
  font-size: 12px;
}

.text-container :nth-child(2) {
  font-size: 14px;
}

.text-container :nth-child(3) {
  font-size: 16px;
}

.text-container :nth-child(4) {
  font-size: 18px;
}

.text-container :nth-child(5) {
  font-size: 20px;
}

.text-container :nth-child(6) {
  font-size: 24px;
}

.text-container :nth-child(7) {
  font-size: 30px;
}

.callout-container * {
  margin: 5px;
}

</style>

<style>
  [data-accessibility-patterns-enabled="true"] .accessibility-pattern-dots { 
    background-image:var(--accessibility-pattern-dots);
    background-repeat: repeat; 
    background-color: var(--accessibility-pattern-dots-colour) !important;
    background-blend-mode: lighten;
  }

  [data-accessibility-patterns-enabled="true"] .accessibility-pattern-crosshatch { 
    background-image:var(--accessibility-pattern-crosshatch);
    background-repeat: repeat; 
    background-color: var(--accessibility-pattern-crosshatch-colour) !important;
    background-blend-mode: lighten;
  }

  [data-accessibility-patterns-enabled="true"] .accessibility-pattern-diagonal { 
    background-image:var(--accessibility-pattern-diagonal);
    background-repeat: repeat; 
    background-color: var(--accessibility-pattern-diagonal-colour) !important;
    background-blend-mode: lighten;
  }
</style>