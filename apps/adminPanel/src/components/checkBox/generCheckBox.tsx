import Boxes from "./boxes";

const GenerCheckBox = () => {
	const genersTypes: string[] = ["series", "movies"];
	return genersTypes.map((label) => {
		return <Boxes key={label} label={label} />;
	});
};

export default GenerCheckBox;
