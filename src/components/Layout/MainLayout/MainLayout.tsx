import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";

export default function MainLayout() {
	return (
		<>
			<div className="bg-white-1 h-screen w-full fixed">
				<div className="flex flex-row h-full">
					<div className="w-[350px] pt-[100px] h-full">
						<Sidebar />
					</div>

					<div className="w-full h-full">
						<Outlet />
					</div>
				</div>

				<div className="w-full absolute bg-black h-[100px] top-0 left-0">
					<Header />
				</div>
			</div>
		</>
	);
}
