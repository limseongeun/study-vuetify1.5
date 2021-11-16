# 10강 vuetify로 네비게이션 드라워 만들기
모바일 버전에서 툴바의 메뉴를 열고 닫을 때 사용되는 'Navigation drawer'를 설정하는 내용입니다.

![drawer](https://user-images.githubusercontent.com/13953651/141923655-7b01ab24-b6cb-43ff-bb29-53f2719c157d.gif)

## 1. Navigation drawer 사용
* 좌측 메뉴 UI Components의 Navigation drawer 소스 참고
* 우선 안에 내용 넣기 전에 v-navigation-drawer 설정
1. script data 에 drawer 초기화 및 methods 추가
```javascript
data() { // 컴포넌트 내 data 정의를 할 때 주로 사용
  return {
    drawer: false,
  };
},
methods: { // 정의된 data 값이나 이벤트를 설정할 때 많이 사용
  test() {
    this.drawer = !this.drawer
  }
},
```
2. toolbar 에 있는 v-toolbar-side-icon 에 클릭 이벤트 추가
```html
<v-toolbar-side-icon @click="test" /> // @은 v-on:의 약자
```
3. 설정한 drawer 를 양뱡향 바인딩인 v-model 을 사용하여 v-navigation-drawer 에 추가
```html
<v-navigation-drawer v-model="drawer" fixed app> // fixed, app은 v-navigation-drawer의 props 중 하나
  메뉴 리스트
</v-navigation-drawer>
```

![drawer_test](https://user-images.githubusercontent.com/13953651/141931742-c0ffe86d-e6e1-4c72-8244-f8da7b501b42.gif)


## 2. v-list 추가
* 이전 강좌에서 했던 v-list 소스를 v-navigation-drawer 태그 안에 붙여넣기
* router 페이지 이동을 위한 링크 기능인 'to' 속성의 바인딩 추가
  
```html
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-toolbar flat color="tarnsparent">
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.to"> // :은 v-bind의 약자
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
      ...
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

```

## 개발 팁
  1. data와 methods 를 가지고 Vue 개발을 거의 다 할 수 있을만큼 두 옵션은 중요!!
  2. @click="drawer = !drawer" 와 같이 간단한 메서드의 이벤트 처리는 바로 넣어서 처리 가능
  3. vuetify에 있는 예제 소스를 그대로 복사해서 쓰는 것보다 이해와 분석을 하고 쓰면 좋음 
  
*****
### [목록으로 이동](README.md)
### [다음 11.vuetify로 하위 메뉴 구성하기](document_11.md)
