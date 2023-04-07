import React from "react";
import { Grid, Button, Paper, Divider } from "@mui/material";
import ListTypeUserComponent from "./components/listtypeusers.component";
import { getAllTypeUsers } from "./redux/typeuser-actions";
import FormTypeUserCreateComponent from "./components/formtypeusercreate.component";
import DialogComponent from "../../components/modal/dialog.component";
import { ITypeUser } from "../../core/models/typeuser/typeuser";
import { useAppDispatch } from "../../hooks";
import HeaderComponent from "../../components/headers/headerpage/header.component";

const TypeUsersPage: React.FC = () => {
	const dispatch = useAppDispatch();
	const [open, setOpen] = React.useState<boolean>(false);
	const [user, setTypeUser] = React.useState<ITypeUser | undefined>(undefined);
	const [typeComponent, setTypeComponent] = React.useState<"CREATE" | "EDIT">("CREATE");

	React.useEffect(() => {
		dispatch(getAllTypeUsers());
	}, []);

	const handleToggleModal = () => {
		setOpen(!open);
	};

	const handleCreateTypeUser = () => {
		setTypeComponent("CREATE");
		setTypeUser(undefined);
		handleToggleModal();
	};

	const handleEditOpenModal = (userType: ITypeUser) => {
		setTypeUser(undefined);
		setTypeUser(userType);
		setTypeComponent("EDIT");
		handleToggleModal();
	};

	return (
		<React.Fragment>
			<Grid container sx={{ height: "100vh" }} gridRow={1}>
				<Grid item xs={12} md={12} lg={12} xl={12}>
					<Paper elevation={4} sx={{ backgroundColor: "#fff", height: "99%", padding: 5 }}>
						<HeaderComponent namePage="Type users" subNamePage="List Users" actionButtons={<Button variant="outlined" onClick={handleCreateTypeUser}>Add</Button>} />
						<br />
						<Divider />
						<ListTypeUserComponent setEditTypeUser={handleEditOpenModal} />
						<DialogComponent id={"modal-create-edit-typeusers"}
							titleDialog={typeComponent === "EDIT" ? "Edit Type User" : "Create Type User"}
							onClose={() => {
								setOpen(false);
							}}
							open={open}
							maxWidth={"md"}
							fullWidth={true}>
							<FormTypeUserCreateComponent onClose={handleToggleModal} typeComponent={typeComponent} typeUserExists={user} />
						</DialogComponent>
					</Paper>
				</Grid>
			</Grid>
		</React.Fragment>);
};

export default TypeUsersPage;