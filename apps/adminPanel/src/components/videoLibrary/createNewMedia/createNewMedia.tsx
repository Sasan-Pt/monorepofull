import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import InputField from "@repo/ui/componentsField/inputField";
import TextAreaField from "@repo/ui/componentsField/textAreaField";
import { FormProvider, useForm } from "react-hook-form";
import { useCreateMovie } from "@/api/media/api/mutations";
import GenerCheckBox from "@/components/checkBox/generCheckBox";

const CreateNewMedia = () => {
	const methods = useForm();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = methods;

	const createMovieMutation = useCreateMovie();

	const onSubmit = (data) => {
		console.log(data, "im from before");
		createMovieMutation.mutate(data);
	};

	return (
		<div className="color-red  col-start-2">
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<Label>sadasd</Label>
					<Input />
					<InputField
						label="Example"
						{...register("name", { required: "Required field" })}
						type=""
						className="bg-repeat"
						error={errors.example?.message as string}
					/>
					<TextAreaField />
					<GenerCheckBox />
					<button type="button">send</button>
				</form>
			</FormProvider>
		</div>
	);
};

export default CreateNewMedia;
