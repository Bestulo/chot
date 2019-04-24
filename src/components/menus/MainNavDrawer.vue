/* eslint disable */

<template lang="pug">
	-
		const navClasses = [
			"primary",
			"lighten-2",
			// "darken-2",
			"hiden-sm-and-down"
		]

	v-navigation-drawer#MainNavDrawer(
		class = navClasses
		app
		fixed
		mobile-break-point=600
		width=230
		style="display:flex;flex-direction:column;")
		// v-img(:aspect-ratio='16/9' :src='cutechoco')
		// 	v-layout.lightbox.white--text(pa-2='' column='' fill-height='')
		// 		v-spacer
		// 		v-flex(shrink='')
		// 			.subheading some name :)
		// 			.body-1 body text goes here
		v-img(:aspect-ratio="1/1" :src="cutechoco" fluid style="max-height:280px")
			v-layout(pa-2 column align-center justify-center fill-height).lightbox
				v-spacer
				v-flex(shrink='')
					#chocologo.display-1.text-xs-center(style="position:relative;top:5px;right:5px") chot
		v-divider
		v-list(dense='' class="pt-0")
			v-list-tile(
				v-for="item in hiddenItems"
				:key="item.title"
				v-ripple=''
				@click="setRoute(item.path, $event)").hidden-sm-and-up
				v-list-tile-action
					v-icon {{ item.icon }}
				v-list-tile-content
					v-list-tile-title {{ item.title }}
			v-list-tile(
				v-for="item in items"
				:key="item.title"
				v-ripple=''
				@click="setRoute(item.path, $event)")
				v-list-tile-action
					v-icon {{ item.icon }}
				v-list-tile-content
					v-list-tile-title {{ item.title }}
			v-divider
				v-list-tile(
					v-for="productList, category in categorizedProducts"
					:key="category")
					v-list-tile-content
						v-list-tile-title {{ category }}
			// v-list-group(
			// 	v-for="k,v in {k:'v',b:'a'}")
			// 	template(v-slot:activator="")
			// 		v-list-tile
			// 			v-list-tile-content
			// 				v-list-tile-title {{ k }}
			// 	v-list-tile(v-for="num in [1,2,3,4]")
			// 		v-list-tile-content
			// 			v-list-title {{ v }}
			// v-list-group
			// 	template(v-slot:activator="")
			// 		v-list-tile
			// 			v-list-tile-content
			// 				v-list-tile-title Serendipity
			// 	v-list-tile
			// 		v-list-tile-content
			// 			v-list-tile-title Comamos cositas lindas
			// 	v-list-tile
			// 		v-list-tile-content
			// 			v-list-tile-title Holisss
				
			// v-list-group
			// 	v-list-tile(v-for="(productList, category) in categorizedProducts")
			// 		v-list-tile-title {{ category }}
				// div(v-for="(productList, category) in categorizedProducts")
				// 	p {{ category }}
					// v-list-tile(v-slot:activator='')
					// 	v-list-tile-title {{ category }}
					// v-list-tile(v-for="product in productList")
					// 	v-list-tile-title(v-text="product.name")

				// do stuff here with activators like this https://vuetifyjs.com/en/components/navigation-drawers#nested-lists
				// Maybe make Productos open the product section, where we would have Cacao -> Semillas / Otros | Chocolate -> This / That | etc.
		v-spacer
		Footer
</template>

<script>
import logoImg from '@/assets/logo-original.png'
import cutechoco from '@/assets/cutechoco.jpg'
import Footer from '@/components/menus/navdrawer/footer'
import productos from '@/assets/productos.json'

export default {
	data () {
		return {
			cutechoco,
			items: [
				{ path: '/life', title: 'Mis favoritos', icon: 'mdi-heart' },
				{ path: '/carrito', title: 'Mi carrito', icon: 'mdi-cart'},
				{ path: '/catalogo', title: 'Catálogo', icon: 'mdi-view-headline' },
				{ path: '/productos', title: 'Productos', icon: 'mdi-view-comfy'}
			],
			hiddenItems:[
				{ path: '/contactanos', title: 'Contáctanos', icon: 'mdi-email-outline' },
				{ path: '/carrito', title: 'Tu Carrito', icon: 'mdi-cart-outline' }
			],
			right: null,
			mini: false,
			smaller: window.innerWidth <= 600,
			categorizedProducts: getProducts()
		}
	},
	components: {
		Footer
	},
	created () {
		handleResize()
	},
	methods: {
		setRoute (a, evt) {
			this.$router.push(a)
		}
	}
}

const getProducts = () => productos.reduce(((finalObj, prodObj) => {
	if (finalObj[prodObj["Categoría"]]) {
		finalObj[prodObj["Categoría"]].push({
			id: prodObj["Código del producto"],
			name: prodObj["Producto"]
		})
	} else {
		finalObj[prodObj["Categoría"]] = [{
			id: prodObj["Código del producto"],
			name: prodObj["Producto"]
		}]
	}
	return finalObj
}), {})

// const categories = productos.reduce((arr, obj) =>
// 	arr.indexOf(obj["Categoría"]) === -1 ? arr.concat(obj["Categoría"]) : arr, []);

window.addEventListener('resize', this.handleResize)
const handleResize = () => {
	this.smaller = window.innerWidth <= 600
}

</script>

<style lang="stylus">

#chocologo
	font-family: 'Luckiest Guy', cursive !important

</style>
