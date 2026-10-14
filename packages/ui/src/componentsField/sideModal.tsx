import { Menu } from "lucide-react";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "#/components/sheetsParts";
import type { SheetContentProps } from "#/uiTypes/types";

const SideModal = (props: SheetContentProps) => {
	const { children, title, description, open, onOpenChange, triggerClassName } =
		props;

	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetTrigger className={triggerClassName}>{<Menu />}</SheetTrigger>
			<SheetContent
				className={" w-full! max-w-none! h-full! max-h-none! bg-transparent"}
				side={"top"}
			>
				<SheetHeader>
					<SheetTitle>{title}</SheetTitle>
					<SheetDescription>{description}</SheetDescription>
				</SheetHeader>
				{children}
			</SheetContent>
		</Sheet>
	);
};
export default SideModal;
