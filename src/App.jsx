
import { Routes, Route } from "react-router-dom";
import NoticePage from "./components/NoticePage";
import NoticeToy from "./components/NoticeToy";
import NoticeSatisfaction from "./components/NoticeSatisfaction";
import NoticeBonus from "./components/NoticeBonus";
import NoticeEvent from "./components/NoticeEvent";
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
	return (
		<>
			<Routes>
				<Route element={<LayoutPage />}>
        <Route path="" element={<SideBar />} />
        <Route path="NoticePage" element={<NoticePage />} />
        <Route path="/NoticeToy" element={<NoticeToy />} />
        <Route path="/NoticeSatisfaction" element={<NoticeSatisfaction />} />
        <Route path="/NoticeBonus" element={<NoticeBonus />} />
        <Route path="/NoticeEvent" element={<NoticeEvent />} />
        <Route path="/Reference" element={<Reference />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/" element={<ApplyListPage />} />
        <Route path="/applyForm" element={<ApplyFormPage />} />
        <Route path="/applyList" element={<ApplyListPage />} />
      </Routes>
    </>
  );
}

export default App;
