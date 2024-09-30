import { FC, ChangeEvent } from "react";

// Define the props interface
interface InputFieldProps {
	label?: string;
	type?: string;
	name?: string;
	value?: string;
	placeholder: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	errorMessage?: string;
	disabled?: boolean;
}

// Define the InputField component using FC
const InputField: FC<InputFieldProps> = ({
	label,
	type = "text",
	name,
	value,
	placeholder,
	onChange,
	className = "",
	errorMessage = "",
	disabled = false,
}) => {
	return (
		<div className={`w-full input-field-wrapper ${className}`}>
			{label && (
				<label
					htmlFor={name}
					className="block mb-2">
					{label}
				</label>
			)}
			<input
				id={name}
				type={type}
				name={name}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				disabled={disabled}
				className={`input-field w-full px-4 py-2 border rounded-full focus:outline-none ${
					errorMessage ? "border-red-500" : "border-gray-300"
				}`}
			/>
			{errorMessage && (
				<p className="text-red-500 text-sm mt-1">{errorMessage}</p>
			)}
		</div>
	);
};

export default InputField;
