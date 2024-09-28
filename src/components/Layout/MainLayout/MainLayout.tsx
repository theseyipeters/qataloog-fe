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
		<>
			<div className="bg-white-1 h-screen w-full fixed">
				<div className="flex flex-row h-full">
					<div className="w-[350px] pt-[100px] h-full hidden lg:block">
						<Sidebar />
					</div>
					<div className="pt-[100px] hidden md:block lg:hidden">
						<TabSidebar />
					</div>
					<MobileSidebar
						isOpen={isMobileSidebarOpen}
						toggleSidebar={toggleMobileSidebar}
					/>

					<div className="w-full h-full">
						<Outlet />
					</div>
				</div>

				<div className="w-full absolute bg-black h-[100px] top-0 left-0">
					<Header toggleMobileSidebar={toggleMobileSidebar} />
				</div>
			</div>
		</>
	);
}

// import { Outlet } from "react-router-dom";
// import Sidebar from "../../Sidebar/Sidebar";
// import Header from "../../Header/Header";
// import MobileSidebar from "../../Sidebar/MobileSidebar"; // Add your mobile sidebar here
// import { useState } from "react";
// import TabSidebar from "../../Sidebar/TabSidebar";

// export default function MainLayout() {
// 	const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);

// 	const toggleMobileSidebar = () => {
// 		setMobileSidebarOpen(!isMobileSidebarOpen);
// 	};

// 	return (
// 		<>
// 			{/* Main Wrapper */}
// 			<div className="relative min-h-screen w-full">
// 				{/* Mobile Sidebar (Toggle for small screens) */}
// 				<MobileSidebar
// 					isOpen={isMobileSidebarOpen}
// 					toggleSidebar={toggleMobileSidebar}
// 				/>

// 				{/* Sidebar for larger screens */}
// 				<div className="hidden lg:flex fixed w-[350px] h-full pt-[100px]">
// 					<Sidebar />
// 				</div>

// 				{/* Main Content */}
// 				<div className="flex flex-col lg:ml-[350px] w-full">
// 					{/* Header */}
// 					<div className="fixed top-0 w-full bg-black z-10 h-[100px]">
// 						<Header toggleMobileSidebar={toggleMobileSidebar} />
// 					</div>

// 					{/* Content area */}
// 					<div className="pt-[100px] px-4 h-full overflow-auto">
// 						<Outlet />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
