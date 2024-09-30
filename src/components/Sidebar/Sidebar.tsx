import { NavLink, useLocation } from "react-router-dom";
import { links } from "./Links";
import { Logout } from "../../svgs/sidebarSvgs";
// import { Icon } from "@iconify/react/dist/iconify.js";

export default function Sidebar() {
	const location = useLocation();
	return (
		<nav className="w-[350px] h-full py-4 flex flex-col">
			{links.map((link, index) => {
				const isActive =
					link.href === "/"
						? location.pathname === "/"
						: location.pathname.startsWith(link.href);

				return (
					<NavLink
						end
						key={index}
						to={link.href}
						className={`flex items-center gap-2 py-4
							${
								isActive
									? "text-orange-1 bg-orange-1/10 rounded-md"
									: "text-gray-700 hover:text-gray-900 rounded-md"
							}
						`}>
						<div className="flex items-center relative">
							{isActive && (
								<div className="absolute left-0">
									<svg
										width="15"
										height="32"
										viewBox="0 0 15 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M0 4.78313C0 2.14148 2.14148 0 4.78314 0V0C6.58695 0 8.23736 1.01478 9.05145 2.62445L12.3099 9.06722C14.0952 12.5974 14.9879 14.3624 14.9928 16.2595C14.9929 16.3227 14.9924 16.3859 14.991 16.4491C14.9509 18.3457 14.0257 20.0939 12.1751 23.5903L9.08216 29.4342C8.2467 31.0127 6.60706 32 4.82109 32V32C2.15847 32 0 29.8415 0 27.1789V4.78313Z"
											fill="#F14119"
										/>
									</svg>
								</div>
							)}
							<div className="flex flex-row gap-4 ml-12 items-center">
								{link?.icon && <link.icon />}

								<span className={isActive ? "font-medium" : " "}>
									{link?.name}
								</span>
							</div>
						</div>
					</NavLink>
				);
			})}

			<div className="px-8 py-3 w-full mt-auto text-orange-1">
				<button className="w-full flex items-center justify-center gap-2 border border-orange-1 py-4 rounded-full px-4">
					<Logout />

					<p>Logout</p>
				</button>
			</div>
		</nav>
	);
}
