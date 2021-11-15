# 9강 vuetify로 리스트 만들기
vue를 사용할 때 많이 쓰는 패턴인 리스트 제작에 대한 내용입니다.

![image](https://user-images.githubusercontent.com/13953651/141734426-53c77a81-701b-4eb8-aeb7-5ba7ad2856bd.png)

## 1. Lists 사용
* 좌측 메뉴 UI Components의 Lists 소스 참고
* 메뉴 펼치기 때 나오는 메뉴(Drawer) 형식에 사용
* API에서 정의하는 형식으로 코딩 권장
* 반복 처리를 위한 'v-for'반복문과 script에서 배열/오브젝트 data 바인딩 필요 

## 2. v-list 소스 코딩
* 메뉴에 사용하기 전에 임의 페이지에 코딩함으로 소스 이해하기
* 우선 v-list 메뉴 하나 만들기
* 반복되는 부분 v-for 적용 후 scirpt영역에서 items data 바인딩 하기
  
```html
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


```

## 개발 팁
  1. Vue의 태생은 모바일 화면에서 리스트적인 화면을 보여주기 위함이라고 보면 됨.
  2. 반복문에서 data 네이밍은 대부분 'items'로 많이 사용
  3. 반복문 사용 시, key 값을 설정하지 않으면 오류가 발생함으로 items에서 값이 다른 data로 key 값 설정
  4. key 값 설정 시, v-for="(item, index) in items" :key="item.index" 로도 많이 사용
  
*****
### [목록으로 이동](README.md)
### [다음 10.vuetify로 네비게이션 드라워 만들기](document_10.md)
