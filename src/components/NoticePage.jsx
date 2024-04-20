import { Link } from "react-router-dom";

function notices() {
  return (
    <>
      <div className="notice">
        <div className="notice-area">
          <span className="title">공지사항</span>
          <div className="notices">
            <Link to="/notice-toy">
              <span>토이프로젝트 I 안내</span>
              <img
                className="arrow-right"
                src="src/assets/images/icon_chevron_right.svg"
                alt="fastcampus"
              />
            </Link>
            <span className="date">2024.04.05</span>
          </div>
          <div className="notices">
            <Link to="/notice-satisfaction">
              <span>이정환 강사님 현직자 특강 만족도 조사 안내</span>
              <img
                className="arrow-right"
                src="src/assets/images/icon_chevron_right.svg"
                alt="fastcampus"
              />
            </Link>
            <span className="date">2024.04.04</span>
          </div>
          <div className="notices">
            <Link to="/notice-bonus">
              <span>훈련장려금 신청 지연 안내</span>
              <img
                className="arrow-right"
                src="src/assets/images/icon_chevron_right.svg"
                alt="fastcampus"
              />
            </Link>
            <span className="date">2024.04.02</span>
          </div>
          <div className="notices">
            <Link to="/notice-event">
              <span>그룹스터디 회고 이벤트 결과 발표</span>
              <img
                className="arrow-right"
                src="src/assets/images/icon_chevron_right.svg"
                alt="fastcampus"
              />
            </Link>
            <span className="date">2024.04.02</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default notices;
