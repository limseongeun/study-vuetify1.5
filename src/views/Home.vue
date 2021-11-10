<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
        <p>안녕하세요. Vue 가이드 사이트 입니다.</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
	name: 'Home',
	components: {},
}
</script>
