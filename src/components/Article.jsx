import { useState } from "react";

const Article = ({ onChange }) => {
  const [reason, setReason] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setReason(value);
    onChange("reason", value);
  };

  return (
    <>
      <div className="title">사유</div>
      <input
        type="text"
        className="__reason"
        placeholder="사유를 입력하세요."
        value={reason}
        onChange={handleChange}
      />
    </>
  );
};

export default Article;
