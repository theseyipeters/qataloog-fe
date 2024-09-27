import { SearchIcon } from "../../../svgs/svgs";

export default function SearchInput() {
	return (
		<div className="w-full border rounded-3xl flex flex-row items-center px-4 py-1">
			<SearchIcon />
			<input
				type="text"
				placeholder="Search..."
				className=" w-full rounded-3xl focus:outline-none h-[40px] px-3 bg-transparent"
			/>
		</div>
	);
}
