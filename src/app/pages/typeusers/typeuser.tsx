import React from "react";
import { Grid, Button } from "@mui/material";
import ListTypeUserComponent from "./components/listtypeusers.component";
import { getAllTypeUsers } from "./redux/typeuser-actions";
import FormTypeUserCreateComponent from "./components/formtypeusercreate.component";
import DialogComponent from "../../components/modal/dialog.component";
import { ITypeUser } from "../../core/models/typeuser/typeuser";
import { useAppDispatch } from "../../hooks";

const TypeUsersPage: React.FC = ()=>{
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

	const handleCreateUser = () => {
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
		<Grid container spacing={1}>
			<Grid alignItems={"center"}>
				<h2>List Users</h2>
				<DialogComponent id={"modal-create-edit-typeusers"}
					titleDialog={typeComponent === "EDIT" ? "Edit Type User" : "Create Type User"}
					onClose={() => {
						setOpen(false);
					}}
					open={open}
					maxWidth={"md"}
					fullWidth={true}>
					<FormTypeUserCreateComponent typeComponent={typeComponent} typeUserExists={user} onClose={handleToggleModal} />
				</DialogComponent>
				<Button onClick={handleCreateUser}>Add Type Users</Button>
			</Grid>
			<ListTypeUserComponent setEditTypeUser={handleEditOpenModal} />
		</Grid>
	);
};

export default TypeUsersPage;