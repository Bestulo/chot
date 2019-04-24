<template lang="pug">
	v-toolbar(flat)
		v-spacer
		v-toolbar-items.hidden-xs-only
			v-btn(flat to="/")
				v-icon(left) mdi-home-outline
				| Home
			v-btn(flat to="flat")
				v-icon(left color="grey") mdi-square
				| Flat
			v-btn(flat to="raised")
				v-icon(left) mdi-square-outline
				| Shadowy
			v-btn(flat to="list")
				v-icon(left) mdi-view-headline
				| List

		// v-toolbar-side-icon#Hamburger.hidden-sm-and-up // 	hamburger
		// v-spacer
		// v-toolbar-items.hidden-xs-only
		//   // Default icons before md
		//   v-btn(flat) Productos
		//   v-btn(flat) Vender

		//   // Icons md and up
		//   v-btn(flat).hidden-sm-and-down
		//     v-icon(left) mdi-email-outline
		//     | Contáctanos
		//   v-btn(flat).hidden-sm-and-down
		//     v-icon(left) mdi-cart-outline
		//     | Tu carrito

		//   // Icons sm and down
		//   v-btn(flat icon).hidden-md-and-up
		//     v-icon(dark) mdi-email-outline
		//   v-btn(flat icon).hidden-md-and-up
		//     v-icon(dark) mdi-cart-outline

</template>

<style lang="stylus">
	
</style>
