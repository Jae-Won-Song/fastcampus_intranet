import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function LayoutPage() {
	return (
		<div className="layout">
			<SideBar className="layout__sidebar" />
			<div className="layout__content">
				<Outlet />
			</div>
		</div>
	);
}

export default LayoutPage;
