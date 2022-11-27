import React from "react";
import { Box, Button,  CardActions, CardContent, Grid, Typography } from "@mui/material";
import { IUser } from "../../../core/models/user/user";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { deleteUser, getAllUsers } from "../redux/users-actions";
import SnackbarMajorVillageAction from "../../../components/snackbar/actionssnackbar";
import SnackbarMajorVillage, { TransitionRight } from "../../../components/snackbar/snackbar.component";
import { closeSnackBarActionsMajorVillage, closeSnackBarMajorVillage, openSnackBarActionsMajorVillage, openSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";

interface Props {
    userDetail?: IUser;
    onClose: () => void;
}

const DetailUserComponent: React.FC<Props> = ({ userDetail, onClose }) => {
	const dispatch = useAppDispatch();
	const { error } = useAppSelector(state => state.user);
	const [type, setType] = React.useState<"add" | "delete">("add");

	const pushAcceptCallback = (result: boolean, type: "add" | "delete") => {
		console.log(result, type, "this is detail component result action");
		switch (type) {
		case "add":
			break;
		case "delete":
			submitDelete(result);
			break;
		default:
			closeSnackBarMajorVillage();
			break;
		}
	};

	const submitDelete = async (result: boolean) => {
		dispatch(closeSnackBarMajorVillage());
		if (result) {
			dispatch(deleteUser({ id:  userDetail?.id })).unwrap().then(async (response) => {
				dispatch(closeSnackBarActionsMajorVillage());
				// if (response?.userDeleted !== null) {
				// 	await dispatch(openSnackBarMajorVillage({
				// 		message: "User is deleted!",
				// 		severity: "success",
				// 	}));
				// } else {
				// 	await dispatch(openSnackBarMajorVillage({
				// 		message: "Error user is not delete",
				// 		severity: "error",
				// 	}));
				// 	console.error("Error request: ", error);
				// }
				await dispatch(getAllUsers());
			});
		}
	};

	const createApplicationUser = async () => {
		setType("add");
		// await dispatch(openSnackBarActionsMajorVillage({
		// 	message: "Do you assign username and password?",
		// 	severity: "warning",
		// }));
	};

	const operationDelete = async () => {
		setType("delete");
		// await dispatch(openSnackBarActionsMajorVillage({
		// 	message: "Do you delete this user?",
		// 	severity: "warning",
		// }));
	};

	return (
		<React.Fragment>
			<SnackbarMajorVillageAction
				title={"User"}
				handleClose={() => dispatch(closeSnackBarActionsMajorVillage())}
				autoHideDuration={null}
				resultAction={(e) => pushAcceptCallback(e, type)}
				transition={TransitionRight} />
			{/* <SnackbarMajorVillage
				title={"User"}
				handleClose={() => {
					dispatch(closeSnackBarMajorVillage());
					onClose();
				}}
				autoHideDuration={3000}
				transition={TransitionRight} /> */}
			<Box>
				<Grid>
					<CardContent>
						<Button onClick={() => createApplicationUser()}>Assign UserApplication</Button>
						<Typography variant="body2" color="text.secondary" >
                            Fullname
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{userDetail?.firstName} {userDetail?.middlename} {userDetail?.lastName} {userDetail?.surName}
						</Typography>
						<Typography variant="body2" color="text.secondary" >
                            Type identification
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{userDetail?.typeIdentification?.name}
						</Typography>
						<Typography variant="body2" color="text.secondary" >
                            Type user
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{userDetail?.typeUser?.typeName}
						</Typography>
						<Typography variant="body2" color="text.secondary" >
                            Email
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{userDetail?.email}
						</Typography>
					</CardContent>
					<CardActions>
						<Button color='error' variant='outlined' onClick={() => operationDelete()}> Delete </Button>
						<Button onClick={() => onClose()}> Cancel </Button>
					</CardActions>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default DetailUserComponent;
