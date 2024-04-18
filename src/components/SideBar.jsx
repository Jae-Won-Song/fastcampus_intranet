import Button from "./Button";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function SideBar() {
	const navigate = useNavigate();
	const handleLogout = () => {
		auth.signOut();
		navigate("/login");
	};
	return (
		<>
			<div className="nav">
				<Button
					type="button"
					onClick={handleLogout}>
					로그아웃
				</Button>
			</div>
		</>
	);
}

export default SideBar;
