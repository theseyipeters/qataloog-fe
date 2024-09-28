import { useState } from "react";
import PageWrap from "../../../components/Layout/PageWrap/PageWrap";
import booksData from "../../../assets/mock_data/books.json";
import {
	NextButton,
	OptionsIcon,
	PreviousButton,
	ShareIcon,
} from "../../../svgs/svgs";
import { Icon } from "@iconify/react/dist/iconify.js";
import ReactPaginate from "react-paginate";

export default function ContentPage() {
	const book = booksData[0];
	const itemsPerPage = 8; // Set the number of items per page
	const [currentPage, setCurrentPage] = useState(0);

	// Calculate the items to display based on the current page
	const offset = currentPage * itemsPerPage;
	const currentItems = booksData.slice(offset, offset + itemsPerPage);
	const pageCount = Math.ceil(booksData.length / itemsPerPage);

	const handlePageClick = ({ selected }: any) => {
		setCurrentPage(selected);
	};

	return (
		<PageWrap>
			<div className="pt-[20px] flex flex-col gap-6 overflow-auto">
				<div className="flex items-start gap-10">
					<div className="border border-orange-1 p-10 rounded-xl bg-orange-1/10">
						<img
							src={book.cover_img}
							className="w-[170px] h-[200px] object-cover rounded-md"
							alt={book.title}
						/>
					</div>

					<div className="w-full h-auto">
						<p className="font-semibold text-orange-1 text-lg">Paper</p>
						<div className="w-full flex flex-col mt-4">
							<div className="w-full flex items-center justify-between">
								<h1 className="text-4xl font-semibold">{book.title}</h1>
								<OptionsIcon />
							</div>

							<p className="text-xl mt-3">{book.author}</p>

							<div className="flex items-center mt-3">
								<p>{book.date_released}</p>
								<div className="ml-10 bg-green-500/10 border border-green-600/20 py-2 px-8 rounded-full w-fit text-green-600">
									{book.status}
								</div>
							</div>

							<div className="flex gap-6 mt-5">
								<button className="py-3 px-12 bg-orange-1 text-white-1 rounded-full">
									Read now
								</button>

								<ShareIcon />
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex flex-col  md:flex-col xl:flex-row items-start gap-10">
					<div className="w-full xl:w-1/4 flex flex-col gap-3">
						<h3 className="font-semibold text-xl">Information</h3>
						<div className="w-full grid grid-cols-4 xl:grid-cols-1 gap-4">
							<div className="flex gap-3">
								<Icon
									icon={"tabler:user"}
									fontSize={24}
								/>
								<p>{book.author}</p>
							</div>
							<div className="flex gap-3">
								<Icon
									icon={"tabler:world"}
									fontSize={24}
								/>
								<p>{book.language}</p>
							</div>
							<div className="flex gap-3">
								<Icon
									icon={"tabler:file"}
									fontSize={24}
								/>
								<p className="uppercase">{book.file_type}</p>
							</div>
							<div className="flex gap-3">
								<Icon
									icon={"tabler:book"}
									fontSize={24}
								/>
								<p>{book.no_of_pages} pages</p>
							</div>
							<div className="flex flex-col 2xl:flex-row gap-3">
								<h5 className="font-semibold">ISBN/ISSN</h5>
								<p>{book.isbn}</p>
							</div>
							<div className="flex flex-col gap-2">
								<h5 className="font-semibold">Subjects</h5>
								<div className="flex flex-col xl:flex-col gap-1">
									{book.subjects.map((item, index) => (
										<p key={index}>{item}</p>
									))}
								</div>
							</div>
							<div className="flex flex-col lg:flex-col 2xl:flex-row gap-1">
								{book.subjects.map((item, index) => (
									<p
										key={index}
										className="px-3 py-1 bg-orange-1/10 text-sm text-orange-1 rounded-full w-fit flex-shrink-0">
										{item}
									</p>
								))}
							</div>

							<div className="flex flex-col lg:flex-col 2xl:flex-col gap-3 2xl:gap-3">
								<h5 className="font-semibold">Description</h5>
								<p>{book.description}</p>
							</div>
						</div>
					</div>
					<div className="w-full ">
						<div className="w-full flex items-center justify-between">
							<h3 className="font-semibold text-xl">Related content</h3>
							<ReactPaginate
								previousLabel={<PreviousButton />}
								nextLabel={<NextButton />}
								breakLabel={"..."}
								pageCount={pageCount}
								marginPagesDisplayed={2}
								pageRangeDisplayed={3}
								onPageChange={handlePageClick}
								containerClassName={"pagination flex justify-center gap-3"}
								pageClassName={
									"border w-10 h-10 flex items-center justify-center rounded-4"
								}
								previousClassName={
									"border p-2 flex items-center justify-center"
								}
								nextClassName={"border p-2 flex items-center justify-center"}
								activeClassName={
									"bg-transparent text-orange-1 border border-orange-1"
								}
							/>
						</div>

						<div className="w-full grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-4">
							{currentItems.map((book, index) => (
								<div
									className="flex flex-col"
									key={index}>
									<div className="h-[270px] rounded-xl">
										<img
											className="w-full h-full object-cover object-center rounded-xl"
											src={book.cover_img}
											alt={book.isbn}
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

											<p className="text-sm text-gray-1">
												{book.date_released}
											</p>

											<div className="text-[#493452] flex items-center gap-0">
												<Icon icon={"tabler:file"} />
												<p className="text-xs uppercase">{book.file_type}</p>
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</PageWrap>
	);
}
