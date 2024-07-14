import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import { BootstrapVue } from 'bootstrap-vue';

// Import BootstrapVue styles (assuming you're using SCSS)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);

// Register BootstrapVue globally
// app.use(BootstrapVue);

app.use(router);
app.mount('#app');
