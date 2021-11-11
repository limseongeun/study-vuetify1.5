# 5강 SPA 알아보기
최근 웹사이트의 트랜드이고 Vue의 구조적 특성인 SPA(Single Page Application)에 대한 개념을 'vue-router'를 통해 설명하는 내용입니다.

## 1. SPA(Single Page Application)란?
* Vue의 자체적인 구조 형태
* index.html 한 페이지 내에서 페이지가 전환되는 현상
* 'vue-router' 설정으로 화면 전환 설정

```
// index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    ...
  </head>
  <body>
    ...
    
    <div id="app">
      <!-- 여기서 페이지 전환이 App.vue의 vue-router를 통해 발생!! -->
    </div>
  </body>
</html>

//App.vue
<template>
  <v-app>
   
   ...
   
    <v-content>
    
      <router-view /> // router.js에서 설정한 페이지 연결
      
    </v-content>
  </v-app>
</template>

<script>
export default {
	name: 'App',
  
  ...
  
}
</script>


```

## 2. vue-router 역할 및 설정
* App.vue 내에서 페이지 전환
* router.js에서 각 페이지 설정
* main.js에 추가

```
//main.js
...
import router from './router'

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')

//router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('./views/About.vue'),
	},
  
  ...
  
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router

```

라우터 적용된 화면

![router_screen](https://user-images.githubusercontent.com/13953651/141221203-0e21d344-521c-4393-a9e5-fdc8eb092fc2.gif)


## 3. Vue.js devtools 활용
* 크롬브라우저에서 지원하는 Vue.js devtools 확장 프로그램 설치 [설치 바로가기](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?utm_source=chrome-ntp-icon)
* 크롬브라우저 개발자도구(F12) 탭에서 생성된 'VUE' 선택 후 화면 확인
* Root 안의 router-view 에서 내부적으로 페이지 변경됨

![router-vuedevtools](https://user-images.githubusercontent.com/13953651/141222488-3833cc64-8936-4dd2-8d77-a84607958a4f.gif)


*****
### [목록으로 이동](README.md)
### [다음 6.Git 다운로드하기](document_06.md)
