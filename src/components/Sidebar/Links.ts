import {
	AcademicLevels,
	Admins,
	Books,
	ContentType,
	Countries,
	Coupons,
	Grid,
	Platforms,
	Settings,
	Users,
	Withdrawals,
} from "../../svgs/sidebarSvgs";

interface ILink {
	name: string;
	icon?: any;
	href: string;
}
export const links: ILink[] = [
	{ name: "Dashboard", href: "/", icon: Grid },
	{
		name: "Books",
		href: "/books",
		icon: Books,
	},
	{
		name: "Users",
		href: "/users",
		icon: Users,
	},
	{
		name: "Admins",
		href: "/admins",
		icon: Admins,
	},
	{
		name: "Coupon codes",
		href: "/coupon-codes",
		icon: Coupons,
	},
	{
		name: "Academic Levels",
		href: "/academic-levels",
		icon: AcademicLevels,
	},
	{
		name: "Platforms",
		href: "/platforms",
		icon: Platforms,
	},
	{
		name: "Countries",
		href: "/countries",
		icon: Countries,
	},
	{
		name: "Content type",
		href: "/content-type",
		icon: ContentType,
	},
	{
		name: "Withdrawals",
		href: "/withdrawals",
		icon: Withdrawals,
	},
	{
		name: "Settings",
		href: "/settings",
		icon: Settings,
	},
];
