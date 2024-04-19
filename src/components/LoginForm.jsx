import Button from "./Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { auth } from "../firebase/config";

function LoginForm() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleChange = e => {
		const {
			target: { name, value }
		} = e;
		if (name === "email") {
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};
	const handleSubmit = async e => {
		e.preventDefault();
		if (email === "" || password === "") return;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate("/main");
		} catch (e) {
			if (e instanceof FirebaseError) {
				setError(e.message);
			}
		}
	};
	return (
		<div className="login__form">
			<h1 className="logo">
				<img
					src="src/assets/images/logo_fastcampus_column.svg"
					alt="fastcampus"
				/>
			</h1>
			<form
				className="form"
				onSubmit={handleSubmit}>
				<div className="field-wrap">
					<div className="field">
						<div className="input-wrap">
							<input
								type="text"
								name="email"
								id="email"
								placeholder="이메일(아이디)"
								className="input"
								required
								value={email}
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className="field">
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
				</div>
				{/* <a
					className="password-forget"
					href="./">
					비밀번호를 잊으셨나요?
				</a> */}
				<Button
					type="submit"
					size="entire"
					onClick={handleSubmit}>
					로그인
				</Button>
				<div className="border"></div>
				<div className="join-info">
					<span>아직 계정이 없으신가요?</span>
					<Link
						to="/join"
						className="link">
						회원가입하기
					</Link>
				</div>
			</form>
			{error !== "" ? <p className="error-message">{error}</p> : null}
		</div>
	);
}
export default LoginForm;