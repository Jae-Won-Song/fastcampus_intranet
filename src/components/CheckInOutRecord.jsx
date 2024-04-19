import "../styles/modules/CheckInOutRecord.scss";

function CheckInOutRecord({ children, position }) {
  return <div className={`CheckInOutRecord ${position}`}>{children}</div>;
}

export default CheckInOutRecord;
