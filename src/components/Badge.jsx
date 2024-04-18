// Badge.jsx
import React from "react";
import "../styles/components/_badge.scss";

const Badge = ({ type }) => {
	let badgeText = "";

	switch (type) {
		case "조퇴":
			badgeText = "조퇴";
			break;
		case "외출":
			badgeText = "외출";
			break;
		case "휴가":
			badgeText = "휴가";
			break;
		default:
			badgeText = "상태";
			break;
	}

	const badgeClassName = `badge ${getStatusClass(type)}`;

	return <span className={badgeClassName}>{badgeText}</span>;
};

const getStatusClass = type => {
	switch (type) {
		case "조퇴":
			return "leave-early";
		case "외출":
			return "outing";
		case "휴가":
			return "leave";
		default:
			return "outing";
	}
};

export default Badge;
