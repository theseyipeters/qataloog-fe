import { FC, ChangeEvent } from "react";

// Define the props interface
interface PhoneInputFieldProps {
	label?: string;
	type?: string;
	name?: string;
	value?: string;
	placeholder?: string;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	errorMessage?: string;
	disabled?: boolean;
}

// Define the InputField component using FC
const PhoneInputField: FC<PhoneInputFieldProps> = ({
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
		<div className={`input-field-wrapper ${className}`}>
			{label && (
				<label
					htmlFor={name}
					className="block mb-2">
					{label}
				</label>
			)}
			<div
				className={`bg-white-2 input-field w-full flex items-center px-4 py-2 border rounded-full focus:outline-none ${
					errorMessage ? "border-red-500" : "border-gray-300"
				}`}>
				<div className="flex items-center gap-2">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_235_1319)">
							<path
								d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
								fill="#F0F0F0"
							/>
							<path
								d="M-0.000396729 12.0001C-0.000396729 17.1598 3.2561 21.5582 7.82571 23.2538V0.746582C3.2561 2.44205 -0.000396729 6.84061 -0.000396729 12.0001Z"
								fill="#6DA544"
							/>
							<path
								d="M23.9999 12.0001C23.9999 6.84061 20.7434 2.44205 16.1738 0.746582V23.2538C20.7434 21.5582 23.9999 17.1598 23.9999 12.0001Z"
								fill="#6DA544"
							/>
						</g>
						<defs>
							<clipPath id="clip0_235_1319">
								<rect
									width="24"
									height="24"
									fill="white"
								/>
							</clipPath>
						</defs>
					</svg>

					<p>+234</p>

					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M4 6L8 10L12 6"
							stroke="#7D7D80"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</div>

				<input
					id={name}
					type={type}
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					disabled={disabled}
					className="w-full bg-transparent"
				/>
			</div>
			{errorMessage && (
				<p className="text-red-500 text-sm mt-1">{errorMessage}</p>
			)}
		</div>
	);
};

export default PhoneInputField;
