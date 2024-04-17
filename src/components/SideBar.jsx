import React, { useState } from 'react';

function SideBar() {
	const [slidePosition, setSlidePosition] = useState(264); // 초기 슬라이드 위치

	const handleIconClick = topPosition => {
		setSlidePosition(topPosition); // 클릭된 아이콘의 top 위치로 슬라이드 위치 변경
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
						className="nav-icon"
						onClick={() => handleIconClick(264)}>
						<img
							src="src/assets/images/icon_profile.svg"
							alt="profile"
						/>
					</div>
					<div className="word">마이페이지</div>
					{/* 슬라이드 위치 조정 */}
					<div
						className="slide"
						style={{ top: slidePosition + 'px' }}></div>
				</div>
				{/* 두 번째 아이콘 */}
				<div>
					<div
						className="nav-icon"
						onClick={() => handleIconClick(404)}>
						<img
							src="src/assets/images/icon_edit.svg"
							alt="vacation"
						/>
					</div>
					<div className="word">휴가관리</div>
				</div>
				{/* 세 번째 아이콘 */}
				<div>
					<div
						className="nav-icon"
						onClick={() => handleIconClick(544)}>
						<img
							src="src/assets/images/icon_bell.svg"
							alt="announcement"
						/>
					</div>
					<div className="word">공지사항</div>
				</div>
				{/* 네 번째 아이콘 */}
				<div>
					<div
						className="nav-icon"
						onClick={() => handleIconClick(684)}>
						<img
							src="src/assets/images/icon_folder.svg"
							alt="reference"
						/>
					</div>
					<div className="word">자료실</div>
				</div>
				<div className="nav-logout-btn">로그아웃</div>
			</div>
		</>
	);
}

export default SideBar;
