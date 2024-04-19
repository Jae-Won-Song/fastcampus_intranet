import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, off } from "firebase/database";
import MyList from "../components/MyList";
import { Link } from "react-router-dom";

const ApplyListPage = () => {
	const [dataList, setDataList] = useState([]);

	useEffect(() => {
		const database = getDatabase();
		const formsRef = ref(database, "forms");

		const fetchData = () => {
			onValue(formsRef, snapshot => {
				const formData = snapshot.val();
				if (formData) {
					const dataArray = Object.values(formData);
					setDataList(dataArray);
				}
			});
		};

		fetchData();

		return () => {
			off(formsRef);
		};
	}, []);

	return (
		<div className="list-wrapper">
			<SideBar />
			<div className="list-title">휴가 / 조퇴 / 외출 신청내역</div>
			<div className="nav-top">
				<Link to="applyForm">
					<button className="apply-btn">신청하기</button>
				</Link>
			</div>
			{dataList.map((data, index) => (
				<MyList
					key={index}
					data={data}
				/>
			))}
		</div>
	);
};

export default ApplyListPage;
