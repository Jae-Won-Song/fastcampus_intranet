import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import firebaseApp from "../firebase/config";
import { useNavigate } from "react-router-dom";

import RadioForm from "../components/RadioForm";
import Article from "../components/Article";
import FormDate from "../components/FormDate";

const FormTitle = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    reason: "",
    startDate: "",
    endDate: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.type || !formData.reason || !formData.startDate || !formData.endDate) {
      setError("입력 필드를 모두 작성해주세요.");
      return;
    }

    const database = getDatabase(firebaseApp);
    const formRef = ref(database, "forms");
    push(formRef, formData)
      .then(() => {
        console.log("폼 제출 완료");
        alert("제출이 완료되었습니다.");
        navigate("/apply-list"); 
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(""); 
  };

  const handleRadioChange = (selectedType) => {
    setFormData({
      ...formData,
      type: selectedType,
    });
    setError(""); 
  };

  const handleDateChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(""); 
  };

  return (
    <>
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
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <div className="title">유형</div>
          <div>
            <RadioForm onChange={handleRadioChange} />
          </div>
          <Article onChange={handleChange} />
        </div>
        <FormDate onDateChange={handleDateChange} />
        {error && <div className="error-msg">{error}</div>}
        <div className="form-btn">
          <button className="apply-btn" onClick={handleSubmit}>
            제출하기
          </button>
        </div>
      </div>
    </>
  );
};

export default FormTitle;