import React from "react";
import { Box, Button, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { deleteTypeIdentification } from "../redux/typeidentification-actions";
import { ITypeIdentification } from "../../../core/models/typeidentification/typeidentification";
import { useAppDispatch } from "../../../hooks";
import { openSnackBarActionsMajorVillage, openSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";

interface Props {
    detailTypeIdentification?: ITypeIdentification;
    onClose: () => void;
}

const DetailTypeIdentificationComponent: React.FC<Props> = ({ detailTypeIdentification, onClose }) => {
	const dispatch = useAppDispatch();

	const operationDelete = (result: boolean) => {
		if(result){
			dispatch(deleteTypeIdentification({id: detailTypeIdentification?.id})).unwrap().then(async (response)=> {
				if(response.typeIdentificationDeleted)
					await dispatch(openSnackBarMajorVillage({
						message: "Type identification deleted success",
						severity: "success",
						title: "Type Identification"
					}));
				else await dispatch(openSnackBarMajorVillage({
					message: "Error, do not deleted type identification",
					severity: "error"
				}));
			});
		}
	};

	const onPushDelete = () => {
		dispatch(openSnackBarActionsMajorVillage({
			message: "Do you sure delete this type identification?",
			severity: "info",
			title: "Type Identification",
			action: operationDelete
		}));
	};

	return (
		<React.Fragment>
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