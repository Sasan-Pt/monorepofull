import clsx from "clsx";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "../components/fields";
import { Input } from "../components/input";
import type { ShadInputProps } from "../uiTypes/types";

const InputField = (props: ShadInputProps): React.ReactElement => {
	const {
		label,
		error,
		description,
		id,
		ref,
		wrapperClassName,
		iconClassName,
		icon,
		...inputProps
	} = props;
	const inputId = id ?? inputProps.name;
	const errorId = `${inputId}-error`;

	return (
		<Field data-invalid={!!error}>
			{label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}

			<div className={clsx("items-center relative flex", wrapperClassName)}>
				{icon && icon}

				<Input
					ref={ref}
					id={inputId}
					aria-invalid={!!error}
					aria-describedby={error ? errorId : undefined}
					{...inputProps}
				/>
			</div>

			{description && <FieldDescription>{description}</FieldDescription>}

			{error && <FieldError id={errorId} errors={[{ message: error }]} />}
		</Field>
	);
};
export default InputField;
