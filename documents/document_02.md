# 2강 프로젝트 생성 과정, 에디터(VScode) 설정 및 Vuetify1.5 설치

Vue 프로젝트 생성에 대한 과정과 설치한 에디터 'Visual Studio Code'에서 vue 작업하는 데 필수적인 Extensions을 설정하는 방법과 프로젝트에 맞는 Vuetify1.5를 설치하는 방법에 대한 내용입니다.

## 1. Vue 프로젝트 생성 과정
- Vue create <프로젝트명> 입력
![image](https://user-images.githubusercontent.com/13953651/140884712-052fa548-75b2-44a7-b0f5-328c58636e4a.png)
- 프로젝트 초기 사용자 설정 
  - Manually select features 선택으로 원하는 셋팅 설정
  - SPA를 위한 Vuex, Router 셋팅, 나머지는 필요에 따라 설정
  - Vue 버전 선택
  - 라우터에서 샵(#)태그 없이 하는 방법 선택 여부
  - 스타일 형태 선택
  - ESLint 선택
  - Lint 시 저장 선택
  - 지금 설정 저장 여부
![image](https://user-images.githubusercontent.com/13953651/140886364-c020088d-e502-4cf9-b0ad-10842147d949.png)
- 생성한 프로젝트 폴더 이동 후 브라우저에서 로컬호스트로 확인
```
cd project-start
yarn serve
```
![image](https://user-images.githubusercontent.com/13953651/140888176-91420661-fd14-465f-bd9c-a299d9e7cb34.png)

![image](https://user-images.githubusercontent.com/13953651/140888703-089b51e0-a686-4d20-a592-ea5758a41452.png)



## 2. Visual Studio Code 설정

-   폴더에서 VScode 열기 - 커맨드 창에서 다음과 같이 입력

```
code .
```

-   메뉴에서 'View - Extenstions'에서 Vue 관련 프로그램 설치
    - Vetur : .vue 파일의 코드 하이라이팅을 위해서 사용
    - vue : Vetur와 같이 .vue 파일 초기 구성 생성
    - Vue VSCode Snippets : .vue 파일 초기 구성 생성으로 젠코딩 같은 역할
    - vuetify-vscode : vuetify 코딩 시 젠코딩 같은 역할
    - Task Explorer : 'yarn serve'와 같은 기능을 보다 쉽게 연결해주는 역할
    - ESLint : 자바스크립트 문법 검사기로 코딩 작업 시 통일 된 코딩 작업 적용!!
    - GitLens : 작업 후 깃과 연동하는 데 편리함
    - Material Design Icons Intellisense : 디렉토리 목록에서 아이콘을 메테리얼 아이콘으로 확인 가능

![image](https://user-images.githubusercontent.com/13953651/140890330-a613da3f-051e-4c39-a61b-4829a56f5e85.png)


## 3. Vuetify1.5 설치
강좌에서 사용하는 vuetify 1.5 낮은 버전 설치 방법 
```
vue add vuetify@0.5
vue invoke vuetify
```

---

### [목록으로 이동](README.md)

### [다음 3.Firebase에 사이트 배포하기](document_03.md)
