# MBTI Test 만들기!
- 회원가입/로그인부터 프로필 관리, 테스트 결과 저장
- JWT 인증과 REST API 통신
- 인증 및 권한 관리
- Axios와 Tanstack Query(React Query)
- json-server
<br>

## 💻기술 스택
<div style="display:flex; justify-contents: center;">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
</div>
<br>

## ✔필수 요구사항
1. Tailwind CSS 설치 및 설정
2. 라우터 설정 및 페이지 생성
3. JWT 인증 API 연결
4. 레이아웃과 네비게이션
5. MBTI 문항 가져오기
6. json-server 셋업 및 API 연결
7. testResult.js에 필요한 API 정의
8. MBTI 테스트 페이지
9. 테스트 결과 리스트 구성
<br>

## 👍선택 요구사항
- 로그인 유지 기능 구현
- Tanstack Query 사용
- Axios Instance 사용
<br>

## 🎥기능 구현
- 리액트 라우터 돔으로 페이지들을 만들고, private, public 루트를 만들어서 회원 정보에 따라 리다이렉트되게 했습니다.
![image](https://github.com/user-attachments/assets/31738b13-07ff-4e87-bb90-e3357ba0a4c4)

- 로그인하면 accessToken이 로컬 스토리지에 저장되게 했습니다. 회원 가입도 가능하게 했습니다.
![image](https://github.com/user-attachments/assets/dde1bfc1-f5c7-40cb-b51d-1b8f89f19dd6)

- 마이페이지에 자동으로 닉네임이 담겨 있게 하고, 수정할 수 있게 했습니다.
![image](https://github.com/user-attachments/assets/32b4e33c-41c2-47a7-8831-b9bad36c02e4)

- 테스트하고 제출하면 결과 페이지로 넘어가고, 테스트 결과가 저장되게 했습니다.
![image](https://github.com/user-attachments/assets/a31863d4-1f9c-4aa3-acba-ab9b4363fefe)

- 테스트 결과를 비공개, 삭제 할수 있게 했습니다.
![image](https://github.com/user-attachments/assets/5031c3f2-15a4-44e8-819b-8ac98346831b)

- tanstack query로 리팩터링했습니다.
