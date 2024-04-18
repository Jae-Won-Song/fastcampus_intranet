<<<<<<< HEAD
import { Link } from 'react-router-dom';

function notices() {
	return (
		<>
			<div className="notice">
				<div className="notice-area">
					<span className="title">공지사항</span>
					<div className="notices">
						<Link to="/NoticeToy">
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
						<span>이정환 강사님 현직자 특강 만족도 조사 안내</span>
						<img
							className="arrow-right"
							src="src/assets/images/icon_chevron_right.svg"
							alt="fastcampus"
						/>
						<span className="date">2024.04.04</span>
					</div>
					<div className="notices">
						<span>훈련장려금 신청 지연 안내</span>
						<img
							className="arrow-right"
							src="src/assets/images/icon_chevron_right.svg"
							alt="fastcampus"
						/>
						<span className="date">2024.04.02</span>
					</div>
					<div className="notices">
						<span>그룹스터디 회고 이벤트 결과 발표</span>
						<img
							className="arrow-right"
							src="src/assets/images/icon_chevron_right.svg"
							alt="fastcampus"
						/>
						<span className="date">2024.04.02</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default notices;
=======
import "../styles/components/Notice.scss";
import ArrowRight from "../../public/icon_arrow_right.svg";

function Notice(props) {
	return (
		<div className="notice-grid">
			<div className="date">{props.date}</div>
			<div className="title">{props.title}</div>
			<img
				src={ArrowRight}
				alt="ArrowRight"
			/>
		</div>
	);
}

export default Notice;
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
