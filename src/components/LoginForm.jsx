import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";

function LoginForm() {
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [user, setUser] = useState({});

	// const handleLogin = aync () => {
	//   try {
	//     const user
	//   }
	// }

	return (
		<div className="login__form">
			<h1 className="logo">
				<img
					src="src/assets/images/logo_fastcampus_column.svg"
					alt="fastcampus"
				/>
			</h1>
			<form className="form">
				<div className="field-wrap">
					<div className="field">
						<div className="input-wrap">
							<input
								type="text"
								name="login"
								id="login"
								placeholder="이메일(아이디)"
								className="input"
							/>
						</div>
					</div>
					<div className="field">
						<div className="input-wrap">
							<input
								type="password"
								maxLength="10"
								name="password"
								id="password"
								placeholder="비밀번호"
								className="input"
							/>
						</div>
					</div>
				</div>
				<a
					className="password-forget"
					href="./">
					비밀번호를 잊으셨나요?
				</a>
				<Button size="entire">로그인</Button>
				<div className="border"></div>
				<Link
					to="/join"
					className="Button entire black">
					회원가입
				</Link>
			</form>
		</div>
	);
}

export default LoginForm;
