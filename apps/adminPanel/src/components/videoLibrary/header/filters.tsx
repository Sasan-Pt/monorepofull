import InputField from "@repo/ui/componentsField/inputField";
import SelectField from "@repo/ui/componentsField/selectField";

const Filters = () => {
	return (
		<div className="flex gap-4">
			<InputField placeholder="Search videos..." />
			<SelectField items={[{ value: "all", label: "All Categories" }]} />
		</div>
	);
};

export default Filters;
