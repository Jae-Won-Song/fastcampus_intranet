import React, { useState } from "react";

const FormDate = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleChangeStartDate = (e) => {
    const startDateValue = e.target.value;
    setStartDate(startDateValue);
    if (endDate && endDate < startDateValue) {
      setEndDate("");
      alert("종료일은 시작일 이후여야 합니다.");
    }
    onDateChange("startDate", startDateValue);
  };

  const handleChangeEndDate = (e) => {
    const endDateValue = e.target.value;
    setEndDate(endDateValue);
    if (startDate && endDateValue < startDate) {
      alert("종료일은 시작일 이후여야 합니다.");
    } else {
      onDateChange("endDate", endDateValue);
    }
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
