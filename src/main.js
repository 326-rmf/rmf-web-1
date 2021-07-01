import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import waves from './components/waves.vue'
import 'font-awesome/scss/font-awesome.scss'
import Element from 'element-ui'
import './assets/theme.scss'
import iconttf from'./assets/element-icons.ttf'
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(iconttf)
Vue.component("waves",waves)
new Vue({
	
	router,
	render: h => h(App)
}).$mount('#app')
