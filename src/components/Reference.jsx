import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
function Reference() {
  return (
    <>
      <div className="reference">
        <div className="reference-area">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <a href="https://fastcampus.co.kr/media_data_sdcontrolnet">
                <img
                  className="reference-image"
                  src="src/assets/images/controlnet.png"
                  alt="controlnet"
                />
                <div className="content-area">
                  <span className="content">
                    스테이블 디퓨전 완성도 높이는 고급 기술 컨트롤넷(controlnet)
                    사용법
                  </span>
                  <span className="subject">Stable Diffusion</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://fastcampus.co.kr/story_article_newkafka">
                <img
                  className="reference-image"
                  src="src/assets/images/apacheKafka.png"
                  alt="controlnet"
                />
                <div className="content-area">
                  <span className="content">
                    Apache Kafka (아파치 카프카)로 구축하는 데이터 파이프라인과
                    대용량 데이터 처리까지
                  </span>
                  <span className="subject">DevOps / Infra</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://fastcampus.co.kr/media_data_sdwebui">
                <img
                  className="reference-image"
                  src="src/assets/images/stablediffusion.png"
                  alt="controlnet"
                />
                <div className="content-area">
                  <span className="content">
                    스테이블 디퓨전 webui 처음이라면 | 다운, 사용법 가이드
                  </span>
                  <span className="subject">Stable Diffusion</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://fastcampus.co.kr/story_article_newcomputer">
                <img
                  className="reference-image"
                  src="src/assets/images/cs.png"
                  alt="controlnet"
                />
                <div className="content-area">
                  <span className="content">
                    실무의 장벽, 컴퓨터공학 : CS지식 부재로 인한 개발자 취업 후
                    현실
                  </span>
                  <span className="subject">Engineering Development</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://fastcampus.co.kr/story_article_k8s">
                <img
                  className="reference-image"
                  src="src/assets/images/kubernetes.png"
                  alt="controlnet"
                />
                <div className="content-area">
                  <span className="content">
                    백엔드 개발자가 활용할 줄 알아야 하는 Kubernetes, 그게 따로
                    있어?
                  </span>
                  <span className="subject">Backend Development</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://fastcampus.co.kr/story_article_LLM">
                <img
                  className="reference-image"
                  src="src/assets/images/llm.png"
                  alt="controlnet"
                />
                <div className="content-area">
                  <span className="content">
                    LLM으로 프롬프트 엔지니어링 시작하기
                  </span>
                  <span className="subject">Prompt Engineering</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://fastcampus.co.kr/story_article_mlopspj">
                <img
                  className="reference-image"
                  src="src/assets/images/mlops.png"
                  alt="controlnet"
                />
                <div className="content-area">
                  <span className="content">
                    MLOps란? | MLOps 구성요소, 실제 활용 사례, 학승방법 총정리
                    가이드
                  </span>
                  <span className="subject">Machine Learning</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="https://fastcampus.co.kr/media_dgn_bsbartwork">
                <img
                  className="reference-image"
                  src="src/assets/images/commercialArtwork.png"
                  alt="controlnet"
                />
                <div className="content-area">
                  <span className="content">
                    커머셜 아티웍과 인공지능의 결합: AI 이미지 실무 활용
                  </span>
                  <span className="subject">AI Commercial Artwork</span>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default Reference;