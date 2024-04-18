// FormDate.jsx
import React, { useState } from "react";

const FormDate = ({ onDateChange }) => {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const handleChangeStartDate = e => {
		const startDateValue = e.target.value;
		setStartDate(startDateValue);
		onDateChange("startDate", startDateValue); // 시작일 변경사항 전달
	};

	const handleChangeEndDate = e => {
		const endDateValue = e.target.value;
		setEndDate(endDateValue);
		onDateChange("endDate", endDateValue); // 종료일 변경사항 전달
	};

	return (
		<>
			<div className="date-wrap">
				<div className="date-title">시작일</div>
				<div className="date-title">종료일</div>
			</div>
			<div className="date__wrapper">
				<input
					type="date"
					className="input"
					value={startDate}
					onChange={handleChangeStartDate}
				/>{" "}
				<div>~</div>
				<input
					type="date"
					className="input"
					value={endDate}
					onChange={handleChangeEndDate}
				/>
			</div>
		</>
	);
};

export default FormDate;
