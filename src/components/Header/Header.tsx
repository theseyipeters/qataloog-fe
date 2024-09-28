import { BellIcon, DownCaret, NG, QataloogLogo } from "../../svgs/svgs";
import SearchInput from "../_common/SearchInput/SearchInput";
import { Icon } from "@iconify/react";

interface HeaderProps {
	toggleMobileSidebar: () => void; // Function to toggle the sidebar
}

export default function Header({ toggleMobileSidebar }: HeaderProps) {
	return (
		<div className="bg-white-2 h-full px-4 lg:px-8 xl:px-12 py-6 flex flex-row items-center gap-10">
			{/* Hamburger Icon for Mobile */}
			<button
				className="md:hidden"
				onClick={toggleMobileSidebar}>
				<Icon
					icon="tabler:menu-2"
					fontSize={30}
					className="text-orange-1"
				/>
			</button>

			{/* Logo */}
			<div className="">
				<QataloogLogo />
			</div>

			{/* Search Bar */}
			<div className="w-[600px] hidden lg:block">
				<SearchInput />
			</div>

			{/* Notification and User Info */}
			<div className="flex items-center gap-3 justify-between w-fit lg:min-w-[450px] ml-auto">
				<div className="w-fit flex">
					<BellIcon />
				</div>
				<div className="hidden lg:block">
					<div className="flex gap-3 items-center  ">
						<NG />
						<p>English</p>
						<DownCaret />
					</div>
				</div>

				<div className="hidden lg:block">
					<div className="flex flex-row gap-4 items-center">
						<div className="w-10 h-10 lg:w-14 lg:h-14 border rounded-full relative">
							<img
								className="w-fit rounded-full object-fit"
								src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="User profile"
							/>
							<div className="absolute bottom-[-5px] lg:bottom-[-10px] right-0 w-3 h-3 lg:w-6 lg:h-6 bg-green-500 rounded-full border-2 lg:border-4 border-white-2"></div>
						</div>

						<p className="flex flex-shrink-0 font-semibold text-base">
							Qataloog Admin
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
