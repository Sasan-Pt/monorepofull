import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "../components/fields";
import { TextArea } from "../components/textArea";
import type { ShadTextAreaProps } from "../uiTypes/types";

const TextAreaField = (props: ShadTextAreaProps) => {
	const { label, error, ref, id, description, ...textAreaProps } = props;
	const inputId = id ?? textAreaProps.name;
	const errorId = `${inputId}-error`;
	return (
		<Field data-invalid={!!error}>
			{label && <FieldLabel htmlFor={inputId}>{label}</FieldLabel>}

			<TextArea
				ref={ref}
				id={inputId}
				aria-invalid={!!error}
				aria-describedby={error ? errorId : undefined}
				{...textAreaProps}
			/>

			{description && <FieldDescription>{description}</FieldDescription>}

			{error && <FieldError id={errorId} errors={[{ message: error }]} />}
		</Field>
	);
};
export default TextAreaField;
