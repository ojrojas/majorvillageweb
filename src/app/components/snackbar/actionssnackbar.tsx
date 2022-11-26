import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { SlideProps } from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { Button, CardActions, CardContent, CardHeader, Divider, IconButton, Paper, PaperProps, Stack, Typography } from "@mui/material";
import styles from "./actionssnackbar.module.css";
import { useAppSelector } from "../../hooks";

const CardSnackBar = React.forwardRef<HTMLDivElement, PaperProps>(function Alert(
	props,
	ref,
) {
	return (
		<Paper elevation={6} ref={ref} {...props}>
		</Paper>
	);
});

type TransitionProps = Omit<SlideProps, "direction">;

interface Props {
    title: string;
    handleClose: () => void;
    resultAction: (result: boolean) => void;
    transition: React.ComponentType<TransitionProps> | undefined;
    autoHideDuration: number | null | undefined
}

const SnackbarMajorVillageAction: React.FC<Props> = ({ title, handleClose, autoHideDuration, resultAction, transition }) => {

	const snackBarState = useAppSelector(state => state.snack.optionSnackBarActions);
	const returnColor = (color: string) => {
		switch (color) {
		case "success":
			return "green";
		case "info":
			return "blue";
		case "warning":
			return "orange";
		case "error":
			return "red";
		default: return "info";
		}
	};

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Snackbar
				open={snackBarState.open}
				onClose={handleClose}
				TransitionComponent={transition}
				autoHideDuration={autoHideDuration}
				key={transition ? transition.name : ""}>
				<CardSnackBar sx={{ width: "100%" }}>
					<CardHeader
						action={
							<IconButton aria-label="settings" onClick={() => { resultAction(false); handleClose(); }}>
								<CloseIcon />
							</IconButton>
						}
						title={<Typography variant='h6' component='span'>{title}</Typography>}
						style={{ backgroundColor: returnColor(snackBarState.severity), color: "white" }}
					/>
					<CardContent className={styles.cardheader}>
						{snackBarState.message}
					</CardContent>
					<Divider></Divider>
					<CardActions>
						<Button onClick={() => resultAction(true)}> Accept </Button>
						<Button onClick={() => { resultAction(false); handleClose(); }}> Cancel </Button>
					</CardActions>
				</CardSnackBar>
			</Snackbar>
		</Stack>
	);
};

export default SnackbarMajorVillageAction;