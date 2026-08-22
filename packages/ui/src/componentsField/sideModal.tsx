import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "#/components/sheetsParts";
import type { SheetContentProps } from "#/uiTypes/types";

const SideModal = (props: SheetContentProps) => {
	const { children, title, description, open, onOpenChange } = props;

	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetTrigger>{<Menu />}</SheetTrigger>
			<SheetContent
				className={" w-full! max-w-none! h-full! max-h-none!"}
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
