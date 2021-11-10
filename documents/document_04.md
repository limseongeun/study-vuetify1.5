# 4강 Git 사용하기
최근 프로젝트에 빠질 수 없는 소스 관리 프로그램인 'Git 사용'에 대한 내용입니다.

## 1. .gitignore 정리
Vue Cli로 프로젝트를 생성 시 자동으로 'git'도 같이 생성되는데, 여기서 커밋 시 포함하지 않아도 되는 파일을 .gitignore 파일에 추가   
예) .firebase

```
//.gitignore 파일
...
# firebase // #은 주석 처리 
.firebase

```

## 2. GitLens 활용
설치한 확장팩 'GitLens'로 깃에 대한 기능 사용   
예) git pull, git commit, git checkout ...

## 3. Github 원격 저장소 연동하기
로컬에서 작업한 소스를 'Github'와 같은 원격 저장소에 업로드 함으로 연동

* Github 가입 후 레포지토리 생성

[깃허브 사이트 바로가기](https://github.com/)

![image](https://user-images.githubusercontent.com/13953651/141065798-4e7d8072-36a8-4df5-b1f9-8acdc16045c7.png)   
생성한 프로젝트 이름과 똑같이 입력!!   
이미 Vue 프로젝트를 생성한 상태라 아래 체크사항은 체크 안하고 레포지토리 생성

* 커맨드 창에 생성한 레포지토리 연동

```
git remote add origin https://github.com/limseongeun/project-start-site.git
git branch -M main
git push -u origin main
```

**로컬에서 깃을 처음 사용하는 경우 다음과 같이 로컬에 등록을 해 주어야 함**

```
git config --global user.name "유저이름"
git config --global user.email "유저이메일"
```

* 원격 저장소에 업로드 됐는지 확인

![image](https://user-images.githubusercontent.com/13953651/141067291-2e894fc5-cc86-4d85-a22f-84ff8637a268.png)


*****
### [목록으로 이동](README.md)
### [다음 5.SPA 알아보기](document_05.md)
