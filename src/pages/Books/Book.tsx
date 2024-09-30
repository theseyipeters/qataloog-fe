import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export interface Book {
	_id: string;
	title: string;
	author: string;
	description: string;
	date_released: string;
	file_type: string;
	language: string;
	no_of_pages: number;
	cover_img: string;
	isbn: string;
	subjects: string[];
	status: string;
	bookUrl: string;
}
interface BookProps {
	book: Book;
}
export default function Book({ book }: BookProps) {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => navigate(`/books/${book._id}`)}
			className="flex flex-col w-full cursor-pointer">
			<div className="h-[270px] rounded-xl w-full">
				<img
					className="w-full h-full object-cover object-center rounded-xl"
					src={book.cover_img}
					alt={book.isbn}
				/>
			</div>

			<div className="mt-3 flex flex-col gap-1 w-full">
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
	);
}
