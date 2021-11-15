# 9강 vuetify로 리스트 만들기
vue를 사용할 때 많이 쓰는 패턴인 리스트 제작에 대한 내용입니다.

## 1.   

* 
* 

## 2. 
* 
*
* 
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
### [다음 10.vuetify로 네비게이션 드라워 만들기](document_10.md)
