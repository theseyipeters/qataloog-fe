import { Outlet } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import MobileSidebar from "../../Sidebar/MobileSidebar";
import TabSidebar from "../../Sidebar/TabSidebar";
import { useState } from "react";

export default function MainLayout() {
	const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	const toggleMobileSidebar = () => {
		setMobileSidebarOpen(!isMobileSidebarOpen);
	};
	return (
		<div className="relative h-screen w-full bg-white-1">
			<div className="w-full flex flex-row h-full">
				<div className="w-[300px] pt-[100px] h-full hidden lg:flex">
					<Sidebar />
				</div>
				<div className="pt-[100px] hidden md:block lg:hidden">
					<TabSidebar />
				</div>
				<div className="block md:hidden">
					<MobileSidebar
						isOpen={isMobileSidebarOpen}
						toggleSidebar={toggleMobileSidebar}
					/>
				</div>

				<div className="w-full h-full overflow-auto">
					<Outlet />
				</div>
			</div>

			<div className="w-full absolute h-[80px] lg:h-[100px] top-0 left-0">
				<Header toggleMobileSidebar={toggleMobileSidebar} />
			</div>
		</div>
	);
}
