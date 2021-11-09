import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
