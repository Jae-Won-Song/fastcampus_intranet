
function sideBar() {
  return (
    <>
  <div className='nav'>
    <div className='nav-logo'>
    </div>
    <div className='icons'>
      <div className='nav-icon'><img src="src/assets/images/icon_profile.svg" alt="f"/></div>
      <div className='word'>마이페이지</div>
    </div>
    <div className='icons'>
      <div className='nav-icon'><img src="src/assets/images/icon_edit.svg" alt="" /></div>
    <div className='word'>휴가관리</div>
    </div>
    <div className='icons'>
      <div className='nav-icon'><img src="src/assets/images/icon_bell.svg" alt="" /></div>
    <div className='word'>공지사항</div>
    </div>
    <div className='icons'>
      <div className='nav-icon'><img src="src/assets/images/icon_folder.svg" alt="" /></div>
    <div className='word'>자료실</div>
    </div>
    <div className='nav-logout-btn'>로그아웃</div>
  </div>
    </>
  )
}
    
  export default sideBar;
    