import { createApp } from 'vue'
import App from './App.vue'
const VueScrollTo = require('vue-scrollto')

createApp(App).use(VueScrollTo, {
                    container: "body",
                    duration: 300,
                    easing: "linear",
                    offset: -100,
                    force: true,
                    cancelable: true,
                    onStart: false,
                    onDone: false,
                    onCancel: false,
                    x: false,
                    y: true
                }).mount('#app')
