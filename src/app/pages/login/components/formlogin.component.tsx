import React from "react";
import { Box, Button, colors, Divider, Grid, Paper, Typography } from "@mui/material";
import InputOutlinedComponent from "./../../../components/forms/input.component";
import styles from "./formlogin.module.css";
import { useForm } from "react-hook-form";
import useYupValidationResolver from "../../../components/forms/resolver.function";
import { schema } from "../schema/formlogin.schema";
import { ILoginApplicationRequest } from "../../../core/dtos/userapplication/loginapplicationrequest";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { login } from "../redux/login.actions";
import { ILoginApplicationResponse } from "../../../core/dtos/userapplication/loginapplicationresponse";
import { updateLogged } from "../redux/login.slice";
import { RouteConstanstPage } from "../../../core/constants/route.pages.constants";
import { useNavigate } from "react-router-dom";
import { closeSnackBarMajorVillage, openSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";
import SnackbarMajorVillage, { TransitionLeft } from "../../../components/snackbar/snackbar.component";

const FormLoginComponent: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigateOn = useNavigate();
	const {logged } = useAppSelector(state => state.login);
	const { register, handleSubmit, formState: { errors } } = useForm<ILoginApplicationRequest>({
		mode: "all",
		resolver: useYupValidationResolver(schema)
	});

	React.useEffect(() => {
		if (logged) navigateOn(RouteConstanstPage.dashboard);
		else dispatch(updateLogged(false));
	}, [dispatch,navigateOn,logged]);

	const onSubmit = handleSubmit(async (data) => await dispatch(login(data)).unwrap().then(async (response: ILoginApplicationResponse) => {
		if (response.token !== null) {
			await dispatch(updateLogged(true));
			navigateOn(RouteConstanstPage.dashboard);
		}
		else dispatch(openSnackBarMajorVillage({
			message: "Error username or password invalid!",
			severity: "info",
		}));
	}));

	return (
		<React.Fragment>
			<Grid container className={styles.container}>
				<Paper elevation={12}>
					<Grid className={styles.form}>
						<SnackbarMajorVillage
							title='Login'
							transition={TransitionLeft}
							handleClose={() => {
								dispatch(closeSnackBarMajorVillage());
							}} />
						<Typography variant={"body2"} color={colors.blue[400]}>
							Sign In
						</Typography>
						<Typography variant={"h5"} component='span' color={"var(--primary)"}>
							Major Village
						</Typography>
						<Divider />
						<InputOutlinedComponent
							label="Username"
							type={"text"}
							size='small'
							register={register("userName", { required: true })}
							errors={errors} />
						<InputOutlinedComponent
							label="Password"
							size="small"
							type={"password"}
							register={register("password", { required: true })}
							errors={errors} />
						<Divider />
						<Grid className={styles.buttons}>
							<Button
								onClick={onSubmit}
								variant="outlined"
								color='primary'
								type="button">
								Sign In
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</React.Fragment>
	);
};

export default FormLoginComponent;