// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
	iconfont: 'mdi',
	theme: {
		primary: '#DD7230',
		secondary: '#2F3061',
		accent: '#5F5980',
		error: '#D72638',
		info: '#0E34A0',
		success: '#53AA65',
		warning: '#E8C547'
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: { App },
	template: '<App/>'
})
