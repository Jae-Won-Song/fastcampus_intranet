import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { auth } from "../firebase/config";
import Logo from "../assets/images/logo_fastcampus_column.svg";
import Profile from "../assets/images/icon_profile.svg";
import Edit from "../assets/images/icon_edit.svg";
import Bell from "../assets/images/icon_bell.svg";
import Folder from "../assets/images/icon_folder.svg";

function SideBar() {
  const navigate = useNavigate();
  const [activeIconIndex, setActiveIconIndex] = useState(null);
  const [slideOffset, setSlideOffset] = useState(0);
  const handleIconClick = (index) => {
    setActiveIconIndex(index);
    const navIconElement = document.getElementsByClassName("nav-icon")[index];
    const offsetTop = navIconElement.offsetTop;
    setSlideOffset(offsetTop);
  };
  const handleLogoClick = () => {
    setActiveIconIndex(null);
  };
  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };
  useEffect(() => {
    const handleResize = () => {
      if (activeIconIndex !== null) {
        const navIconElement =
          document.getElementsByClassName("nav-icon")[activeIconIndex];
        const offsetTop = navIconElement.offsetTop;
        setSlideOffset(offsetTop);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIconIndex]);
  return (
    <div className="nav">
      <div className="nav-logo" onClick={handleLogoClick}>
        <Link to="/main">
          <img src={Logo} alt="fastcampusLogo" />
        </Link>
        {activeIconIndex !== null && (
          <div className="slide" style={{ top: slideOffset + "px" }}></div>
        )}
      </div>
      <div>
        <div className="nav-icon" onClick={() => handleIconClick(0)}>
          <Link to="/mypage">
            <img src={Profile} alt="profile" />
          </Link>
        </div>
        <div className="word">마이페이지</div>
      </div>
      <div>
        <div className="nav-icon" onClick={() => handleIconClick(1)}>
          <Link to="/apply-list">
            <img src={Edit} alt="vacation" />
          </Link>
        </div>
        <div className="word">휴가관리</div>
      </div>
      <div>
        <div className="nav-icon" onClick={() => handleIconClick(2)}>
          <Link to="/notice">
            <img src={Bell} alt="announcement" />
          </Link>
        </div>
        <div className="word">공지사항</div>
      </div>
      <div>
        <div className="nav-icon" onClick={() => handleIconClick(3)}>
          <Link to="/Reference">
            <img src={Folder} alt="reference" />
          </Link>
        </div>
        <div className="word">자료실</div>
      </div>
      <Button type="button" onClick={handleLogout}>
        로그아웃
      </Button>
    </div>
  );
}
export default SideBar;
