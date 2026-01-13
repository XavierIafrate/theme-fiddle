import { createApp } from 'vue'
import App from './App.vue'
import { loadTheme } from './ui/theme';

loadTheme();

createApp(App).mount('#app')
