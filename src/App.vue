<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" fixed app>
			<v-toolbar flat color="tarnsparent">
				<v-toolbar-title>Application</v-toolbar-title>
			</v-toolbar>

			<v-divider></v-divider>

			<v-list>
				<v-list-tile v-for="item in items" :key="item.title" :to="item.to">
					<v-list-tile-avatar>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-avatar>
					<v-list-tile-content>
						<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar flat>
			<v-toolbar-side-icon @click="drawer = !drawer" />
			<v-toolbar-title>Title</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items class="option_menu">
				<v-btn icon>
					<v-icon>mdi-magnify</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-apps</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-refresh</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-dots-vertical</v-icon>
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>

		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	components: {},

	data() {
		return {
			drawer: false,
			items: [
				{ title: 'home', icon: 'mdi-alert', to: '/' },
				{ title: 'about', icon: 'mdi-alert-box', to: '/about' },
				{ title: 'about2', icon: 'mdi-alert-circle', to: '/about2' },
			],
		};
	},
	methods: {
		//
	},
};
</script>
