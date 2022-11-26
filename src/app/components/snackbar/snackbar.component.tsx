import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Stack } from "@mui/material";
import { useAppSelector } from "../../hooks";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return (
		<MuiAlert elevation={6} ref={ref} variant="filled" {...props}>
		</MuiAlert>
	);
});

type TransitionProps = Omit<SlideProps, "direction">;

export function TransitionLeft(props: TransitionProps) {
	return <Slide {...props} direction="left" />;
}

export function TransitionUp(props: TransitionProps) {
	return <Slide {...props} direction="up" />;
}

export function TransitionRight(props: TransitionProps) {
	return <Slide {...props} direction="right" />;
}

export function TransitionDown(props: TransitionProps) {
	return <Slide {...props} direction="down" />;
}

interface Props {
  handleClose: () => void;
  title: string;
  transition: React.ComponentType<TransitionProps> | undefined;
  autoHideDuration?: number | null | undefined;
}

const SnackbarMajorVillage: React.FC<Props> = ({ title, autoHideDuration, handleClose, transition }) => {
	const snackbarState = useAppSelector(state => state.snack.optionSnackBar);
	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Snackbar
				open={snackbarState.open}
				onClose={handleClose}
				TransitionComponent={transition}
				autoHideDuration={autoHideDuration}
				key={transition ? transition.name : ""}>
				<Alert onClose={handleClose} severity={snackbarState.severity} sx={{ width: "100%" }}>
					<AlertTitle>
						{title}
					</AlertTitle>
					{snackbarState.message}
				</Alert>
			</Snackbar>
		</Stack>
	);
};

export default SnackbarMajorVillage;
