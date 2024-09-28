import { NavLink } from "react-router-dom";
import { links } from "./Links";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function TabSidebar() {
	return (
		<nav className="w-[250px] h-full bg-white py-4 flex flex-col">
			{links.map((link, index) => (
				<NavLink
					key={index}
					to={link.href}
					className={({ isActive }) =>
						isActive
							? "flex items-center gap-2 py-4 text-orange-1 bg-orange-1/10 rounded-md"
							: "flex items-center gap-2 py-4 text-gray-700 hover:text-gray-900 rounded-md"
					}>
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

			<div className="px-8 py-3 w-full mt-auto text-orange-1">
				<button className="w-full flex items-center justify-center gap-2 border border-orange-1 py-4 rounded-full px-4">
					<Icon
						icon={"tabler:logout-2"}
						fontSize={20}
					/>
					<p>Logout</p>
				</button>
			</div>
		</nav>
	);
}
