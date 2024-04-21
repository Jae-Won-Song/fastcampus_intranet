import BlockBox from "../components/BlockBox";
import CheckInOutRecord from "../components/CheckInOutRecord";
import TodoList from "../components/TodoList/TodoList";
import Notice from "../components/Notice";
import CurrentTime from "../components/CurrentTime";
import ToggleButton from "../components/ToggleButton";
import ClockWhite from "../../public/icon_clock_border.svg";
import ClockBlack from "../../public/icon_clock.svg";
import { auth } from "../firebase/config";
import RecordInTime from "../components/RecordInTime";
import RecordOutTime from "../components/RecordOutTime";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserIcon from "../../public/img_user.png"

function MainPage() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const date = new Date().toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <>
      <div className="app">
        <div className="boxes">
          <div className="boxes__top">
            {/* 시간 박스 */}
            <BlockBox size="small">
              <div className="boxes__top_date">{date}</div>
              <div className="boxes__top_time">
                <CurrentTime />
              </div>
            </BlockBox>
            {/* 프로필 박스 */}
            <BlockBox size="large">
              <div className="boxes__top_profile">
                <img src={UserIcon} alt="img_user" />
                <span>{user?.displayName}님</span>
                <ToggleButton record="입실하기"></ToggleButton>
              </div>
              <div className="record">
                <CheckInOutRecord position="top">
                  <div className="record__info">
                    <img className="clock" src={ClockWhite} alt="ClockWhite" />
                    <span>입실 시간</span>
                  </div>
                  <RecordInTime />
                </CheckInOutRecord>
                <CheckInOutRecord position="bottom">
                  <div className="record__info">
                    <img className="clock" src={ClockBlack} alt="ClockBlack" />
                    <span>퇴실 시간</span>
                  </div>
                  <RecordOutTime />
                </CheckInOutRecord>
              </div>
            </BlockBox>
          </div>
          <div className="boxes__bottom">
            {/* 공지사항 박스 */}
            <BlockBox size="medium">
              <div className="notice">공지사항</div>
              <Link to='/notice-toy'><Notice date="2024.04.05" title="토이 프로젝트 I 안내" /></Link>
              <Link to='/notice-satisfaction'><Notice date="2024.04.04" title="이정환 강사님 현직자 특강 만족도 조사 안내" /></Link>
              <Link to='/notice-bonus'><Notice date="2024.04.02" title="훈련장려금 신청 지연 안내" /></Link>
              <Link to='/notice-event'><Notice date="2024.04.01" title="그룹스터디 회고 이벤트 결과 발표" /></Link>
            </BlockBox>
            {/* 투두리스트 박스 */}
            <BlockBox size="medium">
              <TodoList />
            </BlockBox>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPage;