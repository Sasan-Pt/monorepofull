import { Button } from "@repo/ui/components/button";
import { useQuery } from "@tanstack/react-query";
import { mediaQueries } from "@/api/media/api/queries";
import { Tables } from "@/components/table/table";
import CreateNewMedia from "../createNewMedia/createNewMedia";
import Filters from "./filters";

const LibraryHeader = () => {
	const columns = [
		{
			accessorKey: "title",
			header: "Title",
		},
		{
			accessorKey: "createdAt",
			header: "CreatedAt",
		},
		{
			accessorKey: "status",
			header: "Status",
		},
		{
			accessorKey: "releaseDate",
			header: "Release Date",
		},
	];

	const { data: dataquery, isPending } = useQuery(mediaQueries.list());

	return (
		<section>
			<div className="flex justify-between items-center pt-4">
				<div>
					<h1 className="text-primary! bg-primary-foreground">Video Library</h1>
					<div>Manage Content</div>
				</div>

				<Button variant="default" size="sm">
					Upload Video
				</Button>
			</div>

			<Filters />
			<Tables
				data={dataquery ? dataquery.data : []}
				columns={columns}
				tableHeaderClassName="[&_th]:text-right"
			/>

			<CreateNewMedia />
		</section>
	);
};
export default LibraryHeader;
