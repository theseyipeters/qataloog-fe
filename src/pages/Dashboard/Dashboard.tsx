import { Icon } from "@iconify/react/dist/iconify.js";
import SearchInput from "../../components/_common/SearchInput/SearchInput";
import PageWrap from "../../components/Layout/PageWrap/PageWrap";
import { useState } from "react";
import booksData from "../../assets/mock_data/books.json";
import ReactPaginate from "react-paginate";
import { NextButton, PreviousButton } from "../../svgs/svgs";

const filters = [
	{ id: "interests", name: "my interests", icon: "tabler:command" },
	{ id: "books", name: "books", icon: "tabler:books" },
	{ id: "audiobooks", name: "audiobooks", icon: "tabler:brand-douban" },
	{ id: "videos", name: "videos", icon: "tabler:video" },
	{ id: "magazines", name: "magazines", icon: "tabler:book-2" },
	{ id: "journals", name: "journals", icon: "tabler:notes" },
	{ id: "papers", name: "papers", icon: "tabler:file" },
	{ id: "thesis", name: "thesis", icon: "tabler:address-book" },
	{ id: "dissertation", name: "dissertation", icon: "tabler:file-invoice" },
];

export default function Dashboard() {
	const [activeFilters, setActiveFilters] = useState<string[]>([]);
	const [currentPage, setCurrentPage] = useState(0);
	const booksPerPage = 12;

	// Calculate the books to display on the current page
	const indexOfLastBook = (currentPage + 1) * booksPerPage;
	const indexOfFirstBook = indexOfLastBook - booksPerPage;
	const currentBooks = booksData.slice(indexOfFirstBook, indexOfLastBook);

	// Handle page click event
	const handlePageClick = (event: any) => {
		setCurrentPage(event.selected);
	};

	const toggleFilter = (id: string) => {
		setActiveFilters(
			(prevFilters) =>
				prevFilters.includes(id)
					? prevFilters.filter((filterId) => filterId !== id) // Remove if already active
					: [...prevFilters, id] // Add if inactive
		);
	};

	const details = [
		{
			name: "Books",
			count: `${booksData.length}`,
			icon: "tabler:books",
			trend: 10.7,
		},
		{
			name: "Users",
			count: "102",
			icon: "tabler:notebook",
			trend: 6.58,
		},
		{
			name: "Paid Subscribers",
			count: "55",
			icon: "tabler:notebook",
			trend: 12.0,
		},
	];

	return (
		<PageWrap>
			<div className="pt-[20px] flex flex-col gap-6 overflow-auto">
				<div className="flex items-center justify-between">
					<h1 className="text-4xl font-bold text-gray-2">Welcome Back</h1>
					<div className="flex flex-row items-center gap-4">
						<div className="w-[300px]">
							<SearchInput />
						</div>
						<svg
							width="42"
							height="42"
							viewBox="0 0 42 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<rect
								x="0.75"
								y="0.75"
								width="40.5"
								height="40.5"
								rx="20.25"
								fill="#FEFEFF"
							/>
							<rect
								x="0.75"
								y="0.75"
								width="40.5"
								height="40.5"
								rx="20.25"
								stroke="#D0D0D5"
								stroke-width="0.5"
							/>
							<path
								d="M31 21C31 15.4772 26.5228 11 21 11C15.4772 11 11 15.4772 11 21C11 26.5228 15.4772 31 21 31C26.5228 31 31 26.5228 31 21Z"
								stroke="#323233"
								stroke-width="1.5"
							/>
							<path
								d="M18 21L24.0001 21"
								stroke="#323233"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M19 24.5H23"
								stroke="#323233"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M17 17.5H25"
								stroke="#323233"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</div>

				<div className="w-full gap-10 justify-between items-center flex flex-row">
					{details.map((detail, index) => (
						<div
							key={index}
							className="bg-white-2 px-6 py-6 w-1/3 flex flex-row items-start justify-between rounded-2xl h-[160px]">
							<div className="flex flex-col gap-2">
								<h3>{detail.name}</h3>

								<p className="text-2xl">{detail.count}</p>

								<div className="flex gap-3 items-center">
									<div className="bg-green-500/10 text-green-600 py-2 px-6 flex gap-2 items-center rounded-full">
										<Icon icon={"tabler:trending-up"} />
										<p>{detail.trend}%</p>
									</div>
									<p className="text-gray-1">Since last month</p>
								</div>
							</div>
							<div className="w-12 h-12 bg-orange-1 text-white-2 rounded-full flex items-center justify-center">
								<Icon
									icon={detail.icon}
									fontSize={30}
								/>
							</div>
						</div>
					))}
				</div>

				{/* -----------filters ----------------- */}

				<div className="w-full flex flex-row items-center justify-between gap-4">
					{filters.map((item, index) => (
						<button
							onClick={() => toggleFilter(item.id)}
							key={index}
							className={`flex flex-row gap-2 items-center px-5 py-2 rounded-full transition-all duration-500  ${
								activeFilters.includes(item.id)
									? "text-orange-1 bg-orange-1/10"
									: "text-gray-1"
							}`}>
							<span>
								<Icon icon={item.icon} />
							</span>
							<span className="capitalize">{item.name}</span>
						</button>
					))}
				</div>

				{/* ------------------render books --------------------- */}

				<div className="flex flex-col gap-5">
					<div>
						<button className="flex gap-2 items-center text-orange-1 ml-auto">
							<span>See all ({booksData.length})</span>
							<Icon
								icon={"tabler:arrow-narrow-right"}
								fontSize={20}
							/>
						</button>
					</div>

					<div className="grid grid-cols-6 gap-5">
						{currentBooks.map((book, index) => (
							<div
								className="flex flex-col"
								key={index}>
								<div className="h-[270px] rounded-xl">
									<img
										className="w-full h-full object-cover object-center rounded-xl"
										src={book?.cover_img}
										alt={book?.isbn}
									/>
								</div>

								<div className="mt-3 flex flex-col gap-1">
									<p className="font-semibold">{book.title}</p>
									<div className="text-gray-1/60 flex items-center gap-1">
										<Icon
											icon={"tabler:user"}
											fontSize={16}
										/>
										<p className="text-base">{book.author}</p>
									</div>

									<div className="mt-2 flex flex-row gap-2 items-center justify-between w-full">
										<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>

										<p className="text-sm text-gray-1">{book.date_released}</p>

										<div className="text-[#493452] flex items-center gap-0">
											<Icon icon={"tabler:file"} />
											<p className="text-xs uppercase">{book.file_type}</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="ml-auto">
						<ReactPaginate
							previousLabel={<PreviousButton />}
							nextLabel={<NextButton />}
							breakLabel={"..."}
							pageCount={Math.ceil(booksData.length / booksPerPage)}
							// pageCount={10}
							marginPagesDisplayed={2}
							pageRangeDisplayed={3}
							onPageChange={handlePageClick}
							containerClassName={"pagination flex justify-center mt-4 gap-3"}
							pageClassName={
								"border w-10 h-10 flex items-center justify-center rounded-4"
							}
							previousClassName={"border p-2 flex items-center justify-center"}
							nextClassName={"border p-2 flex items-center justify-center"}
							activeClassName={
								"bg-transparent text-orange-1 border border-orange-1"
							}
						/>
					</div>
				</div>
			</div>
		</PageWrap>
	);
}
