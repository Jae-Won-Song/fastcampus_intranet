# :상처받은_마음:수강생들을 위한 패스트캠퍼스 인트라넷:상처받은_마음:
<br>
<div align=center>
  <a href="https://master--fastcampus-intrenet.netlify.app/login" target="_blank">
    <img src="https://img.shields.io/badge/배포 링크-ed234b?style=for-the-badge&logoColor=white" alt="example"/>
  </a>
</div>
<br>
<br>
:압정:회원가입 절차 없이 게스트아이디를 통해 패스트캠퍼스 인트라넷을 이용해보세요!
```
:별:게스트 아이디:별:
ID : dev@email.com
PW : 123456
```
![login](https://github.com/Hyun-EG/toDoList/assets/106307387/2ce0f160-f3bd-4805-89d2-55997f3d6ff0)
## :반짝임:프로젝트 소개
제작기간 : `2024.04.08 ~ 2024.04.21`
제작인원 : `5명 [김여진B 박민주 박성현 송재원 이동희]`
### 로그인/회원가입
  - `회원가입 후 로그인`을 해서 나만의 패스트캠퍼스를 관리 해 보아요!
  - `Firebase Authentication`을 이용하여 가입한 `유저 정보 관리`
  - `Realtime Database`로 유저의 이메일(아이디), 이름 등의 정보 저장
  - 회원가입 시 `유효성 검사(Form validation)` 처리
### 메인
- 좌측 상단에 `시계`를 통해 입실/퇴실에 늦지 않도록 해요!
- HRD-net을 통한 인증/QR체크는 훠이훠이:다섯_손가락을_편_손바닥: 버튼하나로 간편하게:아래를_가리키는_손_모양: `입실/퇴실`!
- `공지사항` 한눈에 확인!
- `ToDoList:클립보드:`를 통해 알찬 하루를 보내보세요!
- 사용자, 날짜별로 해당하는 `데이터베이스`를 불러와요!
### 마이프로필
- `프로필사진 업로드` 및 `프로필 변경`
- 나의 입실/퇴실 시간을 체크:두꺼운_확인_표시:할 수 있어요!
- 나의 `잔여휴가`와 `출결상황` 확인
### 휴가관리
- `휴가 신청페이지`를 통해 휴가/조퇴/외출 신청을 간편하게
- `근태 리스트`를 통해 알 수 있는 신청현황
- `근태 필터기능`을 통해 필요한것만 볼 수 있어요!:두_눈: => `UX향상`
-  휴가리스트에 신청하기 버튼 => `UX향상`
-  `Firebase Realtime DataBase`를 이용하여 휴가 제출 폼 실시간 관리 , 휴가 폼 리스트로 출력
-  휴가 종료일, 휴가 신청란 `예외처리`
-  유저의 편의성을 위해 휴가 신청 후 휴가리스트로 이동
### 공지사항
- `공지사항의 자세한 내용`은 여기서 확인 :메가:
### 자료실
- 패스트캠퍼스에서 `제공하는 강의`들을 한눈에 볼 수 있어요!
- 필요한 강의를 선택하여 해당페이지로 빠른이동
<br>
<br>
<br>
## :남성::피부톤-2:팀원 소개 및 분담:여성::피부톤-2:
| 김여진B                                                                                                          | 박민주                                                                                   | 박성현                                                                                   | 송재원                                                                                                                             | 이동희                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://i.pinimg.com/236x/69/0d/28/690d288b651b78ecf09e776c05d977e3.jpg" width="100px" height="50px"/> | <img src="https://pbs.twimg.com/media/D4uU-i7U4AEyiZX.jpg" width="100px" height="50px"/> | <img src="https://pbs.twimg.com/media/EnXJUgGXMAUIB77.jpg" width="100px" height="50px"/> | <img src="https://file3.instiz.net/data/file3/2018/03/12/c/4/b/c4b5c0df037caa0309fd27a89abb45b4.jpg" width="100px" height="50px"/> | <img src="https://file.instiz.net/data/file/20120811/6/2/8/6282d4566bcb97203f451a2572a758ae" width="100px" height="50px"/> |
| `https://github.com/oxlzlo`                                                                                      | `https://github.com/minnug-dev`                                                          | `https://github.com/Hyun-EG`                                                             | `https://github.com/Jae-Won-Song`                                                                                                  | `https://github.com/ldh9669`                                                                                               |
|메인페이지 스타일 및 기능 구현,  파이어스토어를 이용한 데이터베이스 연결 |전체디자인 구성 및 SCSS 공통화 작업(변수 선언, mixin 활용), 로그인, 회원가입 기능 구현| 사이드바 구현 및 뷰포트에 맞는 자동슬라이드,공지사항 구현 ,자료실 구현 |휴가 리스트(드롭다운,상태관리,필터링) 구현 , 휴가신청 페이지 구현 |동희 입력 |
## 기술|스택
<div align=center  >
	<div>
			<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
		  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
		 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
	    <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
	    <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
      <img src ="https://img.shields.io/badge/SASS-cc6699.svg?&style=for-the-badge&logo=Sass&logoColor=white"/>
		 <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=firebase&logoColor=white">
    <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
    <img src="https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=ESlint&logoColor=white">
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
    <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
    <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettie&logoColor=white">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  </div>
</div>
## Userflow
<img width="5088" alt="userflow" src="https://github.com/Hyun-EG/toDoList/assets/106307387/0109af96-9dd5-4fd3-bf54-a48c315d9a2b">







