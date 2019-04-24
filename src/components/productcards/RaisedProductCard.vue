<template lang="pug">
	v-hover
		v-card(slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 4}`")
			v-img(:src="product.image" :aspect-ratio="4/3" fluid)
			v-card-title.subheading.font-weight-light
				.text-truncate(style="text-align:center") {{ product.name }}
			v-card-actions
				v-spacer
				v-btn(icon)
					v-icon mdi-heart-outline
				v-btn(icon)
					v-icon mdi-cart-outline
				v-btn(icon)
					v-icon mdi-comment-outline

</template>

<script>

export default {
	name: "ProductCard",
	props: {
		product: Object
	}
}

</script>
