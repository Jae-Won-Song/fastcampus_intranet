import React, { useState, useRef, useEffect } from "react";
import Button from "../components/Button";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import RecordInTime from "../components/RecordInTime";
import RecordOutTime from "../components/RecordOutTime";
import icon_user from "../assets/images/icon_user.svg";

const MyPage = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const customStyles = {
		overlay: {
			backgroundColor: " #0000008f",
			width: "100%",
			height: "100vh",
			zIndex: "10",
			position: "fixed",
			top: "0",
			left: "0",
		},
    content: {
      width: "25%",
      height: "28%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
			borderRadius: "24px",
			backgroundColor: "white",
      transform: "translate(-50%, -50%)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

	function afterOpenModal() {
		subtitle.style.color = "#f00";
	}

  function closeModal() {
    setIsOpen(false);
  }

	// 
	
    const [name, setName] = useState(user?.displayName || ''); // 초기값은 user.displayName이거나 빈 문자열
    const [email, setEmail] = useState(user?.email || ''); // 초기값은 user.email이거나 빈 문자열
		const [phoneNum, setPhoneNum] = useState(user?.phoneNumber || ''); // 초기값은 user.email이거나 빈 문자열

    const handleEmailChange = (event) => {
			setEmail(event.target.value);
    };

    const handleNameChange = (event) => {
			setName(event.target.value);
    };

    const handlePhoneNumChange = (event) => {
			setPhoneNum(event.target.value);
    };		
    const modiConfirmModal = () => {
        // 이메일 상태 가져오기
        console.log("현재 이메일 값:", email);
				
        // 이름 상태 가져오기
        console.log("현재 이름 값:", name);

				console.log("현재 전화번호 값:", phoneNum);
				setIsOpen(false);
    };

  const fileInput = useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const [imgFile, setImgFile] = useState("");

	const saveImgFile = () => {
    const file = fileInput.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };
	
	return (
		<div>
			<div className="main-wrapper">
				<div className="main-content">
					<div className="left-page">
						<div className="left-page__image">
							<div className="image-wrapper">
								<div>
									<img
									src={imgFile ? imgFile :icon_user}
									alt="프로필 이미지"
									/>
									<br />
									<Button onClick={handleButtonClick} color="grayBorder">파일 업로드</Button>
									<input type="file" onChange={saveImgFile} ref={fileInput} style={{ display: "none" }} />
								</div>
							</div>
						</div>
						<div className="left-page__data">
							<div className="data-wrapper">
								<div className="email-content">
									이메일(아이디)

 									{/* <h1>User 정보</h1>
     							<pre>{JSON.stringify(user, null, 2)}</pre> */}

									<br />
									<input
										type="text"
										name="email"
										id="email"
										placeholder={user?.email}
										className="input"
										onChange={handleEmailChange}
									/>
								</div>
								<div className="name-content">
									이름
									<br />
									<input
										type="text"
										name="name"
										id="name"
										placeholder={user?.displayName}
										className="input"
										onChange={handleNameChange}
									/>
								</div>
								<div className="phone-num-content">
									전화번호
									<br />
									<input
										type="text"
										name="phone-num"
										id="phone-num"
										placeholder={user?.phoneNumber}
										className="input"
										onChange={handlePhoneNumChange}
									/>
								</div>
							</div>
						</div>

						<div className="left-page__modi-btn">
							<div className="modi-btn-wrapper">
								<Button
									className="profile-modi-btn"
									onClick={openModal}>
									프로필 수정
								</Button>
							</div>
						</div>
					</div>
					<div className="right-page">
						<div className="right-page-top__data">
							<div className="status-data-wrapper">
								<div className="current-className">
									<div className="text-data">
										<img
											src="src/assets/images/icon_user_graduate.svg"
											alt=""
										/>{" "}
										현재 수강중인 클래스
									</div>
									프론트엔드 부트캠프 8기
								</div>
							</div>
							<div className="status-data-wrapper">
								<div className="check-in-time">
									<div className="text-data">
										<img
											src="src/assets/images/icon_clock_border.svg"
											alt=""
										/>{" "}
										오늘 입실 시간
									</div>
									<RecordInTime></RecordInTime>
								</div>
							</div>
							<div className="status-data-wrapper">
								<div className="check-out-time">
									<div className="text-data">
										<img
											src="src/assets/images/icon_clock.svg"
											alt=""
										/>{" "}
										오늘 퇴실 시간
									</div>
									<RecordOutTime></RecordOutTime>
								</div>
							</div>
							<div className="status-data-wrapper">
								<div className="vacation-status">
									<div className="text-data">
										<img
											src="src/assets/images/icon_umbrella_beach.svg"
											alt=""
										/>{" "}
										4월 휴가 신청 상태
									</div>
									<div className="status--btn">
										<span>신청 완료</span>
										<Button>
											<Link to="/apply-list">
												휴가 신청하기
											</Link>
										</Button>
									</div>
								</div>
							</div>
						</div>
						<div className="right-page-bottom__data">
							<div className="attendance-status">
								<img
									src="src/assets/images/icon_clipboard_check.svg"
									alt=""
								/>{" "}
								출결 현황
								<br />
								<div className="status-num">
									<div className="num-wrapper">
										<span>출석</span>
										<div className="circle">100</div>
									</div>
									<div className="num-wrapper">
										<span>지각</span>
										<div className="circle">2</div>
									</div>
									<div className="num-wrapper">
										<span>조퇴</span>
										<div className="circle">0</div>
									</div>
									<div className="num-wrapper">
										<span>외출</span>
										<div className="circle">1</div>
									</div>
									<div className="num-wrapper">
										<span>결석</span>
										<div className="circle">0</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}>
					<div className="confirm-modal">
						<div className="modal__body">
							<div className="confirm-text">프로필을 수정하시겠습니까?</div>
							<div className="modal__btn-wrapper">
								<Button onClick={modiConfirmModal}>수정</Button>
								<Button color="black" onClick={closeModal}>취소</Button>
							</div>
						</div>
					</div>
			</Modal>
		</div>
	);
};

export default MyPage;