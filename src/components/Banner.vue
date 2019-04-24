<template lang="pug">
	v-alert(value dismissible color="brown")
		.imgContainer
			v-img(
				:gradient="gradient"
				dark
				height="400"
				src="https://i.imgur.com/v7cphp0.jpg"
				dismissible=true)
		// v-container(fill-height='')
		//   v-layout(align-center='')
		//     v-flex(text-xs-center='')
		//       h3.display-3 Gradient over Image :)
</template>

<script>
export default {
	data () {
		return {
			gradient: 'to top right, rgba(116, 54, 38, 0.5), rgba(165, 156, 50, 0.1)'
		}
	}
}
</script>

<style lang="stylus">
	.imgContainer
		overflow:hidden;
		height:400px !important;
</style>
