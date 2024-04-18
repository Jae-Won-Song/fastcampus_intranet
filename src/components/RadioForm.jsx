import { useState } from "react";
import "../styles/components/_RadioForm.scss";

const RadioForm = ({ onChange }) => {
	const [, setType] = useState("");

	const handleRadioChange = e => {
		const selectedType = e.target.value;
		setType(selectedType);
		onChange(selectedType);
	};

	return (
		<>
			<div className="radio-wrapper">
				<input
					type="radio"
					className="StyledRadio"
					name="type"
					id="휴가"
					value="휴가"
					onChange={handleRadioChange}
				/>
				<label htmlFor="휴가">휴가</label>
				<input
					type="radio"
					className="StyledRadio"
					name="type"
					id="조퇴"
					value="조퇴"
					onChange={handleRadioChange}
				/>
				<label htmlFor="조퇴">조퇴</label>
				<input
					type="radio"
					className="StyledRadio"
					name="type"
					id="외출"
					value="외출"
					onChange={handleRadioChange}
				/>
				<label htmlFor="외출">외출</label>
			</div>
		</>
	);
};

export default RadioForm;
