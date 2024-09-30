import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./AuthRoutes";
import MainLayout from "../components/Layout/MainLayout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Books from "../pages/Books/Books";
import ContentPage from "../pages/Dashboard/ContentPage/ContentPage";
import Settings from "../pages/Settings/Settings";
import Users from "../pages/Users/Users";
import Admins from "../pages/Admins/Admins";
import Coupons from "../pages/Coupons/Coupons";
import AcademicLevels from "../pages/AcademicLevels/AcademicLevels";
import Withdrawals from "../pages/Withdrawals/Withdrawals";
import ContentType from "../pages/ContentType/ContentType";
import Countries from "../pages/Countries/Countries";
import Platforms from "../pages/Platforms/Platforms";

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
					path="/books/:id"
					element={<ContentPage />}
				/>
				<Route
					path="/books"
					element={<Books />}
				/>
				<Route
					path="/users"
					element={<Users />}
				/>
				<Route
					path="/admins"
					element={<Admins />}
				/>
				<Route
					path="/coupon-codes"
					element={<Coupons />}
				/>
				<Route
					path="/academic-levels"
					element={<AcademicLevels />}
				/>
				<Route
					path="/platforms"
					element={<Platforms />}
				/>
				<Route
					path="/countries"
					element={<Countries />}
				/>
				<Route
					path="/content-type"
					element={<ContentType />}
				/>
				<Route
					path="/withdrawals"
					element={<Withdrawals />}
				/>
				<Route
					path="/settings"
					element={<Settings />}
				/>
			</Route>
		</Routes>
	);
}
