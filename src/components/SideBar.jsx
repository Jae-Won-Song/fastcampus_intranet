import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

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
						to="src/components/Notice.jsx"
						className="nav-icon"
						onClick={() => handleIconClick(264)}>
						<img
							src="src/assets/images/icon_profile.svg"
							alt="profile"
						/>
					</div>
					<div className="word">마이페이지</div>
					<div
						className="slide"
						style={{ top: slidePosition + "px" }}></div>
				</div>
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
				<div>
					<div
						className="nav-icon"
						onClick={() => handleIconClick(544)}>
						<Link to="/Notice">
							<img
								src="src/assets/images/icon_bell.svg"
								alt="announcement"
							/>
						</Link>
					</div>
					<div className="word">공지사항</div>
				</div>
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
				<Button type="button">로그아웃</Button>
			</div>
		</>
	);
}

export default SideBar;
