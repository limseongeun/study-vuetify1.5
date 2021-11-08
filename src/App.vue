<template>
	<v-app>
		<v-toolbar flat>
			<v-toolbar-side-icon></v-toolbar-side-icon>
			<v-toolbar-title>Title</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="">
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
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	components: {},

	data() {
		return {
			//
		};
	},
};
</script>
