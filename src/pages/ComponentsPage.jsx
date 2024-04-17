import Button from '../components/Button';

function ComponentsPage() {
	return (
		<div className="components">
			{/* button */}
			<div className="group">
				<Button>버튼</Button>
				<Button color="black">버튼</Button>
				<Button color="grayBorder">버튼</Button>
			</div>
			<div className="group">
				<Button size="large">버튼</Button>
				<Button
					size="large"
					color="black">
					버튼
				</Button>
				<Button
					size="large"
					color="grayBorder">
					버튼
				</Button>
			</div>
			<Button size="entire">버튼</Button>
			<Button
				size="entire"
				color="black">
				버튼
			</Button>
			<Button
				size="entire"
				color="grayBorder">
				버튼
			</Button>

			{/* form */}
			<form className="form">
				<div className="field">
					<label className="label">이름(label)</label>
					<div className="input-wrap">
						<input
							type="text"
							name="login"
							id="login"
							placeholder="이름을 입력하세요"
							className="input"
						/>
					</div>
				</div>
				<div className="field error">
					<label className="label">이름(label)</label>
					<div className="input-wrap">
						<input
							type="text"
							name="login"
							id="login"
							placeholder="이름을 입력하세요"
							className="input"
						/>
					</div>
					<span className="error-message">
						아이디는 영문, 숫자 n자 이내만 사용 가능합니다.
					</span>
				</div>
				<div className="field success">
					<label className="label">이름(label)</label>
					<div className="input-wrap">
						<input
							type="text"
							name="login"
							id="login"
							placeholder="이름을 입력하세요"
							className="input"
						/>
					</div>
					<span className="success-message">사용 가능한 아이디입니다.</span>
				</div>
			</form>
		</div>
	);
}

export default ComponentsPage;
