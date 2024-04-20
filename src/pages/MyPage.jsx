import React, { useState, useRef, useEffect } from "react";
import Button from "../components/Button";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import RecordInTime from "../components/RecordInTime";
import RecordOutTime from "../components/RecordOutTime";
import icon_user from "../assets/images/icon_user.svg";
import { getDatabase, ref, get, onValue, off } from "firebase/database";



const MyPage = () => {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);


	

  const customStyles = {
		content: {
      width: "35rem",
      height: "20rem",
      padding: "2.5rem",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "none",
      borderRadius: "1.5rem",
      marginRight: "-50%",
			backgroudcolor: "white",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNum, setPhoneNum] = useState('');
	const [photoUrl, setPhotoUl] = useState('');

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

		// 이메일 입력 필드의 값 또는 placeholder 값 가져오기
		const photoUrlValue = photoUrl || user?.photoURL || '';
		console.log(photoUrlValue);

		// 이메일 입력 필드의 값 또는 placeholder 값 가져오기
		const emailValue = email || user?.email || '';
		console.log(emailValue);

		// 이름 입력 필드의 값 또는 placeholder 값 가져오기
		const nameValue = name || user?.displayName || '';
		console.log(nameValue);

		// 전화번호 입력 필드의 값 또는 placeholder 값 가져오기
		const phoneNumValue = phoneNum || user?.phoneNumber || '';
		console.log(phoneNumValue);

		setIsOpen(false);
	};

  const fileInput = useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  const [imgFile, setImgFile] = useState("");

	const saveImgFile = (event) => {
    const file = fileInput.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
		setPhotoUl(event.target.value);
  };








	// // Firebase 데이터베이스에서 users 항목의 데이터를 가져오는 함수
	// const fetchUsersData = () => {
	// 	// 데이터베이스에 대한 참조를 가져옵니다.
	// 	const database = getDatabase();
		
	// 	// 'users' 경로에 대한 참조를 생성합니다.
	// 	const usersRef = ref(database, 'users');

	// 	// 'users' 경로에 대한 데이터 변경 이벤트를 등록하고 데이터를 가져옵니다.
	// 	onValue(usersRef, (snapshot) => {
	// 		const userData = snapshot.val();
	// 		if (userData) {
	// 			// userData 객체에는 'users' 항목의 데이터가 포함됩니다.
	// 			console.log(userData);

	// 			// // userData 객체의 첫 번째 키를 가져옵니다.
	// 			// const firstUserKey = Object.keys(userData)[1];
	// 			// // 첫 번째 사용자 데이터를 가져옵니다.
	// 			// const firstUserData = userData[firstUserKey];
	// 			// console.log(firstUserData.email, firstUserData.userName, firstUserData.phone, user.uid);
	// 		}
	// 	});
	// };

	// // 함수를 호출하여 users 항목의 데이터를 가져옵니다.
	// fetchUsersData();	




	







	// // Firebase 데이터베이스에서 특정 키를 사용하여 users 항목의 데이터를 가져오는 함수
	// const fetchUserDataByKey = (userKey) => {
	// 	// 데이터베이스에 대한 참조를 가져옵니다.
	// 	const database = getDatabase();

	// 	// 'users' 경로와 특정 키를 결합하여 참조를 생성합니다.
	// 	const userRef = ref(database, `users/${userKey}`);

	// 	// 해당 참조에 대한 데이터 변경 이벤트를 등록하고 데이터를 가져옵니다.
	// 	onValue(userRef, (snapshot) => {
	// 		const userData = snapshot.val();
	// 		if (userData) {
	// 			// userData는 userKey에 해당하는 사용자의 데이터입니다.
	// 			console.log(userData);
	// 		} else {
	// 			console.log('No data available');
	// 		}
	// 	}, {
	// 		onlyOnce: true  // 이벤트를 단 한 번만 수행하고 리스너를 자동 해제합니다.
	// 	});
	// };

	// // 함수를 호출하여 'user123'이라는 키의 데이터를 가져옵니다.
	// fetchUserDataByKey(user.uid);



	

	// // Firebase 데이터베이스에서 특정 키를 사용하여 users 항목의 데이터를 가져오는 함수
	// const fetchUserDataByKey = async (userKey) => {
	// 	// 데이터베이스에 대한 참조를 가져옵니다.
	// 	const database = getDatabase();

	// 	// 'users' 경로와 특정 키를 결합하여 참조를 생성합니다.
	// 	const userRef = ref(database, `users/${userKey}`);

	// 	try {
	// 		// 해당 참조에 대한 데이터를 비동기적으로 가져옵니다.
	// 		const snapshot = await get(userRef);
	// 		const userData = snapshot.val();
	// 		if (userData) {
	// 			// userData는 userKey에 해당하는 사용자의 데이터입니다.
	// 			console.log(userData);
	// 		} else {
	// 			console.log('No data available');
	// 		}
	// 	} catch (error) {
	// 		console.error('Error fetching user data:', error);
	// 	}
	// };

	// // 함수를 호출하여 'user123'이라는 키의 데이터를 가져옵니다.
	// fetchUserDataByKey(user.uid);




// Firebase 데이터베이스에서 특정 키를 사용하여 users 항목의 데이터를 가져오는 함수
const fetchUserDataByKey = async (userKey) => {
  const database = getDatabase();
  const userRef = ref(database, `users/${userKey}`);

  try {
    const snapshot = await get(userRef);
    const userData = snapshot.val();
    if (userData) {
      console.log(userData);
      return userData;  // 성공적으로 데이터를 가져온 경우, userData 반환
    } else {
      console.log('No data available');
      return null;  // 데이터가 없는 경우, null 반환
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;  // 오류가 발생한 경우, null 반환
  }
};

// 함수 사용 예제
fetchUserDataByKey()
  .then(userData => {
    if (userData) {
      console.log('User data fetched successfully:', userData);
    } else {
      console.log('No user data found.');
    }
  })
  .catch(error => {
    console.error('Failed to fetch user data:', error);
  });





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
{/* 
 									<h1>User 정보</h1>
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