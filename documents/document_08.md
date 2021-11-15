# 8강 vuetify로 툴바 만들기
환경설정에서 설치한 Vue의 대표적인 전용 프레임워크인 vuetify를 사용하여 화면을 구성하는 첫 번째 내용으로, 툴바 제작에 대한 내용입니다.

## 1. vuetify 사이트 적극 활용
[사이트 바로가기](https://v15.vuetifyjs.com/ko/getting-started/quick-start)   

* 작업 할 때 사이트 열어 놓고 필요할 때마다 참고
* 화면 구성 시, vuetify UI Components 및 스타일 가이드 참고

## 2. vuetify toolbar 소스 붙여넣기
* 좌측 메뉴 UI Components의 toolbar 소스 복사
* App.vue 파일에 <v-app> 안에 toolbar 소스 붙여넣기
* 일부 소스 수정
  - &lt;v-toolbar-items class="hidden-sm-and-down"&gt; -> &lt;v-toolbar-items class="option_menu"&gt; 
  - &lt;v-btn flat&gt; Link One&lt;/v-btn&gt;  ->  &lt;v-icon&gt;mdi-magnify&lt;/v-icon&gt;
  
```html
<template>
<v-app>
  <v-toolbar flat>
    <v-toolbar-side-icon />
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

...
</v-app>
</template>

<script>
...
</script>

```

## 개발 팁
  1. 소스 활용시, vuetify에서 제공하는 API 형식대로 최대한 지켜서 코딩하기
  2. 'hidden-sm-and-down' [반응형에 따른 클래스 네이밍](https://v15.vuetifyjs.com/ko/framework/breakpoints) 참고
  3. mdi 폰트 아이콘 설정으로 인한 설치한 mdi 확장팩 활용하기
  
*****
### [목록으로 이동](README.md)
### [다음 9.vuetify로 리스트 만들기](document_09.md)
