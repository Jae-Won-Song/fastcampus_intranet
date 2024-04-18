import { Route, Routes } from "react-router-dom";
import ApplyListPage from "./pages/ApplyListPage";
import ApplyFormPage from "./pages/ApplyFormPage";

function App() {
	return (
		<Routes>
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
	);
}

export default App;
