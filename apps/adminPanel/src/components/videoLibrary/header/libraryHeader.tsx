import { Button } from "@repo/ui/components/button";
import Filters from "./filters";

const LibraryHeader = () => {
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
		</section>
	);
};
export default LibraryHeader;
