import ReactPaginate from "react-paginate";
import PageWrap from "../../components/Layout/PageWrap/PageWrap";
import booksData from "../../assets/mock_data/books.json";
import { NextButton, PreviousButton } from "../../svgs/svgs";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Book from "./Book";

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
					<h1 className="text-3xl lg:text-4xl font-bold text-gray-2">
						All Books
					</h1>
					<button className="flex gap-2 items-center text-orange-1 ml-auto">
						<span>See all ({booksData.length})</span>
						<Icon
							icon={"tabler:arrow-narrow-right"}
							fontSize={20}
						/>
					</button>
				</div>

				<div className="ml-auto">
					<ReactPaginate
						previousLabel={<PreviousButton />}
						nextLabel={<NextButton />}
						breakLabel={"..."}
						pageCount={Math.ceil(booksData.length / booksPerPage)}
						marginPagesDisplayed={2}
						pageRangeDisplayed={3}
						onPageChange={handlePageClick}
						containerClassName={"pagination flex justify-center mt-4 gap-3"}
						pageClassName={
							"border w-10 h-10 flex text-gray-1 items-center justify-center rounded-md"
						}
						previousClassName={`border text-white-1 bg-gray-1 p-3 flex items-center rounded-md justify-center ${
							currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
						}`}
						nextClassName={`border text-white-1 bg-gray-1 p-3 flex items-center rounded-md justify-center ${
							currentPage === Math.ceil(booksData.length / booksPerPage) - 1
								? "opacity-50 cursor-not-allowed"
								: ""
						}`}
						activeClassName={
							"bg-transparent text-orange-1 border border-orange-1"
						}
					/>
				</div>

				<div className="w-full grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
					{currentBooks.map((book) => (
						<Book
							key={book._id}
							book={book}
						/>
					))}
				</div>
			</div>
		</PageWrap>
	);
}
