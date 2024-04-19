import Badge from "./Badge";

const MyList = ({ data }) => {
	if (!data) {
		return null;
	}

	const { title, type, reason, startDate, endDate } = data;

	return (
		<div className="my__list">
			<div className="top-info">
				<p className="__title">
					{title} <Badge type={type} />{" "}
				</p>
				<p>
					{startDate}~{endDate}
				</p>
			</div>
			<p className="__article">{reason}</p>
		</div>
	);
};

export default MyList;
