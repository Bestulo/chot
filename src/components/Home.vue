<template lang="pug">
	v-content
		// Banner
		// Banner
		// Banner
		// Banner
		v-app#inspire
			MainToolbar
			ViewSelector
			MainNavDrawer
			v-container(fluid='' grid-list-sm='')
				v-layout(row='' wrap='')
					v-flex(d-flex='' xs12='' order-xs5='')
						v-layout(column='')
							v-flex(d-flex='')
								v-card(color='blue-grey' dark='' tile='' flat='')
									v-card-text {{ lorem }}
							v-flex(d-flex='')
								v-card(color='brown' dark='' tile='' flat='')
									v-card-text {{ lorem }}
					v-flex(d-flex='' xs12='' sm7='')
						v-layout(row='' wrap='')
							v-flex(d-flex='')
								v-card(color='indigo lighten-2' dark='' tile='' flat='')
									v-card-text {{ lorem.slice(0, 70) }}
							v-flex(d-flex='')
								v-layout(row='')
									v-flex(v-for='n in 2' :key='n' d-flex='')
										v-card(color='amber lighten-2' tile='' flat='')
											v-card-text {{ lorem.slice(0, 40) }}
					v-flex(d-flex='' xs12='' sm2='' child-flex='')
						v-card(color='orange lighten-2' tile='' flat='')
							v-card-text {{ lorem.slice(0, 90) }}
					v-flex(d-flex='' xs12='' sm3='')
						v-card(color='red lighten-2' dark='' tile='' flat='')
							v-card-text {{ lorem.slice(0, 100) }}


		// v-container(grid-list-md text-xs-center)
		// 	v-layout(row wrap)
		// 		v-flex(xs12)
		// 			v-card(dark color="primary")
		// 				v-card-text(class="px-0") 12
		// v-card(img="https://i.imgur.com/v7cphp0.jpg")
</template>

<script>

import MainToolbar from '@/components/menus/MainToolbar'
import ViewSelector from '@/components/menus/ViewSelector'
import MainNavDrawer from '@/components/menus/MainNavDrawer'
import ProductSquares from '@/components/productviews/ProductSquares'

export default {
	data () {
		return {
			lorem: "Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos."
		}
	},
	components: {
		MainToolbar,
		MainNavDrawer,
		ProductSquares,
		ViewSelector
	}
}

</script>
