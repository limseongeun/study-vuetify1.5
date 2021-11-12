# 7강 Vue 맛보기
Vue를 본격적으로 시작하기에 앞서서 Vue 홈페이지에서 제공하는 시작하기 가이드를 통해 Vue의 전반적인 이해를 하기 위한 내용입니다.

## 1. Vue에 대한 접근
[사이트 바로가기](https://kr.vuejs.org/v2/guide/index.html)   

* 알게 되면 의외로 쉬움
* 처음 접하는 입문자로는 시작에 대한 어려움 발생
* React.js, Angular.js와 다르게 CDN으로 설치가 가능한 가벼움
* 정석적인 방법인 Vue Cli를 통한 프로젝트 생성으로 간편하게 시작 가능

![vue_start](https://user-images.githubusercontent.com/13953651/141420808-e6512015-f60f-49bf-9b11-2d69f8f34583.gif)

## 2. Vue 시작하기
* Vue의 문법적 구조 이해
```html
<template>  // 1단계 : 템플릿으로 시작
  <v-app>   // 2단계 : <div> 또는 다른 태그로 내용을 감싸는 태그가 꼭 있어야 함!!
    <v-toolbar flat>

      ...

    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script> // 스크립트 : 스크립트로 위의 내용을 변경시키는 부분으로 중요!!
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

<style> // 스타일 : 페이지 내에서 스타일 적용 가능
</style>

```

* 예제 소스(data binding) 그대로 해보기

**1. 텍스트**

스크립트의 data 값을 변경해주면 <template> 안에 {{ data }} 값이 바인딩
  
![text_binding](https://user-images.githubusercontent.com/13953651/141424499-1f74de74-05e7-4cd3-843e-069d794fb97f.gif)

**2. 속성**

텍스트 이외에도 엘리먼트 속성값 바인딩 가능
  
![attr_binding](https://user-images.githubusercontent.com/13953651/141425952-6e1318a4-d96d-4932-9435-9e768c314d50.gif)

**3. 조건문**

v-if 조건문으로 엘리먼트 표시 여부 제어 가능
  
![if_binding](https://user-images.githubusercontent.com/13953651/141428376-e78aec66-207b-452a-963b-0dbc25233924.gif)

**4. 반복문**

v-for 반복문으로 배열의 데이터를 바인딩하여 Todo 목록 표시 가능
  
![for_binding](https://user-images.githubusercontent.com/13953651/141430004-2f38151c-4adf-4983-8c8d-98d5bdb1d3ce.gif)

*****
### [목록으로 이동](README.md)
### [다음 8.vuetify로 툴바 만들기](document_08.md)
