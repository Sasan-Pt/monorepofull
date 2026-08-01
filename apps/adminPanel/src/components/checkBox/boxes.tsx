import CheckBoxField from "@repo/ui/componentsField/checkBoxField";
import { useController, useFormContext } from "react-hook-form";
import type { GenreProsType } from "@/types/componentsTypes";

const Boxes = (props: GenreProsType) => {
	const { label } = props;

	const { control } = useFormContext();

	const { field } = useController({
		name: label,
		control,
		defaultValue: true,
	});
	return (
		<div className="flex flex-row gap-4">
			<CheckBoxField
				key={label}
				label={label}
				checked={field.value}
				onCheckedChange={(checked: boolean) => field.onChange(checked === true)}
				name={field.name + label}
				ref={field.ref}
				wrapperClassName={
					"flex-row-reverse max-w-26 justify-center items-center "
				}
				className={"shrink w-4! after:relative! "}
			/>
		</div>
	);
};
export default Boxes;
