# 무♚❣료✴ஆ 성격 텚亼트✒

<img width="941" alt="홈페이지 화면" src="https://github.com/user-attachments/assets/4900cb05-fc6e-4307-baac-22a6ca2a0d13">

## 📖 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [주요기능](#주요기능)
3. [적용 기술](#적용-기술)
4. [개발기간](#개발기간)
5. [기술스택](#기술스택)
6. [Trouble Shooting](#trouble-shooting)

## 👨‍🏫 프로젝트 소개

tanstack query기능을 이용해 auth 로직을 구현한 간단한 MBTI 테스트입니다.

> ### "☆무료 ＭＢ☏ＴＩ ㅌㅔ♚亼틇 ㅈㅣ금 즉⚄ㅅㅣ❉"

## 주요기능

### 🛡 회원가입 및 로그인

- Tanstack query를 이용한 간편한 회원가입 및 로그인 기능을 제공합니다.
- 회원가입: 닉네임, 이메일, 비밀번호를 입력하여 간단히 계정을 생성할 수 있습니다.
- 로그인: 기존에 가입한 이메일과 비밀번호로 안전하게 로그인할 수 있습니다.

<details>
<summary>미리보기</summary>
<div markdown="1">

- 회원가입
 <img width="339" alt="회원가입" src="https://github.com/user-attachments/assets/2976b4ee-7f8f-494f-9eac-a131bd49c961">
 
- 로그인
<img width="432" alt="로그인" src="https://github.com/user-attachments/assets/ca627b59-68a6-4cd1-a32e-ed047218ecb7">

<br>
</div>
</details>

### 📝 프로필 수정

- 회원은 프로필 보기 페이지에서 닉네임의 변경과 프로필 사진 업데이트가 가능합니다.
- 프로필 사진은 로컬에서 이미지를 업로드하는 것으로 변경할 수 있습니다. 

<details>
<summary>미리보기</summary>
<div markdown="1">

- 프로필 수정
<img width="357" alt="프로필 수정" src="https://github.com/user-attachments/assets/366b7ecc-e6c2-499c-a995-4efa0c0be591">

<br>
</div>
</details>

### 🖋 테스트

- 회원가입한 회원은 간단한 MBTI 테스트를 할 수 있습니다. 
- 테스트 결과는, 테스트를 제출하면 바로 화면에 출력됩니다. 

<details>
<summary>미리보기</summary>
<div markdown="1">

- 테스트
<img width="942" alt="테스트" src="https://github.com/user-attachments/assets/7a281c6a-1791-45f8-b701-b816c7fd6736">

- 테스트 결과
<img width="404" alt="테스트 결과" src="https://github.com/user-attachments/assets/3dd328a6-3c49-4928-b9c0-142701de932d">

<br>
</div>
</details>

### 🔍 공개/비공개 삭제 기능. 

- 결과 보기 페이지에서는 자신을 포함한 다른 사람들의 MBTI 테스트 결과를 볼 수 있습니다. 
- 자신의 MBTI 결과를 보이지 않게 공개 설정을 바꾸거나, 삭제할 수도 있습니다. 

<details>
<summary>미리보기</summary>
<div markdown="1">

- 결과 보기 페이지
<img width="431" alt="결과 모음" src="https://github.com/user-attachments/assets/01a220b2-905c-470e-ac6e-0e11a017d842">

<br>
</div>
</details>

## 적용 기술

### Redux Toolkit

### Tanstack query

### Json-server 

## ⏲️ 개발기간

- 2024.11.25(월) ~ 2024.11.28(목)

## 📚️ 기술스택

### ✔️ Language

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### ✔️ Version Control

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### ✔️ IDE

![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

### ✔️ Framework / Library
`@reduxjs/toolkit`: `^2.3.0`,
`@tanstack/react-query`: `^5.61.3`,
`@tanstack/react-query-devtools`: `^5.61.3`,
`axios`: `^1.7.7`,
`json-server`: `^1.0.0-beta.3`,
`react`: `^18.3.1`,
`react-dom`: `^18.3.1`,
`react-redux`: `^9.1.2`,
`react-router-dom`: `^7.0.1`,
`redux`: `^5.0.1`


### ✔️ Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### ✔️ Database Manage System

![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)

## Trouble Shooting

## 1. **404 에러 발생 문제**

### 문제

`getUserProfile` 함수에서 404 에러가 발생했다.  
Postman을 사용해 여러 번 테스트했지만 해결되지 않아 튜터님께 도움을 요청했다.

### 원인

API 요청 메서드에 문제가 있었다.  
명세서에는 `GET` 요청으로 데이터를 받아와야 했지만, 실수로 `POST` 요청을 보내고 있었다.

### 해결

명세서를 다시 확인한 후 요청 메서드를 `GET`으로 수정해 문제를 해결했다.

### 교훈

API 명세서를 꼼꼼히 읽고 확인하는 습관이 필요하다.

## 2. **라우터 설정 문제**

### 문제

퍼블릭 라우트와 프라이빗 라우트를 구분하는 과정에서 홈 화면이 제대로 표시되지 않는 문제가 발생했다.  

홈 화면은 로그인 여부와 상관없이 표시되어야 하지만, 퍼블릭 라우트에 넣는 실수를 저질렀다.

### 원인

홈 화면을 퍼블릭 라우트로 설정해 로그인된 상태에서 홈 화면이 표시되지 않았다.

### 해결

-   홈 화면은 퍼블릭/프라이빗 구분 없이 기본 라우트로 설정.
-   프로텍트 라우팅이 필요한 라우트만 퍼블릭과 프라이빗으로 구분.

### 교훈

라우터 설정 시 페이지의 접근 조건을 명확히 정의하고 설계해야 한다.

## 3. **이미지 파일 첨부와 FormData 사용 문제**

### 문제

이미지 파일 첨부를 구현할 때, FormData로 데이터를 처리하는 방법을 몰라 문제가 발생했다.  
폼 데이터 내부의 데이터를 확인하는 방법도 익숙하지 않았다.

### 해결

-   `input` 요소의 파일 데이터를 `e.target.files[0]`으로 가져와 FormData에 추가.
-   FormData 내부를 확인하려면 `formData.entries()`를 사용.

```const formData = new FormData(); formData.append("avatar", imgFile); formData.append("nickname", nickname); for (let [key, value] of formData.entries()) { console.log(`${key}:`, value); }```

### 교훈

-   FormData는 서버로 데이터를 포장해서 전송하는 용도로 사용된다.
-   데이터를 생성하거나 확인하는 방법을 숙지할 필요가 있다.

## 4. **PATCH 요청 실패 문제**

### 문제

`PATCH` 요청을 통해 데이터를 수정하려 했으나, 데이터가 서버에 반영되지 않았다.  
단순히 `toggle` 값만 전송했기 때문에 문제가 발생했다.

### 해결

-   서버에 전송할 데이터를 명확히 정의해 객체 형식으로 전달.
-   예를 들어, `visibility` 값을 변경하는 경우 아래와 같이 수정.

```const response = await jsonApi.patch(`/testResults/${id}`, {
  visibility: !visibility,
});```

## 5. **비공개 게시물 조건 처리 문제**

### 문제

비공개 게시물이 자신에게만 보이도록 설정하는 로직에서 제대로 작동하지 않는 문제가 있었다.  

해결 방법을 찾는 데 2시간 이상 걸렸다.

### 해결

-   조건문에 `or` 연산자를 추가해 자신의 게시물인지 확인하는 로직을 구현.
-   수정된 조건문은 아래와 같다.

```if (visibility === true || userProfile.id === cardId) { // 게시물 렌더링 로직 }```

### 교훈

조건문 작성 시 요구사항을 명확히 분석하고, 추가적인 예외 케이스를 고려해야 한다.
