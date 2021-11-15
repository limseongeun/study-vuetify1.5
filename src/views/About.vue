<template>
	<v-list>
		<v-list-tile v-for="item in items" :key="item.title">
			<v-list-tile-avatar>
				<v-icon>{{ item.icon }}</v-icon>
			</v-list-tile-avatar>
			<v-list-tile-content>
				<v-list-tile-title>{{ item.title }}</v-list-tile-title>
			</v-list-tile-content>
			<!-- <v-list-tile-action>
				<v-btn><v-icon>mdi-alert-box</v-icon></v-btn>
			</v-list-tile-action> -->
		</v-list-tile>
	</v-list>
</template>

<script>
export default {
	name: 'About',
	components: {},
	data() {
		return {
			items: [
				{ title: 'home', icon: 'mdi-alert' },
				{ title: 'about', icon: 'mdi-alert-box' },
				{ title: 'about2', icon: 'mdi-alert-circle' },
			],
		};
	},
};
</script>
