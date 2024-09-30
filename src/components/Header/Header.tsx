import { BellIcon, QataloogLogo } from "../../svgs/svgs";
import SearchInput from "../_common/SearchInput/SearchInput";
import { Icon } from "@iconify/react";
import LanguageSelect from "../_common/Select/LanguageSelect";

interface HeaderProps {
	toggleMobileSidebar: () => void; // Function to toggle the sidebar
}

export default function Header({ toggleMobileSidebar }: HeaderProps) {
	return (
		<div className="bg-white-2 h-full px-4 lg:px-8 xl:px-12 py-6 flex flex-row items-center justify-between lg:justify-normal w-full gap-10">
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
			<div className="w-[150px] md:w-[200px]">
				<QataloogLogo />
			</div>

			{/* Search Bar */}
			<div className="w-[600px] hidden lg:block">
				<SearchInput />
			</div>

			<div className="w-fit flex lg:hidden">
				<BellIcon />
			</div>

			{/* Notification and User Info */}
			<div className="lg:flex hidden items-center gap-3 justify-between w-fit lg:min-w-[450px] ml-auto">
				<div className="w-fit ">
					<BellIcon />
				</div>
				<div className="hidden lg:block">
					<LanguageSelect />
				</div>

				<div className="hidden lg:block">
					<div className="flex flex-row gap-4 items-center">
						<div className="w-10 h-10 lg:w-14 lg:h-14 border rounded-full relative">
							<img
								className="w-full h-full rounded-full object-cover object-top"
								src="https://images.unsplash.com/photo-1654155427842-a4a249bf693e?q=80&w=200&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
