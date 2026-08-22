import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "../components/fields";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/selectParts";
import type { ShadSelectProps } from "../uiTypes/types";

const SelectField = (props: ShadSelectProps): React.ReactElement => {
	const { id, error, ref, description, label, items, ...selectProps } = props;
	const selectId = id ?? selectProps.name;
	const errorId = selectId ? `${selectId}-error` : undefined;

	return (
		<Field data-invalid={!!error}>
			{label && <FieldLabel htmlFor={selectId}>{label}</FieldLabel>}

			<Select id={selectId} items={items} {...selectProps}>
				<SelectTrigger
					ref={ref}
					className="w-full max-w-48"
					aria-invalid={!!error}
					aria-describedby={error ? errorId : undefined}
				>
					<SelectValue />
				</SelectTrigger>
				<SelectContent alignItemWithTrigger={false}>
					<SelectGroup>
						{items.map((item) => (
							<SelectItem key={item.value} value={item.value}>
								{item.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>

			{description && <FieldDescription>{description}</FieldDescription>}

			{error && <FieldError id={errorId} errors={[{ message: error }]} />}
		</Field>
	);
};
export default SelectField;
