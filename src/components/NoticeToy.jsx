function NoticeToy() {
  return (
    <>
      <div className="notice-toy">
        <div className="notice-toy-area">
          <span className="title">토이 프로젝트 I 안내</span>
          <div className="line"></div>
          <ul className="content">
            ✔️ 과제 주제
            <li>직원들을 위한 인트라넷 페이지</li>
            <li>구현사항 확인하기 </li>
            <li>깃허브 페이지는 차주 월요일에 안내 드리겠습니다!</li>
          </ul>
          <ul className="content">
            ✔️ 진행 기간
            <li>~ 24. 04. 21 (일)</li>
            <li>구현사항 확인하기 </li>
          </ul>
          <ul className="content">
            ✔ ️팀 안내
            <li>토이 프로젝트는 팀별로 진행됩니다!</li>
            <li>
              팀 편성은 해당 스레드 첨부 파일 사진과 수강생 공유용 시트를 확인해
              주시길 바랍니다.
            </li>
            <li>수강생 공유용 시트</li>
          </ul>
          <ul className="content">
            ✔ ️멘토링 안내
            <li>
              <img src="src/assets/images/group_list.png" alt="list" />
            </li>
            <li>주차별로 토이 프로젝트 실시간 멘토링을 받을 수 있습니다.</li>
            <li>담당 멘토는 스레드 첨부 파일 사진에서 확인 가능합니다</li>
            <li>기존 멘토링 방식(사전 요청서, 일정 안내)과 동일합니다.</li>
          </ul>
          <ul className="content">
            ✔️ 대면 강의장 안내
            <li>
              프로젝트 기간에는 대면 강의장을 사용하실 수 있습니다! 자유롭게
              사용해 보세요! 위치
            </li>
            <li>서울 강남구 강남대로 364 (미왕빌딩1층 11D 강의장)</li>
            <li>차주 월요일부터 사용 가능합니다.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NoticeToy;