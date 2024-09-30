import { useState } from "react";
import PageWrap from "../../components/Layout/PageWrap/PageWrap";
import Profile from "./Profile/Profile";
import Password from "./Password/Password";
import Subscriptions from "./Subscriptions/Subscriptions";
import PublisherEarnings from "./PublisherEarnings/PublisherEarnings";

export default function Settings() {
	// State to manage the active tab
	const [activeTab, setActiveTab] = useState("Profile");

	// Tabs array
	const tabs = ["Profile", "Password", "Subscriptions", "Publisher Earnings"];

	return (
		<PageWrap>
			<div className="w-full pt-[20px] flex flex-col gap-6 overflow-auto h-full">
				<div className="w-full flex items-center justify-between">
					<h1 className="text-3xl lg:text-4xl font-bold text-gray-2">
						Settings
					</h1>
				</div>

				<div className="w-full grid grid-cols-2 md:flex gap-y-2">
					{tabs.map((tab, index) => (
						<button
							className={`mr-3 md:mr-5 py-1 ${
								activeTab === tab ? "border-b-4 border-orange-1" : ""
							} focus:outline-none`}
							onClick={() => setActiveTab(tab)}
							key={index}>
							{tab}
						</button>
					))}
				</div>

				<div className={`w-full mt-6 h-full`}>
					{activeTab === "Profile" && <Profile />}
					{activeTab === "Password" && <Password />}
					{activeTab === "Subscriptions" && <Subscriptions />}
					{activeTab === "Publisher Earnings" && <PublisherEarnings />}
				</div>
			</div>
		</PageWrap>
	);
}
