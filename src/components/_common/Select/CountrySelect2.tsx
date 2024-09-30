import { useState } from "react";
import { ChevronDown, NG, SNG } from "../../../svgs/svgs";

interface ICountry {
	name: string;
	icon: any;
	value: string;
}

export default function CountrySelect2() {
	const countries: ICountry[] = [
		{ name: "Nigeria", icon: NG, value: "nigeria" },
		{ name: "Senegal", icon: SNG, value: "senegal" },
	];
	const [selectedCountry, setSelectedCountry] = useState<ICountry | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleCountrySelect = (country: ICountry) => {
		setSelectedCountry(country);
		setIsOpen(false);
	};

	return (
		<div className="relative">
			<div
				className="flex items-center justify-center gap-3 py-1 px-3 border border-gray-300 rounded-md cursor-pointer bg-white-2"
				onClick={() => setIsOpen(!isOpen)}>
				{selectedCountry?.icon && <selectedCountry.icon />}

				<p className="text-gray-700">
					{selectedCountry ? selectedCountry.name : "Select a country"}
				</p>
				<div className={`transform ${isOpen ? "rotate-180" : ""}`}>
					<ChevronDown />
				</div>
			</div>

			{/* Dropdown list */}
			{isOpen && (
				<div className="absolute left-0 w-full mt-2 border border-gray-300 bg-white-2 rounded-md shadow-lg z-10">
					{countries.map((countryOption, index) => (
						<div
							key={index}
							onClick={() => handleCountrySelect(countryOption)}
							className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center">
							{/* Optional country icon display */}
							<span className="mr-2">
								<countryOption.icon />
							</span>
							{countryOption.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
