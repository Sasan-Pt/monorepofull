import type { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import type { Select as SelectPrimitive } from "@base-ui/react/select";
import type { Ref } from "react";

export interface ShadInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string;
	wrapperClassName?: string;
	iconClassName?: string;
	icon?: React.ReactNode;
	description?: string;
	ref?: Ref<HTMLInputElement> | undefined;
}

export interface ShadTextAreaProps
	extends React.InputHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: string;
	description?: string;
	ref?: Ref<HTMLTextAreaElement> | undefined;
}

interface SelectPropsType {
	value: string | number;
	label: string;
}

export interface SSelectProps {
	items: SelectPropsType[];
	ref?: Ref<HTMLButtonElement> | undefined;
}

export interface ShadSelectProps
	extends Omit<SelectPrimitive.Root.Props<string | number>, "children"> {
	label?: string;
	error?: string;
	description?: string;
	items: SelectPropsType[];
	ref?: Ref<HTMLButtonElement> | undefined;
}

export interface ShadCheckBoxProps extends CheckboxPrimitive.Root.Props {
	label: string;
	error?: string;
	wrapperClassName?: string;
	description?: string;
	ref?: Ref<HTMLSpanElement> | undefined;
}

export interface SheetContentProps {
	children: React.ReactNode;
	title?: string;
	description?: string;
	open: boolean;
	onOpenChange: () => void;
}
