import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import firebaseApp from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";

import RadioForm from "../components/RadioForm";
import Article from "../components/Article";
import FormDate from "../components/FormDate";
import SideBar from "../components/SideBar";

import "../styles/components/_apply.scss";
import "../styles/components/_article.scss";
import "../styles/components/_button.scss";

const FormTitle = () => {
	const navigate = useNavigate(); // useHistory 훅 사용

	const [formData, setFormData] = useState({
		title: "",
		type: "",
		reason: "",
		startDate: "",
		endDate: ""
	});

	const handleSubmit = e => {
		e.preventDefault();
		const database = getDatabase(firebaseApp);
		const formRef = ref(database, "forms");
		push(formRef, formData)
			.then(() => {
				console.log("폼 제출 완료");
				alert("제출이 완료되었습니다.");
				// 제출 후 ApplyList 페이지로 이동
				navigate("/ApplyListPage");
			})
			.catch(error => {
				console.error("Error saving data: ", error);
			});
	};

	const handleChange = (name, value) => {
		setFormData({
			...formData,
			[name]: value
		});
	};

	const handleRadioChange = selectedType => {
		setFormData({
			...formData,
			type: selectedType
		});
	};

	const handleDateChange = (name, value) => {
		setFormData({
			...formData,
			[name]: value
		});
	};

	return (
		<>
			<SideBar />
			<div className="wrapper">
				<div className="form">
					<div className="__cat">휴가 / 조퇴 / 외출 신청</div>
					<div className="title">제목</div>
					<input
						type="text"
						name="title"
						className="input"
						placeholder="제목을 입력하세요."
						value={formData.title}
						onChange={e => handleChange("title", e.target.value)}
					/>
					<div>유형</div>
					<div>
						<RadioForm onChange={handleRadioChange} />
					</div>
					<Article onChange={handleChange} />
				</div>
				<FormDate onDateChange={handleDateChange} />
				<div className="form-btn">
					<Link to="/ApplyListPage">
						<button
							className="apply-btn"
							onClick={handleSubmit}>
							제출하기
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default FormTitle;
