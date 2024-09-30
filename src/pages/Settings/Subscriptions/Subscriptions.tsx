import InputField from "../../../components/_common/InputField/InputField";
import CountrySelect from "../../../components/_common/Select/CountrySelect";
import RadioSelect from "../../../components/_common/Select/RadioSelect";

export default function Subscriptions() {
	return (
		<div className="w-full">
			<div className="w-full md:w-3/5 lg:w-2/5 max-w-[600px] flex flex-col gap-6">
				<CountrySelect />

				<RadioSelect />

				<InputField
					label="Plan Duration (Months)"
					value="4"
					placeholder="4"
				/>
				<InputField
					label="Plan Duration (Days)"
					value="120"
					placeholder="120"
				/>
				<InputField
					label="Subscription Fee (₦)"
					value="5000"
					placeholder="5000"
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
