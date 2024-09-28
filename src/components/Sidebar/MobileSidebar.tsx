import { NavLink } from "react-router-dom";
import { links } from "./Links";
import { Icon } from "@iconify/react/dist/iconify.js";

interface MobileSidebarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
}

export default function MobileSidebar({
	isOpen,
	toggleSidebar,
}: MobileSidebarProps) {
	return (
		<div
			className={`w-[300px] fixed inset-0 z-50 bg-white-1 transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300 lg:hidden`}>
			{/* Overlay */}
			<div
				className="absolute inset-0 bg-black bg-opacity-50"
				onClick={toggleSidebar}></div>
			{/* Sidebar Content */}
			<nav className="relative w-[250px] h-full bg-white py-4 flex flex-col z-50">
				<div className="px-4 py-4 flex justify-between items-cente mb-10">
					<h2 className="text-lg font-semibold"></h2>
					<button onClick={toggleSidebar}>
						<Icon
							icon="tabler:x"
							fontSize={24}
						/>
					</button>
				</div>

				{/* Navigation Links */}
				{links.map((link, index) => (
					<NavLink
						key={index}
						to={link.href}
						className={({ isActive }) =>
							isActive
								? "flex items-center gap-2 py-4 text-orange-1 bg-orange-1/10 rounded-md"
								: "flex items-center gap-2 py-4 text-gray-700 hover:text-gray-900 rounded-md"
						}
						onClick={toggleSidebar}>
						<div className="flex flex-row gap-2 ml-4 items-center">
							<Icon
								icon={link.icon}
								fontSize={30}
								strokeWidth={1}
							/>
							<span>{link.name}</span>
						</div>
					</NavLink>
				))}

				{/* Logout Button */}
				<div className="px-4 py-3 mt-auto text-orange-1">
					<button className="w-full flex items-center justify-center gap-2 border border-orange-1 py-4 rounded-full">
						<Icon
							icon={"tabler:logout-2"}
							fontSize={20}
						/>
						<p>Logout</p>
					</button>
				</div>
			</nav>
		</div>
	);
}
