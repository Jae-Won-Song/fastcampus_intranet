
import './App.scss';
import SideBar from './components/SideBar';
import Notice from './components/NoticePage';
import NoticeToy from './components/NoticeToy';
import NoticeSatisfaction from './components/NoticeSatisfaction';
import NoticeBonus from './components/NoticeBonus';
import NoticeEvent from './components/NoticeEvent';
import { Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import ComponentsPage from "./pages/ComponentsPage";
import ApplyListPage from "./pages/ApplyListPage";
import ApplyFormPage from "./pages/ApplyFormPage";

function App() {
	return (
		<>
			<Routes>
				<Route
					path=""
					element={<SideBar />}
				/>
				<Route
					path="Notice"
					element={<Notice />}
				/>
				<Route
					path="/NoticeToy"
					element={<NoticeToy />}
				/>
				<Route
					path="/NoticeSatisfaction"
					element={<NoticeSatisfaction />}
				/>
				<Route
					path="/NoticeBonus"
					element={<NoticeBonus />}
				/>
				<Route
					path="/NoticeEvent"
					element={<NoticeEvent />}
				/>
	      <Route
					path="/login"
					element={<LoginPage />}
				/>
				<Route
					path="/join"
					element={<JoinPage />}
				/>
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
			</Routes>
		</>
	)
}

export default App;
