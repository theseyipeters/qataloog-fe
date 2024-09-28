interface PageWrapProps {
	children: React.ReactNode;
}

export default function PageWrap({ children }: PageWrapProps) {
	return (
		<>
			<div className="h-full">
				{/* <Helmet>
					<title>BNPL - {title || ""}</title>
				</Helmet> */}
				<div className="pt-[100px] pb-8 h-full">
					<div className="my-4 mx-4 lg:mx-8 xl:mx-12 h-full overflow-auto">
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
