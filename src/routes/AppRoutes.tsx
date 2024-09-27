import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./AuthRoutes";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Books from "../pages/Books/Books";

export default function AppRoutes() {
	const isAuthenticated = true;
	return (
		<Routes>
			<Route
				path="/"
				element={
					<ProtectedRoute isAuthenticated={isAuthenticated}>
						<MainLayout />
					</ProtectedRoute>
				}>
				<Route
					index
					path="/"
					element={<Dashboard />}
				/>
				<Route
					index
					path="/books"
					element={<Books />}
				/>
			</Route>
		</Routes>
	);
}
