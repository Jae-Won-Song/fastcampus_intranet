import "../styles/main.scss";
import "../styles/components/MainPage.scss";
import BlockBox from "../components/BlockBox";
import CheckInOutRecord from "../components/CheckInOutRecord";
import TodoList from "../components/TodoList/TodoList";
import Notice from "../components/Notice";
import CurrentTime from "../components/CurrentTime";
import ToggleButton from "../components/ToggleButton";
import ClockWhite from "../../public/icon_clock_border.svg";
import ClockBlack from "../../public/icon_clock.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";

function MainPage() {
  const user = auth.currentUser;

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
                <img src="../../public/img_user.png" alt="img_user" />
                <span>{user?.displayName}님</span>
                <ToggleButton record="입실하기"></ToggleButton>
              </div>
              <div className="record">
                <CheckInOutRecord position="top">
                  <div className="record__info">
                    <img className="clock" src={ClockWhite} alt="ClockWhite" />
                    <span>입실 시간</span>
                  </div>
                  <div className="record__time">10:00</div>
                </CheckInOutRecord>
                <CheckInOutRecord position="bottom">
                  <div className="record__info">
                    <img className="clock" src={ClockBlack} alt="ClockBlack" />
                    <span>퇴실 시간</span>
                  </div>
                  <div className="record__time">19:00</div>
                </CheckInOutRecord>
              </div>
            </BlockBox>
          </div>
          <div className="boxes__bottom">
            {/* 공지사항 박스 */}
            <BlockBox size="medium">
              <div className="notice">공지사항</div>
              <Notice date="2024.04.05" title="토이 프로젝트 I 안내" />
              <Notice
                date="2024.04.04"
                title="이정환 강사님 현직자 특강 만족도 조사 안내"
              />
              <Notice date="2024.04.02" title="훈련장려금 신청 지연 안내" />
              <Notice
                date="2024.04.01"
                title="그룹스터디 회고 이벤트 결과 발표"
              />
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
