# 개발 환경 구축
OS Windows10 기준으로 Vue 개발 환경을 구축하는 내용입니다.

1. node.js 설치
* [다운로드 바로가기](https://nodejs.org/ko/download/)
* 설치 후 커맨드창(윈도우 검색창에 cmd로 열기)으로 버전 확인 : node -v, npm -v 
2. git 설치
* [다운로드 바로가기](https://git-scm.com/downloads)
* 설치 후 버전 확인 : git --version
3. yarn 설치
    * 설치
```
npm install -g yarn
```   

* 오류 발생 시 : npm ERR! code SELF_SIGNED_CERT_IN_CHAIN
* 해결 방법 :  터미널에서  명령어 실행 >>> npm config set strict-ssl false
* 설치 후 버전 확인 : yarn -v
4. 에디터(Visual Studio Code) 설치
    * [다운로드 바로가기]https://code.visualstudio.com/download
5. vue cli2 설치
* 설치
```
npm install -g @vue/cli 
# OR 
yarn global add @vue/cli
```

* 오류 발생 : error An unexpected error occurred: "https://registry.yarnpkg.com/@vue%2fcli: self signed certificate in certificate chain".
* 해결 방법 : yarn config set "strict-ssl" false
* 버전 확인 : vue --version
   
* * 윈도우 OS 버전으로 인한 vue 설치 오류 - error cannot read property 'resolve' of undefined
* 오류 상황 : OS -윈도우7, node 버전 - v12.**.**
* 해결 방법 : https://github.com/coreybutler/nvm-windows/releases 에서 nvm-setup.zip 다운 설치 후, 노드 다운그레이드 (v10.15.0)
> node -v // 노드 현재버전 확인
> nvm install <노드 버전> // 변경할 버전을 설치
> nvm use <노드 버전> // 설치한 버전으로 변경
> node -v // 변경된 노드 버전 확인
- 다시 설치(npm install -g @vue/cli) 후 버전 확인(vue --version)
6. vue 프로젝트 생성
- vue create 프로젝트명
- yarn serve (로컬호스트 실행 후 브라우저에서 확인)
