import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

function ToggleButton({ record }) {
  const [recordTime, setRecordTime] = useState(record);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    setRecordTime(recordTime === "입실하기" ? "퇴실하기" : "입실하기");
    setIsModalOpen(false);
  };

  return (
    <div className="toggleBtn">
      <Button size="large" onClick={() => setIsModalOpen(true)}>
        {recordTime}
      </Button>
      <Modal
        isOpen={isModalOpen}
        onSubmit={handleToggle}
        onClose={() => setIsModalOpen(false)}
      >
        <p>
          {recordTime === "입실하기"
            ? "입실을 하시겠습니까?"
            : "퇴실을 하시겠습니까?"}
        </p>
      </Modal>
    </div>
  );
}

export default ToggleButton;
