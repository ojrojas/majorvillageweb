import { object, string } from "yup";

export const schema = object({
	typeName: string().min(4, "You must provide a string of at least 3 characters").required("type name is required"),
});