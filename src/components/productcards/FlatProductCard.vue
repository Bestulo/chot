<template lang="pug">
	v-layout(align-center)
		v-flex(xs12)(flat)
			v-hover
				v-card.MeinCard(flat slot-scope="{ hover }" :class="`elevation-${hover ? 8 : 1}`" @click="setRoute(`product/${product.id}`)")
					v-img(:src="product.image" fluid :aspect-ratio="4/3").pImage
						v-expand-transition
							.d-flex.transition-fast-in-fast-out.primary.v-card--reveal.display-3.white--text(v-if='hover' style='height: 30%;')
								// | Ver
								v-btn.primary(dark flat small) Ver Detalles
					v-card-text.text-truncate.subheading.font-weight-light.text-xs-center.pName {{ product.name }}
					// v-card-text.text-truncate.body-2.font-weight-light.text-xs-center.pPrice.secondary--text $12.7

</template>

<style lang="stylus">

.MeinCard
	cursor: pointer

.pPrice
	margin-top:-20px

.pImage
	margin-bottom: 10px

.v-card--reveal
	align-items: center;
	bottom: 0;
	justify-content: center;
	opacity: .6;
	position: absolute;
	width: 100%;

</style>

<script>

export default {
	name: "FlatProductCard",
	props: {
		product: Object
	},
	methods: {
		setRoute (a) {
			this.$router.push(a)
		}
	}
}

</script>
