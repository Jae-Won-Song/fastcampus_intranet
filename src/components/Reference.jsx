import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

function Reference() {
	useEffect(() => {
		// Swiper 초기화
		const mySwiper = new Swiper(".swiper-container", {
			// Swiper 옵션 설정
			slidesPerView: 3, // 한 번에 보여질 슬라이드 개수
			spaceBetween: 30 // 슬라이드 사이의 간격
			// 기타 옵션들을 필요에 따라 추가할 수 있습니다.
		});

		// 컴포넌트가 언마운트될 때 Swiper 인스턴스를 파괴합니다.
		return () => {
			mySwiper.destroy();
		};
	}, []);

	return (
		<>
			<div className="reference">
				<div className="reference-area">
					<span className="title">자료실</span>
					<div className=".references">
						<div className="swiper-container">
							<div className="swiper-wrapper">
								{/* 슬라이드들을 포함합니다 */}
								<div className="swiper-slide">Slide 1</div>
								<div className="swiper-slide">Slide 2</div>
								<div className="swiper-slide">Slide 3</div>
								<div className="swiper-button-prev"></div>
								<div className="swiper-button-next"></div>
								{/* 필요한 만큼 슬라이드를 추가할 수 있습니다 */}
							</div>
							{/* 이전/다음 버튼 등을 포함할 수 있습니다 */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Reference;
