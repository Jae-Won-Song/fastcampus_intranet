import React, { useState, useRef, useEffect } from "react";
import Button from "../components/Button";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import RecordInTime from "../components/RecordInTime";
import RecordOutTime from "../components/RecordOutTime";
import icon_user from "../assets/images/icon_user.svg";
import icon_graduate from "../assets/images/icon_user_graduate.svg";
import icon_clock_border from "../assets/images/icon_clock_border.svg";
import icon_clock from "../assets/images/icon_clock.svg";
import icon_umbrella from "../assets/images/icon_umbrella_beach.svg";
import icon_clipboard from "../assets/images/icon_clipboard_check.svg";
import { getDatabase, ref, get, update } from "firebase/database";
import { updateProfile } from "firebase/auth";

const MyPage = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null); // 사용자 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [imgFile, setImgFile] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserData(user.uid);
    } else {
      setLoading(false); // 사용자가 없는 경우 로딩 상태 종료
    }
  }, [user]);

  const fetchUserData = async (userId) => {
    const database = getDatabase();
    const userRef = ref(database, `users/${userId}`);

    try {
      const snapshot = await get(userRef);
      const userData = snapshot.val();
      if (userData) {
        setUserData(userData);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false); // 데이터 로드 완료 후 로딩 상태 종료
    }
  };

  const loadUserData = () => {
    // 내정보 불러오기 버튼 클릭 시 동작하는 함수
    if (userData) {
      setEmail(userData.email || "");
      setName(userData.userName || "");
      setPhoneNum(userData.phone || "");
    } else {
      console.log("User data not available");
    }
  };

  const fileInput = useRef(null);

  const handleButtonClick = (e) => {
    fileInput.current.click();
  };

  // 이미지를 Base64로 인코딩하여 로컬 스토리지에 저장하는 함수
  const saveImageToLocalStorage = (imagePath, imageData) => {
    localStorage.setItem(imagePath, imageData);
  };

  // 파일 업로드 시 이미지를 Base64로 인코딩하고 로컬 스토리지에 저장하는 함수
  const saveImgFile = (event) => {
    const file = fileInput.current.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      // 이미지를 Base64로 인코딩하여 로컬 스토리지에 저장
      saveImageToLocalStorage("profile_image", e.target.result);
      // state에도 저장
      setImgFile(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  // 로컬 스토리지에서 이미지를 가져오는 함수
  const getImageFromLocalStorage = (imagePath) => {
    return localStorage.getItem(imagePath);
  };

  // 페이지가 로드될 때 이미지를 가져와서 설정하는 함수
  useEffect(() => {
    const storedImage = getImageFromLocalStorage("profile_image");
    if (storedImage) {
      setImgFile(storedImage);
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // 수정 버튼을 클릭할 때 이미지를 저장하는 함수
  const handleModifyButtonClick = () => {
    saveImgFile(); // 이미지 저장
    modiConfirmModal(); // 프로필 수정 확인
  };

  // 프로필 수정 확인 버튼 클릭 시 동작하는 함수
  const modiConfirmModal = async () => {
    try {
      console.log("이메일:", email);
      console.log("이름:", name);
      console.log("전화번호:", phoneNum);

      if (user) {
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);
        await update(userRef, {
          email: email,
          userName: name,
          phone: phoneNum,
        });

        // 사용자 프로필 업데이트
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        console.log("데이터가 성공적으로 업데이트되었습니다.");
      } else {
        console.log("사용자가 인증되지 않았습니다.");
      }

      setIsOpen(false);
    } catch (error) {
      console.error("데이터 업데이트 중 오류 발생:", error);
    }
  };
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
  return (
    <div>
      <div className="main-wrapper">
        <div className="main-content">
          <div className="left-page">
            <div className="left-page__image">
              <div className="image-wrapper">
                <div>
                  <img
                    src={imgFile ? imgFile : icon_user}
                    alt="프로필 이미지"
                  />
                  <br />
                  <Button onClick={handleButtonClick} color="grayBorder">
                    파일 업로드
                  </Button>
                  <input
                    type="file"
                    onChange={saveImgFile}
                    ref={fileInput}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <div className="left-page__data">
              <div className="data-wrapper">
                <div className="email-content">
                  이메일(아이디)
                  {/* 사용자 정보 입력 필드 */}
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder={email}
                    className="input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="name-content">
                  이름
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={name}
                    className="input"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="phone-num-content">
                  전화번호
                  <input
                    type="text"
                    name="phone-num"
                    id="phone-num"
                    placeholder={phoneNum}
                    className="input"
                    onChange={(e) => setPhoneNum(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="left-page__modi-btn">
              {/* 내정보 불러오기 버튼 */}

              <div className="modi-btn-wrapper">
                <Button onClick={loadUserData}>내정보 불러오기</Button>
                <Button
                  color="black"
                  className="profile-modi-btn"
                  onClick={openModal}
                >
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
                    <img src={icon_graduate} alt="graduate icon" />
                    현재 수강중인 클래스
                  </div>
                  프론트엔드 부트캠프 8기
                </div>
              </div>
              <div className="status-data-wrapper">
                <div className="check-in-time">
                  <div className="text-data">
                    <img src={icon_clock_border} alt="clock icon" />
                    오늘 입실 시간
                  </div>
                  <RecordInTime></RecordInTime>
                </div>
              </div>
              <div className="status-data-wrapper">
                <div className="check-out-time">
                  <div className="text-data">
                    <img src={icon_clock} alt="clock icon" />
                    오늘 퇴실 시간
                  </div>
                  <RecordOutTime></RecordOutTime>
                </div>
              </div>
              <div className="status-data-wrapper">
                <div className="vacation-status">
                  <div className="text-data">
                    <img src={icon_umbrella} alt="umbrella" />
                    4월 휴가 신청 상태
                  </div>
                  <div className="status--btn">
                    <span>신청 완료</span>
                    <Button>
                      <Link to="/apply-list">휴가 신청하기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-page-bottom__data">
              <div className="attendance-status">
                <img src={icon_clipboard} alt="clipboard icon" />
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
        style={customStyles}
      >
        <div className="confirm-modal">
          <div className="modal__body">
            <div className="confirm-text">프로필을 수정하시겠습니까?</div>
            <div className="modal__btn-wrapper">
              <Button onClick={modiConfirmModal}>수정</Button>
              <Button color="black" onClick={closeModal}>
                취소
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyPage;