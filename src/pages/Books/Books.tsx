import ReactPaginate from "react-paginate";
import PageWrap from "../../components/Layout/PageWrap/PageWrap";
import booksData from "../../assets/mock_data/books.json";
import { NextButton, PreviousButton } from "../../svgs/svgs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function Books() {
	const [currentPage, setCurrentPage] = useState(0);
	const booksPerPage = 18;

	// Calculate the books to display on the current page
	const indexOfLastBook = (currentPage + 1) * booksPerPage;
	const indexOfFirstBook = indexOfLastBook - booksPerPage;
	const currentBooks = booksData.slice(indexOfFirstBook, indexOfLastBook);

	// Handle page click event
	const handlePageClick = (event: any) => {
		setCurrentPage(event.selected);
	};
	return (
		<PageWrap>
			<div className="pt-[20px] flex flex-col gap-5">
				<div className="flex items-center">
					<h1 className="text-4xl font-bold text-gray-2">All Books</h1>
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
		</PageWrap>
	);
}
