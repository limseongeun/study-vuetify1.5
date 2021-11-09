<template>
  <div class="about">
    <span :title="message">
      내 위에 잠시 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있습니다.
    </span>
  </div>
</template>

<script>
export default {
	name: 'About',
	components: {},
	data(){
		return {
			message: '여기는 소개페이지입니다.' + new Date(),
		}
	},
}
</script>
