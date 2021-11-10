# 2강 프로젝트 생성 과정, 에디터(VScode) 설정 및 Vuetify1.5 설치

Vue 프로젝트 생성에 대한 과정과 설치한 에디터 'Visual Studio Code'에서 vue 작업하는 데 필수적인 Extensions을 설정하는 방법과 프로젝트에 맞는 Vuetify1.5를 설치하는 방법에 대한 내용입니다.

## 1. Vue 프로젝트 생성 과정
- Vue create <프로젝트명> 입력
![image](https://user-images.githubusercontent.com/13953651/140884712-052fa548-75b2-44a7-b0f5-328c58636e4a.png)
- 프로젝트 초기 사용자 설정 
  - **Please pick a preset :** Manually select features 선택으로 원하는 셋팅 설정
  - **Check the features needed for your project :** SPA를 위한 Vuex, Router 셋팅, 나머지는 필요에 따라 설정
  - **Choose a version of Vue.js that you want to start the project with :** Vue 버전 선택
  - **Use history mode for router? :** 라우터에서 샵(#)태그 없이 하는 방법 선택 여부
  - **Pick a CSS pre-processor :** 스타일 형태 선택
  - **Pick a linter /formatter config :** ESLint 선택
  - **Pick additional lint features :** Lint 시 저장 선택
  - **Where do you prefer placing config for Babel, ESLint, etc.? :** 어디에 저장할지 선택
  - **Save this as a preset for future projects? :** 지금 설정 저장 여부
![image](https://user-images.githubusercontent.com/13953651/140886364-c020088d-e502-4cf9-b0ad-10842147d949.png)
- 생성한 프로젝트 폴더 이동 후 브라우저에서 로컬호스트로 확인
```
cd project-start
yarn serve
```
![image](https://user-images.githubusercontent.com/13953651/140888176-91420661-fd14-465f-bd9c-a299d9e7cb34.png)

![image](https://user-images.githubusercontent.com/13953651/140888703-089b51e0-a686-4d20-a592-ea5758a41452.png)



## 2. Visual Studio Code 확장 프로그램 설정

-   폴더에서 VScode 열기 - 커맨드 창에서 다음과 같이 입력

```
code .
```

-   메뉴에서 'View - Extenstions'에서 Vue 관련 프로그램 설치  

**1. Vetur :** .vue 파일의 코드 하이라이팅을 위해서 사용


<details> 
<summary>Vetur 보기</summary>
<div markdown="1">

  
![image](https://user-images.githubusercontent.com/13953651/141024525-d15d339d-d62e-4e1c-84aa-ae75935dfb24.png)   
  
  설치 전/후   
  
  ![vetur](https://user-images.githubusercontent.com/13953651/141033367-45315ad5-beba-4233-9879-5e3a7f896dc9.gif)

</div>
</details>

**2. Vue VSCode Snippets :** .vue 파일 초기 구성 생성으로 젠코딩 같은 역할

<details>
<summary>Vue VSCode Snippets 보기</summary>
<div markdown="1">

![image](https://user-images.githubusercontent.com/13953651/141033823-344cce85-6bd7-4ad3-83d8-b7162da6fdda.png)   
  
  적용 된 화면   
  
  ![Vue VSCode Snippets](https://user-images.githubusercontent.com/13953651/141033751-c28a2709-38c0-40d0-b0dc-f8f8bf545156.gif)

</div>
</details>

**3. vuetify-vscode :** vuetify 코딩 시 젠코딩 같은 역할

<details>
<summary>vuetify-vscode 보기</summary>
<div markdown="1">

![image](https://user-images.githubusercontent.com/13953651/141035213-cd02f6b6-5748-4d1f-bc15-6ccb46058c49.png)   
  
  적용 된 화면  
  
  ![vuetify-vscode](https://user-images.githubusercontent.com/13953651/141034180-6acf4a42-b0ce-46a0-86c4-b27626f72371.gif)

</div>
</details>

**4. Task Explorer :** 'yarn serve'와 같은 기능을 보다 쉽게 연결해주는 역할

<details>
<summary>Task Explorer 보기</summary>
<div markdown="1">

![image](https://user-images.githubusercontent.com/13953651/141034478-6ac3a91a-9dba-4cc1-b50c-249c46eb472c.png)

</div>
</details>

**5. ESLint :** 자바스크립트 문법 검사기로 코딩 작업 시 통일 된 코딩 작업 적용!!

<details>
<summary>ESLint 보기</summary>
<div markdown="1">

![image](https://user-images.githubusercontent.com/13953651/141034546-298faca8-c42b-4143-a296-d64ebde5e416.png)   
    
**※ 추가 설정 필요**  
  1. 최상위 디렉토리에 .eslintrc.js 생성 및 다음과 같이 소스 추가   
```javascript
  module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
    },
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
    ],
    plugins: [
        'vue',
    ],
    rules: {
        'nenerator-start-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ["error", "never"],
        'no-unsafe-finally': 0,
        'no-return-assign': 0,
        'comma-dangle': ['error', "always-multiline"],
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['error', 'never'],
        'keyword-spacing': ['error', { before: true, after: true}],
    },
  };
```
  2. VScode setting.json 옵션 추가  
    
  ![eslint-setting](https://user-images.githubusercontent.com/13953651/141036030-8ceea386-aa09-4a39-b597-2dbc996374a1.gif) 
  
  적용 된 화면   
  
  ![eslint-set](https://user-images.githubusercontent.com/13953651/141051174-a7df391b-4d75-47b8-a6bd-c4d4eaaa9167.gif)

</div>
</details>

**6. GitLens :** 작업 후 깃과 연동하는 데 편리함   

<details>
<summary>GitLens 보기</summary>
<div markdown="1">

![image](https://user-images.githubusercontent.com/13953651/141048266-46f2668a-c454-46a0-94b8-f23a0fc2aa93.png)   
  
  적용된 화면
  
  ![gitlens](https://user-images.githubusercontent.com/13953651/141049969-8bbd2aaa-99c8-403e-88b0-f5fe6cd52294.gif)

</div>
</details>

**7. Material Design Icons Intellisense :** 디렉토리 목록에서 아이콘을 메테리얼 아이콘으로 확인 가능

<details>
<summary>Material Design Icons Intellisense 보기</summary>
<div markdown="1">

![image](https://user-images.githubusercontent.com/13953651/141050217-5a09182a-fe84-4b83-997c-08eb4b5e5669.png)
  
  적용된 화면
  
  ![mdi](https://user-images.githubusercontent.com/13953651/141050354-efc16371-caee-4a69-94a5-d350359a8a4d.gif)
  
</div>
</details>

**전체 설치된 화면**   

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
