interface ILink {
	name: string;
	icon?: any;
	href: string;
}
export const links: ILink[] = [
	{ name: "Dashboard", href: "/", icon: "tabler:layout-grid" },
	{
		name: "Books",
		href: "/books",
		icon: "tabler:notebook",
	},
];
