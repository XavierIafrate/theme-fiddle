<script setup lang="ts">
import BaseButton from "./components/buttons/BaseButton.vue"
import BaseCallout from "./components/callouts/BaseCallout.vue";
import ThemeButton from "./components/ThemeButton.vue";
import { ITheme, LightTheme, resolveTheme } from "./ui/theme"
import { UIConfig } from "./ui/ui";
import InputWithValidationTooltip from './components/InputWithValidationTooltip.vue';

const handleThemeChange = (selectedTheme) => {
  let theme = resolveTheme(selectedTheme);
  setTheme(theme);
}

const setTheme = (theme : ITheme) => {
  const root = document.documentElement;

  for (const shade in theme.Primary) {
    root.style.setProperty('--primary-' + shade, theme.Primary[shade]);
  }

  for (const shade in theme.Neutral) {
    root.style.setProperty('--neutral-' + shade, theme.Neutral[shade]);
  }

  for (const shade in theme.Error) {
    root.style.setProperty('--error-' + shade, theme.Error[shade]);
  }

  for (const shade in theme.Success) {
    root.style.setProperty('--success-' + shade, theme.Success[shade]);
  }


  root.style.setProperty('--bg-primary', theme.BackgroundPrimary);
  root.style.setProperty('--bg-secondary', theme.BackgroundSecondary);
  root.style.setProperty('--text-primary', theme.TextPrimary);
  root.style.setProperty('--text-secondary', theme.TextSecondary);
  root.style.setProperty('--text-muted', theme.TextFaded);
}

const setUIDefaults = () => {
  const root = document.documentElement;
  root.style.setProperty('--border-radius', UIConfig.BorderRadius);
  root.style.setProperty('--border-width', UIConfig.BorderWidth);
};

setTheme(new LightTheme());

setUIDefaults();

</script>

<template>
  <div class="app-container">
    <ThemeButton @valueChanged="handleThemeChange"></ThemeButton>
    <div class="button-container">
      <BaseButton></BaseButton>
    </div>  
    <div class="callout-container">
    <BaseCallout></BaseCallout>

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
  </div>
</template>

<style scoped>
.app-container {
  padding: 10%;
  background-color: var(--bg-primary);
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
  color: var(--text-primary);
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

</style>
