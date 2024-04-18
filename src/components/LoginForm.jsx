<<<<<<< HEAD
import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "./Button";
import { Link } from "react-router-dom";

function LoginForm() {
<<<<<<< HEAD
=======
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

=======
import Button from "./Button";

function LoginForm() {
>>>>>>> master
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
	return (
		<div className="login__form">
			<h1 className="logo">
				<img
					src="src/assets/images/logo_fastcampus_column.svg"
					alt="fastcampus"
				/>
			</h1>
<<<<<<< HEAD
			<form className="form">
=======
<<<<<<< HEAD
			<form
				className="form"
				onSubmit={handleSubmit}>
=======
			<form className="form">
>>>>>>> master
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
				<div className="field-wrap">
					<div className="field">
						<div className="input-wrap">
							<input
								type="text"
<<<<<<< HEAD
=======
<<<<<<< HEAD
								name="email"
								id="email"
								placeholder="이메일(아이디)"
								className="input"
								value={email}
=======
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
								name="login"
								id="login"
								placeholder="이메일(아이디)"
								className="input"
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
								value={password}
=======
>>>>>>> master
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
							/>
						</div>
					</div>
				</div>
				<a
					className="password-forget"
					href="./">
					비밀번호를 잊으셨나요?
				</a>
<<<<<<< HEAD
=======
<<<<<<< HEAD
				<Button
					type="submit"
					size="entire"
					onSubmit={onSubmit}>
					로그인
				</Button>
				<div className="border"></div>
				<Link
					to="/join"
					className="Button entire black">
					회원가입
				</Link>
=======
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
				<Button size="entire">로그인</Button>
				<div className="border"></div>
				<a
					href="./"
					className="Button entire black">
					회원가입
				</a>
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 861ac078b3a764d067c97fdc5bc5d707c7aab77f
			</form>
		</div>
	);
}

export default LoginForm;
