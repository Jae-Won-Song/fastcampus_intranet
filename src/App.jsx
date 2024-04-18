import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import ComponentsPage from "./pages/ComponentsPage";
import SideBar from "./components/SideBar";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/login"
					element={<LoginPage />}
				/>
				<Route
					path="/join"
					element={<JoinPage />}
				/>
				<Route element={<SideBar />}>
					<Route
						path="/main"
						element={<MainPage />}
					/>
					<Route
						path="/components"
						element={<ComponentsPage />}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
