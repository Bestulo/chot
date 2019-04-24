<template lang="pug">
	// v-layout(row='' style='margin: 120px auto auto 270px')
	// 	v-flex(xs12='' sm6='' offset-sm3='')
	v-layout(row style='margin: 120px auto auto 270px')
		v-flex(xs12 sm6 offset-sm3)
			v-card
				v-list
					v-list-group
						template(v-slot:activator="")
							v-list-tile
								v-list-tile-content
									v-list-tile-title Serendipity
						v-list-tile
							v-list-tile-content
								v-list-tile-title Comamos cositas lindas
						v-list-tile
							v-list-tile-content
								v-list-tile-title Holisss
			// v-card
			// 	v-toolbar(color='teal' dark='')
			// 		v-toolbar-side-icon
			// 		v-toolbar-title Topics
			// 		v-spacer
			// 		v-btn(icon='')
			// 			v-icon more_vert
			// 	v-list
			// 		v-list-group(v-for='item in items' :key='item.title' v-model='item.active' :prepend-icon='item.action' no-action='')
			// 			template(v-slot:activator='')
			// 				v-list-tile
			// 					v-list-tile-content
			// 						v-list-tile-title {{ item.title }}
			// 			v-list-tile(v-for='subItem in item.items' :key='subItem.title' @click='')
			// 				v-list-tile-content
			// 					v-list-tile-title {{ subItem.title }}
			// 				v-list-tile-action
			// 					v-icon {{ subItem.action }}
</template>

<script>
import logoImg from '@/assets/logo-original.png'
import cutechoco from '@/assets/cutechoco.jpg'
import Footer from '@/components/navdrawer/footer'
import productos from '@/assets/productos.json'

export default {
	data () {
		return {
			items: [{
				action: 'local_activity',
				title: 'Attractions',
				items: [
					{ title: 'List Item' }
				]
			},
			{
				action: 'restaurant',
				title: 'Dining',
				active: true,
				items: [
					{ title: 'Breakfast & brunch' },
					{ title: 'New American' },
					{ title: 'Sushi' }
				]
			},
			{
				action: 'school',
				title: 'Education',
				items: [
					{ title: 'List Item' }
				]
			},
			{
				action: 'directions_run',
				title: 'Family',
				items: [
					{ title: 'List Item' }
				]
			},
			{
				action: 'healing',
				title: 'Health',
				items: [
					{ title: 'List Item' }
				]
			},
			{
				action: 'content_cut',
				title: 'Office',
				items: [
					{ title: 'List Item' }
				]
			},
			{
				action: 'local_offer',
				title: 'Promotions',
				items: [
					{ title: 'List Item' }
				]
			}]
		}
	},
}

</script>
