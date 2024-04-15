import './App.scss'

function App() {

  return (
    <>
    <div className='nav'>
    <div className='nav-logo'>
    <img src="src/assets/images/logo_fastcampus_column.png" alt="fastcampusLogo"/>
    </div>
    <div>
      <div className='nav-icon'><img src="src/assets/images/icon_profile.svg" alt="profile"/></div>
      <div className='word'>마이페이지</div>
    </div>
    <div>
      <div className='nav-icon'><img src="src/assets/images/icon_edit.svg" alt="vacation" /></div>
    <div className='word'>휴가관리</div>
    </div>
    <div>
      <div className='nav-icon'><img src="src/assets/images/icon_bell.svg" alt="announcement" /></div>
    <div className='word'>공지사항</div>
    </div>
    <div>
      <div className='nav-icon'><img src="src/assets/images/icon_folder.svg" alt="reference" /></div>
    <div className='word'>자료실</div>
    </div>
    <div className='nav-logout-btn'>로그아웃</div>
  </div>
    <div className='announcement'>
      <div className='announcement-area'>
        <span className='title'>공지사항</span>
        <div className='announcements'>
          <span>토이프로젝트 I 안내</span>
          <img className='arrow-right' src="src/assets/images/icon_chevron_right.svg" alt="fastcampus" />
          <span className='date'>2024.04.05</span>
          </div>
        <div className='announcements'>
        <span>이정환 강사님 현직자 특강 만족도 조사 안내</span>
          <img className='arrow-right' src="src/assets/images/icon_chevron_right.svg" alt="fastcampus" />
          <span className='date'>2024.04.04</span>
        </div>
        <div className='announcements'>
        <span>훈련장려금 신청 지연 안내</span>
          <img className='arrow-right' src="src/assets/images/icon_chevron_right.svg" alt="fastcampus" />
          <span className='date'>2024.04.02</span>
        </div>
        <div className='announcements'>
        <span>그룹스터디 회고 이벤트 결과 발표</span>
          <img className='arrow-right' src="src/assets/images/icon_chevron_right.svg" alt="fastcampus" />
          <span className='date'>2024.04.02</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
