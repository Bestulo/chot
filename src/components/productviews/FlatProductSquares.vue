<template lang="pug">
	v-app#inspire
		MainToolbar
		MainNavDrawer
		v-content
			ViewSelector
			// v-container(fluid grid-list-xl)
			// 	v-layout(wrap justify-start align-start)
			// 		v-flex(v-for="product in productos" :key="product.id" xs12 sm6 md3)
			// 			FlatProductCard(:product="product")
			v-container(fluid grid-list-xl)
				v-layout(wrap justify-center align-start)
					v-flex(v-for="product in productos" :key="product.id" xs12 sm6 md3)
						FlatProductCard(:product="product")
</template>

<script>

import productos from '@/assets/productos.json'
import FlatProductCard from '@/components/productcards/FlatProductCard'
import MainToolbar from '@/components/menus/MainToolbar'
import ViewSelector from '@/components/menus/ViewSelector'
import MainNavDrawer from '@/components/menus/MainNavDrawer'
import ProductSquares from '@/components/productviews/ProductSquares'

export default {
	data () {
		return {
			productos: productos.map(p => ({
				id: p["Código del producto"],
				image: p["Imagen"] || 'https://i.imgur.com/6qBJeQW.jpg',
				name: p["Producto"]
			}))
		}
	},
	components: {
		FlatProductCard,
		MainToolbar,
		MainNavDrawer,
		ProductSquares,
		ViewSelector
	}
}
</script>
