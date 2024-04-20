import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { auth } from "../firebase/config";
function SideBar() {
  const navigate = useNavigate();
  const [slidePosition, setSlidePosition] = useState(60); // 초기 슬라이드 위치
  const [isSlideVisible, setIsSlideVisible] = useState(false); // 초기에는 슬라이드를 보이지 않도록 설정
  const handleIconClick = (topPosition) => {
    setSlidePosition(topPosition);
    setIsSlideVisible(true);
  };
  const handleLogoClick = () => {
    setIsSlideVisible(false);
  };
  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };
  return (
    <>
      <div className="nav">
        <div className="nav-logo" onClick={handleLogoClick}>
          <img
            src="src/assets/images/logo_fastcampus_column.png"
            alt="fastcampusLogo"
          />
          {isSlideVisible && (
            <div className="slide" style={{ top: slidePosition + "px" }}></div>
          )}
        </div>
        <div>
          <div className="nav-icon" onClick={() => handleIconClick(264)}>
            <img src="src/assets/images/icon_profile.svg" alt="profile" />
          </div>
          <div className="word">마이페이지</div>
        </div>
        <div>
          <div className="nav-icon" onClick={() => handleIconClick(404)}>
            <img src="src/assets/images/icon_edit.svg" alt="vacation" />
          </div>
          <div className="word">휴가관리</div>
        </div>
        <div>
          <div className="nav-icon" onClick={() => handleIconClick(544)}>
            <img src="src/assets/images/icon_bell.svg" alt="announcement" />
          </div>
          <div className="word">공지사항</div>
        </div>
        <div>
          <div className="nav-icon" onClick={() => handleIconClick(684)}>
            <Link to="/Reference">
              <img src="src/assets/images/icon_folder.svg" alt="reference" />
            </Link>
          </div>
          <div className="word">자료실</div>
        </div>
        <Button type="button" onClick={handleLogout}>
          로그아웃
        </Button>
      </div>
    </>
  );
}
export default SideBar;