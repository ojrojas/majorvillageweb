import { date, object, string } from "yup";

export const schema = object({
	name: string().required("First name is required"),
	lastName: string().required("Last name is required"),
	identification: string().required("Identification is required"),
	birthDate: date().required("BirtDate is required"),
	typeIdentificationId: string().required("Type identification is required"),
	typeUserId: string().required("Type user is required"),
	contact: string().required("Contact is required"), 
	address: string().required("Address is required")
});