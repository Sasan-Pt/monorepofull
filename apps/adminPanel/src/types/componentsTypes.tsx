import type { ColumnDef } from "@tanstack/react-table";

export interface GenreProsType {
	label: string;
}

export interface TableProps<T> {
	data: T[];
	columns: ColumnDef<T>[];
	tableHeaderClassName?: string;
}
