import { useState } from "react";
import { ChevronDown, NG, SNG } from "../../../svgs/svgs";
import { SP } from "../../../svgs/flagsSvgs";

interface ILanguage {
	name: string;
	value: string;
	icon?: any;
}

export default function LanguageSelect() {
	const languages: ILanguage[] = [
		{ name: "English", value: "english", icon: NG },
		{ name: "French", value: "french", icon: SNG },
		{ name: "Spanish", value: "spanish", icon: SP },
	];
	const [selectedLanguage, setSelectedLanguage] = useState<ILanguage | null>(
		languages[0]
	);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleLanguageSelect = (language: ILanguage) => {
		setSelectedLanguage(language);
		setIsOpen(false);
	};

	return (
		<div className="relative max-w-sm">
			<div
				className="flex items-center justify-between gap-2 py-2 px-4 rounded-md cursor-pointer bg-white-2"
				onClick={() => setIsOpen(!isOpen)}>
				{selectedLanguage?.icon && <selectedLanguage.icon />}
				<p className="text-gray-700">
					{selectedLanguage ? selectedLanguage.name : "Select a language"}
				</p>
				<div className={`transform ${isOpen ? "rotate-180" : ""}`}>
					<ChevronDown />
				</div>
			</div>

			{/* Dropdown list */}
			{isOpen && (
				<div className="absolute left-0 w-full mt-2 border border-gray-300 bg-white-2 rounded-md shadow-lg z-10">
					{languages.map((languageOption, index) => (
						<div
							key={index}
							onClick={() => handleLanguageSelect(languageOption)}
							className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-2 ">
							{languageOption.icon && <languageOption.icon />}
							{languageOption.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
}
