import React from "react";
import { Box, Button, CardActions, CardContent, Grid, Typography } from "@mui/material";
import SnackbarMajorVillage, { TransitionLeft } from "../../../components/snackbar/snackbar.component";
import { ITypeUser } from "../../../core/models/typeuser/typeuser";
import { useAppDispatch } from "../../../hooks";
import { openSnackBarActionsMajorVillage, closeSnackBarActionsMajorVillage, closeSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";
import SnackbarMajorVillageAction from "../../../components/snackbar/actionssnackbar";

interface Props {
    detailTypeUser?: ITypeUser;
    onClose: () => void;
}

const DetailTypeUserComponent : React.FC <Props>= ({detailTypeUser, onClose}) => {
	const dispatch = useAppDispatch();

	const operationDelete = (result:boolean) => {
		return true;
	};

	const onPushDelete = () => {
		dispatch(openSnackBarActionsMajorVillage({
			message:"Do you sure delete this type user?",
			severity: "info"
		}));
	};

	return(
		<React.Fragment>
			<SnackbarMajorVillageAction 
				title={""} 
				handleClose={()=> dispatch(closeSnackBarActionsMajorVillage())} 
				resultAction={(result: boolean) => operationDelete(result)} 
				transition={TransitionLeft} 
				autoHideDuration={undefined} />
			<SnackbarMajorVillage 
				handleClose={()=> {
					dispatch(closeSnackBarMajorVillage());
					onClose();
				}} 
				title={""} 
				transition={undefined} />
			<Box>
				<Grid>
					<CardContent>
						<Typography variant="body2" color="text.secondary" >
                        Type User Name
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{detailTypeUser?.typeName}
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="outlined" color="error"> Delete </Button>
						<Button onClick={() => onClose()}>  Cancel </Button>
					</CardActions>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default DetailTypeUserComponent;