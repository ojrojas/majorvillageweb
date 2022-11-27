import React from "react";
import { Box, Button, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { deleteTypeIdentification } from "../redux/typeidentification-actions";
import { ITypeIdentification } from "../../../core/models/typeidentification/typeidentification";
import { useAppDispatch } from "../../../hooks";
import { closeSnackBarActionsMajorVillage, closeSnackBarMajorVillage, openSnackBarActionsMajorVillage, openSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";
import SnackbarMajorVillageAction from "../../../components/snackbar/actionssnackbar";
import SnackbarMajorVillage, { TransitionLeft } from "../../../components/snackbar/snackbar.component";

interface Props {
    detailTypeIdentification?: ITypeIdentification;
    onClose: () => void;
}

const DetailTypeIdentificationComponent: React.FC<Props> = ({ detailTypeIdentification, onClose }) => {
	const dispatch = useAppDispatch();

	const operationDelete = (result: boolean) => {
		if(result){
			// dispatch(deleteTypeIdentification({id: detailTypeIdentification?.id})).unwrap().then(async (response)=> {
			// 	if(response.typeIdentificationDeleted)
			// 		await dispatch(openSnackBarMajorVillage({
			// 			message: "Type identification deleted success",
			// 			severity: "success"
			// 		}));
			// 	else await dispatch(openSnackBarMajorVillage({
			// 		message: "Error, do not deleted type identification",
			// 		severity: "error"
			// 	}));
			// });
		}
	};

	const onPushDelete = () => {
		// dispatch(openSnackBarActionsMajorVillage({
		// 	message: "Do you sure delete this type identification?",
		// 	severity: "info"
		// }));
	};

	return (
		<React.Fragment>
			{/* <SnackbarMajorVillageAction 
				title={"Type identification"} 
				handleClose={ ()=> dispatch(closeSnackBarActionsMajorVillage()) } 
				resultAction={(result) => operationDelete(result)} 
				transition={TransitionLeft} 
				autoHideDuration={3000} /> */}
			{/* <SnackbarMajorVillage 
				handleClose={()=> {
					dispatch(closeSnackBarMajorVillage());
					onClose();
				}} 
				title={"Type identification"} 
				transition={TransitionLeft} /> */}
			<Box>
				<Grid>
					<CardContent>
						<Typography variant="body2" color="text.secondary" >
                            Type Identification Name
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{detailTypeIdentification?.name}
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="outlined" color="error" onClick={()=> onPushDelete()}> Delete </Button>
						<Button onClick={() => onClose()}>  Cancel </Button>
					</CardActions>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default DetailTypeIdentificationComponent;