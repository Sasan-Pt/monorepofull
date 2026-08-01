import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@repo/ui/components/avatar";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Select } from "@repo/ui/components/selectParts";
import InputField from "@repo/ui/componentsField/inputField";
import TextAreaField from "@repo/ui/componentsField/textAreaField";
import { ThemeToggle } from "@repo/ui/theme/index.tsx";
import { Form, FormProvider, useForm } from "react-hook-form";
import { useCreateMovie } from "./api/media/api/mutations";
import GenerCheckBox from "./components/checkBox/generCheckBox";
import SideMenu from "./components/sideMenu/sideMenu";

function App() {
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
		// <div className="color-red  col-start-2">
		// 	<FormProvider {...methods}>
		// 		<form onSubmit={methods.handleSubmit(onSubmit)}>
		// 			<Label>sadasd</Label>
		// 			<Input />
		// 			<InputField
		// 				label="Example"
		// 				{...register("name", { required: "Required field" })}
		// 				type=""
		// 				className="bg-repeat"
		// 				error={errors.example?.message as string}
		// 			/>
		// 			<TextAreaField />
		// 			<GenerCheckBox />
		// 			<button>send</button>
		// 		</form>
		// 	</FormProvider>
		// </div>
		<div className="col-start-2 flex">
			<div className="w-3/4">hi</div>
			<ThemeToggle />
		</div>
	);
}

export default App;
