import { useState } from "react";
import { ChevronDown } from "../../../svgs/svgs";

interface IOption {
	name: string;
	icon?: any;
	value: string;
}

interface SelectProps {
	options: IOption[];
	selectedOption: IOption | null;
	setSelectedOption: (option: IOption) => void;
}

export default function Select({
	options,
	selectedOption,
	setSelectedOption,
}: SelectProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleOptionSelect = (option: IOption) => {
		setSelectedOption(option);
		setIsOpen(false);
	};

	return (
		<div className="relative w-[200px] max-w-sm">
			<div
				className="flex items-center justify-center gap-3 py-4 px-6 border border-gray-300 rounded-md cursor-pointer bg-white-2"
				onClick={() => setIsOpen(!isOpen)}>
				{selectedOption?.icon && <selectedOption.icon />}

				<p className="text-gray-700">
					{selectedOption ? selectedOption.name : "Select an option"}
				</p>
				<div className={`transform ${isOpen ? "rotate-180" : ""}`}>
					<ChevronDown />
				</div>
			</div>

			{/* Dropdown List */}
			{isOpen && (
				<div className="absolute left-0 w-full mt-2 border border-gray-300 bg-white-2 rounded-md shadow-lg z-10">
					{options.map((option, index) => (
						<div
							key={index}
							onClick={() => handleOptionSelect(option)}
							className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center">
							{option.icon && (
								<span className="mr-2">
									<option.icon />
								</span>
							)}
							{option.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
