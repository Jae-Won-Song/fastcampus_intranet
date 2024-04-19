<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import NoticePage from "./components/NoticePage";
=======
import "./App.scss";
import SideBar from "./components/SideBar";
import Notice from "./components/Notice";
>>>>>>> 0445d231fc7bcb68c570197087e49d4c1af43ed7
import NoticeToy from "./components/NoticeToy";
import NoticeSatisfaction from "./components/NoticeSatisfaction";
import NoticeBonus from "./components/NoticeBonus";
import NoticeEvent from "./components/NoticeEvent";
import { Routes, Route } from "react-router-dom";
import NoticePage from "./components/NoticePage"; // 변경된 부분
import LayoutPage from "./pages/LayoutPage";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";
import ComponentsPage from "./pages/ComponentsPage";
import ApplyListPage from "./pages/ApplyListPage";
import ApplyFormPage from "./pages/ApplyFormPage";
import SideBar from "./components/SideBar";
import Reference from "./components/Reference";
import MyPage from "./pages/MyPage";

function App() {
<<<<<<< HEAD
	return (
		<>
			<SideBar />
			<Routes>
				<Route element={<LayoutPage />}>
					<Route
						path="/"
						element={<MainPage />}
					/>
					<Route
						path="/notice"
						element={<NoticePage />}
					/>
					<Route
						path="/notice-toy"
						element={<NoticeToy />}
					/>
					<Route
						path="/notice-satisfaction"
						element={<NoticeSatisfaction />}
					/>
					<Route
						path="/notice-bonus"
						element={<NoticeBonus />}
					/>
					<Route
						path="/notice-event"
						element={<NoticeEvent />}
					/>
					<Route
						path="/apply-form"
						element={<ApplyFormPage />}
					/>
					<Route
						path="/apply-list"
						element={<ApplyListPage />}
					/>
					<Route
						path="/mypage"
						element={<MyPage />}
					/>
					<Route
						path="/components"
						element={<ComponentsPage />}
					/>
				</Route>

				<Route
					path=""
					element={<SideBar />}
				/>
				<Route
					path="NoticePage"
					element={<NoticePage />}
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
					path="/Reference"
					element={<Reference />}
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
	);
=======
  return (
    <>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/notice-toy" element={<NoticeToy />} />
          <Route path="/notice-satisfaction" element={<NoticeSatisfaction />} />
          <Route path="/notice-bonus" element={<NoticeBonus />} />
          <Route path="/notice-event" element={<NoticeEvent />} />
          <Route path="/apply-form" element={<ApplyFormPage />} />
          <Route path="/apply-list" element={<ApplyListPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
      </Routes>
    </>
  );
>>>>>>> 0445d231fc7bcb68c570197087e49d4c1af43ed7
}

export default App;
