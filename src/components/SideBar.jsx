function SideBar() {
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
					<div className="nav-icon">
						<img
							src="src/assets/images/icon_profile.svg"
							alt="profile"
						/>
					</div>
					<div className="word">마이페이지</div>
				</div>
				<div>
					<div className="nav-icon">
						<img
							src="src/assets/images/icon_edit.svg"
							alt="vacation"
						/>
					</div>
					<div className="word">휴가관리</div>
				</div>
				<div>
					<div className="nav-icon">
						<img
							src="src/assets/images/icon_bell.svg"
							alt="announcement"
						/>
					</div>
					<div className="word">공지사항</div>
				</div>
				<div>
					<div className="nav-icon">
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
