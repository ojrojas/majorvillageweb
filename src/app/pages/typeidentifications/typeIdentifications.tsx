import React from "react";
import { Button, Grid } from "@mui/material";
import { getAllTypeIdentifications } from "./redux/typeidentification-actions";
import ListTypeIdentificationComponent from "./components/listtypeidentifications.component";
import FormTypeIdentificationCreateComponent from "./components/formtypeidentificationcreate.component";
import DialogComponent from "../../components/modal/dialog.component";
import { ITypeIdentification } from "../../core/models/typeidentification/typeidentification";
import { useAppDispatch } from "../../hooks";

const TypeIdentificationPage = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const dispatch = useAppDispatch();
	const [typeIdentification, setTypeIdentification] = React.useState<ITypeIdentification | undefined>(undefined);
	const [typeComponent, setTypeComponent] = React.useState<"CREATE" | "EDIT">("CREATE");


	React.useEffect(() => {
		dispatch(getAllTypeIdentifications());
	}, []);

	const handleToggleModal = () => {
		setOpen(!open);
	};

	const handleCreateUser = () => {
		setTypeComponent("CREATE");
		setTypeIdentification(undefined);
		handleToggleModal();
	};

	const handleEditOpenModal = (typeIdentification: ITypeIdentification) => {
		setTypeIdentification(undefined);
		setTypeIdentification(typeIdentification);
		setTypeComponent("EDIT");
		handleToggleModal();
	};

	return (
		<Grid container spacing={1}>
			<Grid alignItems={"center"}>
				<h2>List Type Identifications</h2>
				<DialogComponent id={"modal-create-edit-typeidentifications"}
					titleDialog={typeComponent === "EDIT" ? "Edit Type Identification" : "Create Type Identification"}
					onClose={() => {
						setOpen(false);
					}}
					open={open}
					maxWidth={"md"}
					fullWidth={true}>
					<FormTypeIdentificationCreateComponent typeComponent={typeComponent} typeIdentificationExists={typeIdentification} onClose={handleToggleModal} />
				</DialogComponent>
				<Button onClick={handleCreateUser}>Add Type Identifications</Button>
			</Grid>
			<ListTypeIdentificationComponent setEditTypeIdentification={handleEditOpenModal} />
		</Grid>
	);
};

export default TypeIdentificationPage;