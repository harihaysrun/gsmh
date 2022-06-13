import { createApp } from 'vue'
import App from './App.vue'
const VueScrollTo = require('vue-scrollto')
import store from './store';

const app = createApp(App);
app.use(store);
app.use(VueScrollTo, {
            container: "body",
            duration: 300,
            easing: "linear",
            offset: -50,
            force: true,
            cancelable: true,
            onStart: false,
            onDone: false,
            onCancel: false,
            x: false,
            y: true
        });
app.mount('#app')
