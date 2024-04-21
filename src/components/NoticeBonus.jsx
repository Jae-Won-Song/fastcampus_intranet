function NoticeBonus() {
  return (
    <>
      <div className="notice-bonus">
        <div className="notice-bonus-area">
          <span className="title">훈련장려금 신청 지연 안내</span>
          <div className="line"></div>
          <ul className="content">
            훈련장려금 신청이 지연됨을 사전에 안내드립니다.
            <li>
              장려금확인서 및 환수동의서가 빠르게 취합되고, 출결이슈가 없는
              과정부터 순차적으로 신청됩니다.
            </li>
            <li>
              신청후에는 공지로 안내드리며, 해당내용문의는 #1_행정문의 에서 새
              스레드로 문의주시길 바랍니다.
            </li>
          </ul>
          <ul className="content">
            <li>[ 사유 ] 장려금 확인서 및 환수동의서 취합안됨</li>
            <li>일부 수강생의 공가/병가 등의 서류 제출안됨</li>
            <li>일부 수강생의 수업미참여임에도 QR체크 진행</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NoticeBonus;
