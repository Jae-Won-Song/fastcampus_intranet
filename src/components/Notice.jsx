import "../styles/components/Notice.scss";
import ArrowRight from "../../public/icon_arrow_right.svg";
function Notice(props) {
	return (
		<div className="notice-grid">
			<div className="date">{props.date}</div>
			<div className="title">{props.title}</div>
			<img
				src={ArrowRight}
				alt="ArrowRight"
			/>
		</div>
	);
}
export default Notice;
