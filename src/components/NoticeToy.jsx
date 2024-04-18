function NoticeToy() {
	return (
		<>
			<div className="notice-toy">
				<div className="notice-toy-area">
					<span className="title">토이 프로젝트 I 안내</span>
					<div className="line"></div>
					<ul className="content">
						✔️ 과제 주제
						<ol>직원들을 위한 인트라넷 페이지</ol>
						<ol>구현사항 확인하기 </ol>
						<ol>깃허브 페이지는 차주 월요일에 안내 드리겠습니다!</ol>
					</ul>
					<ul className="content">
						✔️ 진행 기간
						<ol>~ 24. 04. 21 (일)</ol>
						<ol>구현사항 확인하기 </ol>
					</ul>
					<ul className="content">
						✔ ️팀 안내
						<ol>토이 프로젝트는 팀별로 진행됩니다!</ol>
						<ol>
							팀 편성은 해당 스레드 첨부 파일 사진과 수강생 공유용 시트를 확인해
							주시길 바랍니다.
						</ol>
						<ol>수강생 공유용 시트</ol>
					</ul>
					<ul className="content">
						✔ ️멘토링 안내
						<ol>
							<img
								src="src/assets/images/group_list.png"
								alt="list"
							/>
						</ol>
						<ol>주차별로 토이 프로젝트 실시간 멘토링을 받을 수 있습니다.</ol>
						<ol>담당 멘토는 스레드 첨부 파일 사진에서 확인 가능합니다</ol>
						<ol>기존 멘토링 방식(사전 요청서, 일정 안내)과 동일합니다.</ol>
					</ul>
					<ul className="content">
						✔️ 대면 강의장 안내
						<ol>
							프로젝트 기간에는 대면 강의장을 사용하실 수 있습니다! 자유롭게
							사용해 보세요! 위치
						</ol>
						<ol>서울 강남구 강남대로 364 (미왕빌딩1층 11D 강의장)</ol>
						<ol>차주 월요일부터 사용 가능합니다.</ol>
					</ul>
				</div>
			</div>
		</>
	);
}

export default NoticeToy;
