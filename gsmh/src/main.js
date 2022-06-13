import { createApp } from 'vue'
import App from './App.vue'
const VueScrollTo = require('vue-scrollto')
// const VueScrollactive = require('vue-scrollactive')
// import VueScrollactive from 'vue-scrollactive';

// createApp(App).use(VueScrollactive)
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
