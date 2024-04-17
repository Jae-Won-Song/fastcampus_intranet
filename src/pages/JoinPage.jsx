import Button from "../components/Button";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/config";
import { useForm } from "react-hook-form";

function JoinPage() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const auth = getAuth(app);
	const onSubmit = async data => {
		try {
			const createdUser = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password
			);
			console.log(createdUser);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<div className="join">
				<header className="join__header">
					<h1 className="logo">
						<a
							className="img-wrap"
							href="./">
							<img
								src="src/assets/images/logo_fastcampus_column.svg"
								alt="fastcampus"
							/>
						</a>
					</h1>
					<h2 className="title">수강생용 인트라넷 회원가입</h2>
				</header>
				<form
					className="form"
					onSubmit={handleSubmit(onSubmit)}>
					<div className="field">
						<label
							htmlFor="email"
							className="label">
							이메일(아이디)
						</label>
						<div className="input-wrap">
							<input
								type="email"
								name="email"
								id="email"
								placeholder="fastcampus@email.com"
								className="input"
								{...register("email", {
									required: true,
									pattern: /^\S+@\S+$/i
								})}
							/>
							{errors.email && <p>이메일을 입력해주세요.</p>}
						</div>
					</div>
					<div className="field">
						<label
							htmlFor="password"
							className="label">
							비밀번호
						</label>
						<div className="input-wrap">
							<input
								type="password"
								maxLength="15"
								name="password"
								id="password"
								placeholder="비밀번호"
								className="input"
								{...register("password", {
									required: true,
									minLength: 6,
									maxLength: 20
								})}
							/>
							{errors.password && errors.password.type === "required" && (
								<p>비밀번호를 입력해주세요.</p>
							)}
							{errors.password && errors.password.type === "minLength" && (
								<p>비밀번호는 최소 6자 이상입니다.</p>
							)}
							{errors.password && errors.password.type === "maxLength" && (
								<p>비밀번호는 최대 20자 이하입니다.</p>
							)}
						</div>
					</div>
					<div className="field">
						<label
							htmlFor="password"
							className="label">
							비밀번호 확인
						</label>
						<div className="input-wrap">
							<input
								type="password"
								name="password"
								id="password"
								placeholder="비밀번호"
								className="input"
								{...register("password", {
									required: true,
									minLength: 6,
									maxLength: 20
								})}
							/>
						</div>
					</div>
					<div className="field">
						<label
							htmlFor="name"
							className="label">
							이름
						</label>
						<div className="input-wrap">
							<input
								type="text"
								name="name"
								id="name"
								placeholder="이름을 입력하세요"
								className="input"
								{...register("name", {
									maxLength: 10
								})}
							/>
						</div>
					</div>
					<div className="field">
						<label
							htmlFor="tel"
							className="label">
							전화번호
						</label>
						<div className="input-wrap">
							<input
								type="number"
								name="tel"
								id="tel"
								placeholder="숫자만 입력하세요(&lsquo;-&rsquo;제외)"
								className="input"
								{...register("tel", {
									maxLength: 11
								})}
							/>
							{errors.tel === "maxLength" && (
								<p>비밀번호는 최대 20자 이하입니다.</p>
							)}
						</div>
					</div>
					<Button
						type="submit"
						size="entire"
						onClick={onSubmit}>
						회원가입
					</Button>
				</form>
			</div>
		</div>
	);
}

export default JoinPage;
