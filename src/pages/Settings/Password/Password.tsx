import PasswordInputField from "../../../components/_common/InputField/PasswordInput";

export default function Password() {
	return (
		<div className="w-full">
			<div className="w-full md:w-3/5 lg:w-2/5 max-w-[600px] flex flex-col gap-6">
				<PasswordInputField
					label="Current Password"
					value="••••••••"
					placeholder="••••••••"
				/>
				<PasswordInputField
					label="New Password"
					value="••••••••"
					placeholder="••••••••"
				/>
				<PasswordInputField
					label="Confirm New Password"
					value="••••••••"
					placeholder="••••••••"
				/>

				<div className="mt-6">
					<button className="w-[200px] py-3 px-4 bg-orange-1 text-white-1 rounded-full">
						Update
					</button>
				</div>
			</div>
		</div>
	);
}
