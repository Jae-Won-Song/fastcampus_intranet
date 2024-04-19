import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Button from "../components/Button";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";
import { ref, set } from "firebase/database";
import { FirebaseError } from "firebase/app";

function JoinPage() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [tel, setTel] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "userName") {
      setUserName(value);
    } else if (name === "tel") {
      setTel(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || !userName || !tel) {
      alert("입력해주세요.");
    }
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        userName,
        tel,
      );

      set(ref(db, `users/${credentials.user.uid}`), {
        name: credentials.user.displayName,
        image: credentials.user.photoURL,
      });

      await updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: "/src/assets/images/icon_user.svg",
        phoneNumber: tel,
      });
      console.log(auth.currentUser);
      // navigate("/main");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      }
    }
  };

  return (
    <div>
      <div className="join">
        <header className="join__header">
          <h1 className="logo">
            <a className="img-wrap" href="./">
              <img
                src="src/assets/images/logo_fastcampus_column.svg"
                alt="fastcampus"
              />
            </a>
          </h1>
          <h2 className="title">수강생용 인트라넷 회원가입</h2>
        </header>
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email" className="label">
              이메일(아이디)
            </label>
            <div className="input-wrap">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="fastcampus@email.com"
                className="input"
                required
                value={email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="password" className="label">
              비밀번호
            </label>
            <div className="input-wrap">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호"
                className="input"
                minLength="6"
                maxLength="20"
                required
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="password" className="label">
              비밀번호 확인
            </label>
            <div className="input-wrap">
              <input
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                placeholder="비밀번호"
                className="input"
                minLength="6"
                maxLength="20"
                required
                value={password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="userName" className="label">
              이름
            </label>
            <div className="input-wrap">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="이름을 입력하세요"
                className="input"
                required
                maxLength="10"
                value={userName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="tel" className="label">
              전화번호
            </label>
            <div className="input-wrap">
              <input
                type="number"
                name="tel"
                id="tel"
                placeholder="숫자만 입력하세요(&lsquo;-&rsquo;제외)"
                className="input"
                required
                maxLength="11"
                value={tel}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button type="submit" size="entire" onClick={handleSubmit}>
            완료
          </Button>
        </form>
        {error !== "" ? <p className="error-message">{error}</p> : null}
      </div>
    </div>
  );
}

export default JoinPage;