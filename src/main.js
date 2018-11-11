import Vue from 'vue'
import router from './routes/main.route.js'
import App from './App.vue'
import axios from 'axios'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app');