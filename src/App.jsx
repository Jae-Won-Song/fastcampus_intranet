import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import ComponentsPage from "./pages/ComponentsPage";
import SideBar from "./components/SideBar";
import ApplyListPage from "./pages/ApplyListPage";
import ApplyFormPage from "./pages/ApplyFormPage";
import MyPage from './pages/MyPage'

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
					<Route
						path="/"
						element={<ApplyListPage />}
					/>
					<Route
						path="/applyForm"
						element={<ApplyFormPage />}
					/>
					<Route
						path="/applyList"
						element={<ApplyListPage />}
					/>
				</Route>
			</Routes>
		</>
	)
}

export default App;
