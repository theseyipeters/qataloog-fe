import InputField from "../../../components/_common/InputField/InputField";
import PhoneInputField from "../../../components/_common/InputField/PhoneInputField";
import { RemoveIcon } from "../../../svgs/svgs";

export default function Profile() {
	return (
		<div className="w-full">
			<div className="w-full flex flex-col md:flex-row gap-6 items-start md:items-center">
				<div className="w-fit">
					<div className="rounded-full bg-orange-1 w-[200px] h-[200px] border-2 border-[#D0D0D4] overflow-hidden">
						<img
							className="w-full h-full rounded-full object-cover object-top"
							alt="User profile"
							src="https://images.unsplash.com/photo-1654155427842-a4a249bf693e?q=80&w=200&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
					</div>
				</div>

				<div className="w-full flex flex-col gap-4">
					<button className=" w-[200px] py-3 px-4 bg-orange-1 text-white-1 rounded-full">
						Upload New Picture
					</button>
					<button className=" w-[200px] py-3 px-4 bg-white-1 text-orange-1 rounded-full border-2 border-orange-1 flex items-center justify-center gap-x-2">
						<RemoveIcon />

						<span>Remove</span>
					</button>
				</div>
			</div>
			<div className="w-full md:w-3/5 lg:w-2/5 max-w-[600px] mt-12 flex flex-col gap-6">
				<InputField
					type="text"
					label="Full Name"
					placeholder="John Doe"
				/>
				<InputField
					type="text"
					label="Email"
					placeholder="johhd@gmail.com"
				/>
				<PhoneInputField
					label="Phone Number"
					placeholder=""
				/>
			</div>

			<div className="mt-6">
				<button className="w-[200px] py-3 px-4 bg-orange-1 text-white-1 rounded-full">
					Update
				</button>
			</div>
		</div>
	);
}
