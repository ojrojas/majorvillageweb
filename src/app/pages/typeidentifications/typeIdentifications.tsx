import React from "react";
import { Button, Divider, Grid, Paper } from "@mui/material";
import { getAllTypeIdentifications } from "./redux/typeidentification-actions";
import ListTypeIdentificationComponent from "./components/listtypeidentifications.component";
import FormTypeIdentificationCreateComponent from "./components/formtypeidentificationcreate.component";
import DialogComponent from "../../components/modal/dialog.component";
import { ITypeIdentification } from "../../core/models/typeidentification/typeidentification";
import { useAppDispatch, useAppSelector } from "../../hooks";
import LoadingBackdropComponent from "../../components/loaders/backdrop.component";
import HeaderComponent from "../../components/headers/headerpage/header.component";

const TypeIdentificationPage = () => {
	const [open, setOpen] = React.useState<boolean>(false);
	const dispatch = useAppDispatch();
	const {loading} = useAppSelector(state => state.typeIdentifications);
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
		<React.Fragment>
			<Grid container sx={{ height: "100vh" }} gridRow={1}>
				<Grid item xs={12} md={12} lg={12} xl={12}>
					<Paper  elevation={4} sx={{ backgroundColor: "#fff", height: "99%",  padding:5 }}>
						<HeaderComponent namePage="Type identifications" subNamePage="List Users" actionButtons={<Button variant="outlined" onClick={handleCreateUser}>Add</Button>}/>
						<Divider />
						<br/>
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
						<ListTypeIdentificationComponent setEditTypeIdentification={handleEditOpenModal} />
					</Paper>
				</Grid>
			</Grid>
			<LoadingBackdropComponent open={loading}/>
		</React.Fragment>
	);
};

export default TypeIdentificationPage;