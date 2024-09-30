import React, { FC } from "react";
import CountrySelect2 from "../Select/CountrySelect2";

interface TableProps<T> {
	columns: string[];
	rows: T[];
	renderRow: (row: T, index: number) => React.ReactNode;
}

const TableComponent: FC<TableProps<any>> = ({ columns, rows, renderRow }) => {
	return (
		<div className="overflow-scroll rounded-xl">
			<table className="w-full table-auto border-separate border-spacing-y-1">
				<thead className="bg-white-2 rounded-3xl">
					<tr className="">
						{columns.map((column, index) => (
							<th
								key={index}
								className="px-4 py-4 text-left bg-transparent uppercase">
								{column}
							</th>
						))}

						<div className="flex items-center justify-center w-full h-fit py-3">
							<CountrySelect2 />
						</div>
					</tr>
				</thead>
				<tbody>
					{rows.length > 0 ? (
						rows.map((row, index) => (
							<tr
								key={index}
								className="bg-white-3">
								{renderRow(row, index)}
							</tr>
						))
					) : (
						<tr>
							<td
								colSpan={columns.length}
								className="text-center p-4">
								No data available
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TableComponent;
