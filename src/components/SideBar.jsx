import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { auth } from "../firebase/config";

function SideBar() {
  const navigate = useNavigate();
  const [slidePosition, setSlidePosition] = useState(264); // 초기 슬라이드 위치

  const handleIconClick = (topPosition) => {
    setSlidePosition(topPosition); // 클릭된 아이콘의 top 위치로 슬라이드 위치 변경
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img
            src="src/assets/images/logo_fastcampus_column.png"
            alt="fastcampusLogo"
          />
        </div>
        <div>
          <div
            to="src/components/Notice.jsx"
            className="nav-icon"
            onClick={() => handleIconClick(260)}
          >
            <img src="src/assets/images/icon_profile.svg" alt="profile" />
          </div>
          <div className="word">마이페이지</div>
          <div className="slide" style={{ top: slidePosition + "px" }}></div>
        </div>
        <div>
          <div className="nav-icon" onClick={() => handleIconClick(395)}>
            <img src="src/assets/images/icon_edit.svg" alt="vacation" />
          </div>
          <div className="word">휴가관리</div>
        </div>
        <div>
          <div className="nav-icon" onClick={() => handleIconClick(535)}>
            <img src="src/assets/images/icon_bell.svg" alt="announcement" />
          </div>
          <div className="word">공지사항</div>
        </div>
        <div>
          <div className="nav-icon" onClick={() => handleIconClick(670)}>
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
