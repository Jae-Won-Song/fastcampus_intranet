import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, off } from "firebase/database";
import MyList from "../components/MyList";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const ApplyListPage = () => {
  const [dataList, setDataList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const database = getDatabase();
      const formsRef = ref(database, "forms");

      try {
        const snapshot = await onValue(formsRef, (snapshot) => {
          const formData = snapshot.val();
          if (formData) {
            const dataArray = Object.values(formData);
            setDataList(dataArray);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      off(formsRef);
    };
  }, []);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const filteredData = () => {
    if (!selectedOption || selectedOption === "전체") {
      return dataList;
    } else {
      return dataList.filter((data) => data.type === selectedOption);
    }
  };

  return (
    <div className="list-wrapper">
      <div className="list-title">휴가 / 조퇴 / 외출 신청내역</div>
      <div className="nav-top">
        <Dropdown onSelectOption={handleOptionChange} />
        <Link to="/apply-form">
          <button className="apply-btn">신청하기</button>
        </Link>
      </div>
      {filteredData()
        .reverse()
        .map((data, index) => (
          <MyList key={index} data={data} />
        ))}
    </div>
  );
};

export default ApplyListPage;