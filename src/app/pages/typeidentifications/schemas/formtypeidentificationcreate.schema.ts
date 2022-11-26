import { object, string } from "yup";

export const schema = object({
	name: string().min(2, "You must provide a string of at least 3 characters").required("type identification name is required"),
});