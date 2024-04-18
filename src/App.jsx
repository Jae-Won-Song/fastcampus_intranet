import './App.scss';
import SideBar from './components/SideBar';
import Notice from './components/Notice';
import NoticeToy from './components/NoticeToy';
import NoticeSatisfaction from './components/NoticeSatisfaction';
import NoticeBonus from './components/NoticeBonus';
import NoticeEvent from './components/NoticeEvent';
import { Routes, Route } from 'react-router-dom';

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
			</Routes>
		</>
	);
}

export default App;
