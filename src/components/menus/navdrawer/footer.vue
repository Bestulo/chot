<template lang="pug">
	// div
	// 	v-divider
	// 	div
	// 		.container
	// 			div
	// 				h5.text-center.subheading.font-weight-light.ml-3 Síguenos
	// 				v-btn(icon dark).blue.lighten-1
	// 					v-icon mdi-twitter
	// 				v-btn(icon dark).pink.darken-1
	// 					v-icon mdi-instagram
	// 			div
	// 				h5.text-center.subheading.font-weight-light.ml-3 Háblanos
	// 				v-btn(icon dark).green
	// 					v-icon mdi-whatsapp
	// 				v-btn(icon dark).blue.lighten-1
	// 					v-icon mdi-telegram
	div
		v-divider
		v-layout(row justify-space-around align-center mx-2 mt-3)
			h5.subheading.font-weight-light Síguenos
			h5.subheading.font-weight-light Háblanos
		v-layout(row justify-space-around align-center mb-3)
			span
				v-btn(icon dark).blue.lighten-1
					v-icon mdi-twitter
				v-btn(icon dark).pink.darken-1
					v-icon mdi-instagram
				v-btn(icon dark).green.lighten-1
					v-icon mdi-whatsapp
				v-btn(icon dark).blue.lighten-1
					v-icon mdi-telegram
</template>

<style lang="stylus" scoped>

.container 
	display:flex

</style>
