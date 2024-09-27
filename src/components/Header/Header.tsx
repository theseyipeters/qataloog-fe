import { BellIcon, DownCaret, NG, QataloogLogo } from "../../svgs/svgs";
import SearchInput from "../_common/SearchInput/SearchInput";

export default function Header() {
	return (
		<div className="bg-white-2 h-full px-12 py-6 flex flex-row items-center gap-10">
			<div>
				<QataloogLogo />
			</div>

			<div className="w-[600px]">
				<SearchInput />
			</div>

			<div className="flex items-center justify-between min-w-[450px] ml-auto">
				<BellIcon />

				<div className="flex gap-3 items-center">
					<NG />

					<p>English</p>

					<DownCaret />
				</div>

				<div className="flex flex-row gap-4 items-center">
					<div className="w-14 h-14 border rounded-full relative">
						<img
							className="w-fit rounded-full object-fit"
							src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
						<div className="absolute bottom-[-10px] right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white-2"></div>
					</div>

					<p className="flex flex-shrink-0 font-semibold text-base">
						Qataloog Admin
					</p>
				</div>
			</div>
		</div>
	);
}
