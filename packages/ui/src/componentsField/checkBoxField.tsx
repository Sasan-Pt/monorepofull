import { Checkbox } from "../components/checkBox";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "../components/fields";
import type { ShadCheckBoxProps } from "../uiTypes/types";

const CheckBoxField = (props: ShadCheckBoxProps) => {
	const {
		label,
		wrapperClassName,
		error,
		description,
		id,
		ref,
		...CheckBoxProps
	} = props;
	const checkBoxId = id ?? CheckBoxProps.name;
	const errorId = `${checkBoxId}-error`;

	return (
		<Field data-invalid={!!error} className={wrapperClassName}>
			{label && <FieldLabel htmlFor={checkBoxId}>{label}</FieldLabel>}

			<Checkbox
				ref={ref}
				id={checkBoxId}
				aria-invalid={!!error}
				aria-describedby={error ? errorId : undefined}
				{...CheckBoxProps}
			/>

			{description && <FieldDescription>{description}</FieldDescription>}

			{error && <FieldError id={errorId} errors={[{ message: error }]} />}
		</Field>
	);
};

export default CheckBoxField;
