import { useState } from "react";
import TableComponent from "../../../components/_common/Table/Table";
import {
	CheckIcon,
	CloseIcon,
	DeleteIcon,
	EditIcon,
	MinusIcon,
	NextButton,
	PlusIcon,
	PreviousButton,
} from "../../../svgs/svgs";
import ReactPaginate from "react-paginate";

interface RowData {
	sn: number;
	academicLevel: string;
	rate: string;
	dateCreated: string;
	dateUpdated: string;
	isEditing: boolean; // New property to track editing state
}

export default function PublisherEarnings() {
	const [rows, setRows] = useState<RowData[]>([
		{
			sn: 1,
			academicLevel: "Undergraduate",
			rate: "100",
			dateCreated: "2023-09-15",
			dateUpdated: "2023-09-20",
			isEditing: false, // Initialize as not editing
		},
		{
			sn: 2,
			academicLevel: "Graduate",
			rate: "2000",
			dateCreated: "2023-09-12",
			dateUpdated: "2023-09-18",
			isEditing: false, // Initialize as not editing
		},
		{
			sn: 3,
			academicLevel: "Postgraduate",
			rate: "1500",
			dateCreated: "2023-09-10",
			dateUpdated: "2023-09-15",
			isEditing: false, // Initialize as not editing
		},
	]);

	const columns = [
		"S/N",
		"Academic Level",
		"Rate",
		"Date Created",
		"Date Updated",
		"",
	];

	const academicLevels = [
		"Undergraduate",
		"Graduate",
		"Postgraduate",
		"Doctorate",
	];

	const handleAcademicLevelChange = (index: number, newValue: string) => {
		const updatedRows = rows.map((row, rowIndex) => {
			if (rowIndex === index) {
				return { ...row, academicLevel: newValue };
			}
			return row;
		});
		setRows(updatedRows);
	};

	const handleRateChange = (index: number, newValue: string) => {
		const updatedRows = rows.map((row, rowIndex) => {
			if (rowIndex === index) {
				return { ...row, rate: newValue };
			}
			return row;
		});
		setRows(updatedRows);
	};

	const toggleEditMode = (index: number) => {
		const updatedRows = rows.map((row, rowIndex) => {
			if (rowIndex === index) {
				return { ...row, isEditing: !row.isEditing }; // Toggle editing state
			}
			return row;
		});
		setRows(updatedRows);
	};

	return (
		<div className="flex flex-col h-full">
			<TableComponent
				columns={columns}
				rows={rows}
				renderRow={(row: RowData, index: number) => (
					<>
						<td className="mb-3 px-4 py-2">{row.sn}</td>
						<td className="mb-3 px-4 py-2">
							{row.isEditing ? (
								<select
									value={row.academicLevel}
									onChange={(e) =>
										handleAcademicLevelChange(index, e.target.value)
									}
									className="bg-transparent px-2 py-1 rounded w-full focus:outline-none">
									{academicLevels.map((level) => (
										<option
											key={level}
											value={level}>
											{level}
										</option>
									))}
								</select>
							) : (
								<span>{row.academicLevel}</span> // Display selected value
							)}
						</td>
						<td className="mb-3 px-4 py-2 w-fit">
							{row.isEditing ? (
								<input
									type="text"
									value={row.rate}
									onChange={(e) => handleRateChange(index, e.target.value)}
									className="px-2 py-1 rounded w-fit focus:outline-none border bg-gray-100/20"
								/>
							) : (
								<span>{row.rate}</span> // Display rate
							)}
						</td>
						<td className="mb-3 px-4 py-2">{row.dateCreated}</td>
						<td className="mb-3 px-4 py-2">{row.dateUpdated}</td>
						<td className="mb-3 px-4 py-2 text-center flex items-center justify-start gap-3">
							<button
								onClick={() => toggleEditMode(index)}
								className="bg-transparent flex gap-2 text-white px-3 py-1 rounded">
								<p className={`${row.isEditing ? "text-green-600" : ""}`}>
									{row.isEditing ? "Update" : "Edit"}
								</p>
								<span>{row.isEditing ? <CheckIcon /> : <EditIcon />}</span>
							</button>
							<div>
								{row.isEditing ? (
									<button className="flex items-center gap-2 text-red-500">
										Cancel{" "}
										<span>
											<CloseIcon />
										</span>{" "}
									</button>
								) : (
									<DeleteIcon />
								)}
							</div>
						</td>
					</>
				)}
			/>

			<div className="mt-4 w-full flex flex-col  md:flex-row gap-3 justify-between items-start md:items-center">
				<button className="flex items-center gap-3 px-4 py-2 lg:py-3 lg:px-8 bg-orange-1 text-white-1 rounded-full">
					<span className="text-white-3">
						<PlusIcon />
					</span>
					Add Level Rate
				</button>

				<div className="border rounded-md p-2 flex items-center gap-3">
					<input
						value={"10%"}
						className="px-2 text-gray-1 rounded focus:outline-none w-[70px] h-[35px] border"
					/>

					<div className="text-orange-1 flex items-center gap-1">
						<PlusIcon />
						<MinusIcon />
					</div>
				</div>
			</div>

			<div className="flex mt-auto ml-auto">
				<ReactPaginate
					previousLabel={<PreviousButton />}
					nextLabel={<NextButton />}
					breakLabel={"..."}
					pageCount={4}
					marginPagesDisplayed={2}
					pageRangeDisplayed={3}
					containerClassName={"pagination flex justify-center gap-3"}
					pageClassName={
						"border w-10 h-10 text-gray-1 flex items-center justify-center rounded-4"
					}
					previousClassName={"border p-2 flex items-center justify-center"}
					nextClassName={"border p-2 flex items-center justify-center"}
					activeClassName={
						"bg-transparent text-orange-1 border border-orange-1"
					}
				/>
			</div>
		</div>
	);
}
