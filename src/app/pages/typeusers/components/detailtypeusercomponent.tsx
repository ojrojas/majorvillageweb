import React from "react";
import { Box, Button, CardActions, CardContent, Grid, Typography } from "@mui/material";
import { ITypeUser } from "../../../core/models/typeuser/typeuser";
import { useAppDispatch } from "../../../hooks";
import { openSnackBarActionsMajorVillage, closeSnackBarActionsMajorVillage, closeSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";

interface Props {
	detailTypeUser?: ITypeUser;
	onClose: () => void;
}

const DetailTypeUserComponent: React.FC<Props> = ({ detailTypeUser, onClose }) => {
	const dispatch = useAppDispatch();

	const operationDelete = (result: boolean) => {
		alert("operation active: " + result);
	};

	const onPushDelete = async () => {
		await dispatch(openSnackBarActionsMajorVillage({
			message: "Do you sure delete this type user?",
			severity: "info",
			title: "Type User",
			action: operationDelete
		}));
	};

	return (
		<React.Fragment>
			<Box>
				<Grid>
					<CardContent>
						<Typography variant="body2" color="text.secondary" >
							Type User Name
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{detailTypeUser?.name}
						</Typography>
						<Typography variant="body2" color="text.secondary" >
							State
						</Typography>
						<Typography gutterBottom variant="h5" component="div">
							{detailTypeUser?.state ? "Active" : "Inactive" }
						</Typography>
					</CardContent>
					<CardActions>
						<Button variant="outlined" color="error" onClick={onPushDelete}> Delete </Button>
						<Button onClick={() => onClose()}>  Cancel </Button>
					</CardActions>
				</Grid>
			</Box>
		</React.Fragment>
	);
};

export default DetailTypeUserComponent;