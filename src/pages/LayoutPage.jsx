import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import NavUserProfile from "../components/NavUserProfile";

function LayoutPage() {
	return (
		<div className="layout">
			<SideBar className="layout__sidebar" />
			<div className="layout__content">
				<NavUserProfile />
				<Outlet />
			</div>
		</div>
	);
}

export default LayoutPage;
