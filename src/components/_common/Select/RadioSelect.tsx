import { useState } from "react";

interface Option {
	value: string;
	label: string;
}

export default function RadioSelect() {
	const options: Option[] = [
		{ value: "termly", label: "Termly" },
		{ value: "bi-annualy", label: "Bi-Annually" },
		{ value: "annually", label: "Annually" },
	];

	const [selectedValue, setSelectedValue] = useState<string>("termly");

	const handleOptionChange = (value: string) => {
		setSelectedValue(value);
	};

	return (
		<div className="radio-select-wrapper w-fit flex gap-3 border rounded-xl px-1 py-1">
			{options.map((option, index) => (
				<label
					key={index}
					className={`flex  items-center cursor-pointer py-1 px-4 rounded-md ${
						selectedValue === option.value ? "bg-orange-1/10 text-orange-1" : ""
					}`}
					onClick={() => handleOptionChange(option.value)}>
					{/* Hidden radio input */}
					<input
						type="radio"
						name="payment-frequency"
						value={option.value}
						checked={selectedValue === option.value}
						onChange={() => {}}
						className="hidden"
					/>

					<span
						className={`text-gray-700 ${
							selectedValue === option.value ? "text-orange-1" : ""
						}`}>
						{option.label}
					</span>
				</label>
			))}
		</div>
	);
}
