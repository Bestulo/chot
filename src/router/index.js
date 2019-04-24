import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Test from '@/components/Test'
// import listTest from '@/components/listTest'

import RouterTest from '@/components/RouterTest'
import Home from '@/components/Home' 
import ProductSquares from '@/components/productviews/ProductSquares.vue'
import FlatProductSquares from '@/components/productviews/FlatProductSquares.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path:'/test',
			name: 'Test',
			component: RouterTest
		},
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/raised',
			name: 'Raised Product Cards',
			component: ProductSquares
		},
		{
			path: '/flat',
			name: 'Flat Product Cards',
			component: FlatProductSquares
		}
	]
})
