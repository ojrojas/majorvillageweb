import React from "react";
import { Grid, Button, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { createTypeUser, getAllTypeUsers, updateTypeUser } from "../redux/typeuser-actions";
import { schema } from "../schemas/formtypeusercreate.schema";
import styles from "./formtypeusercreate.module.css";
import useYupValidationResolver from "../../../components/forms/resolver.function";
import SwitchCompontent from "../../../components/forms/switch.component";
import LoadingBackdropComponent from "../../../components/loaders/backdrop.component";
import SnackbarMajorVillage, { TransitionLeft } from "../../../components/snackbar/snackbar.component";
import { ITypeUser } from "../../../core/models/typeuser/typeuser";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { closeSnackBarMajorVillage, openSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";
import InputOutlinedComponent from "../../../components/forms/input.component";

interface Props {
    onClose: () => void;
    typeUserExists?: ITypeUser;
    typeComponent: "EDIT" | "CREATE"
}

const FormTypeUserCreateComponent: React.FC<Props> = ({ onClose, typeUserExists, typeComponent }) => {
	const dispatch = useAppDispatch();
	const { loading, error } = useAppSelector(x => x.typeUsers);
	const { user } = useAppSelector(x => x.login);

	const { register, handleSubmit, formState: { errors } } = useForm<ITypeUser>({
		mode: "all",
		defaultValues: typeUserExists,
		resolver: useYupValidationResolver(schema)
	});

	const handlerClose = async () => {
		await dispatch(closeSnackBarMajorVillage());
		onClose();
	};

	const handlerSubmit = handleSubmit(async (typeUser: ITypeUser) => {
		if (user === null) throw Error("Error operation exception");
		if (typeComponent === "CREATE") {
			typeUser.createdBy = user?.id as string;
			typeUser.createdOn = new Date();
			await dispatch(createTypeUser({ typeUser })).unwrap().then(async (response) => {
				// if (response?.typeUserCreated === null) {
				// 	await dispatch(openSnackBarMajorVillage({
				// 		message: `Error, ${JSON.stringify(error, null, 2)}`,
				// 		severity: "error"
				// 	}));
				// }
				// else {
				// 	await dispatch(openSnackBarMajorVillage({
				// 		message: "Type User created!",
				// 		severity: "success"
				// 	}));
				// }
			});
		}
		else {
			typeUser.modifiedBy = user?.id as string;
			typeUser.modifiedOn = new Date();
			await dispatch(updateTypeUser({ typeUser })).unwrap().then(async (response) => {
				// if (response?.typeUserUpdated === null) {
				// 	await dispatch(openSnackBarMajorVillage({
				// 		message: `Error, ${JSON.stringify(error, null, 2)}`,
				// 		severity: "error"
				// 	}));
				// }
				// else {
				// 	await dispatch(openSnackBarMajorVillage({
				// 		message: "Type User updated!",
				// 		severity: "success"
				// 	}));
				// }
			});
		}
		await dispatch(getAllTypeUsers());
	});

	return (
		<React.Fragment>
			{/* <SnackbarMajorVillage
				handleClose={handlerClose}
				title={"Type Users"}
				autoHideDuration={2000}
				transition={TransitionLeft} /> */}
			<LoadingBackdropComponent open={loading} />
			<Box className={styles.formpaper} component={"form"} onSubmit={handlerSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Grid container>
							<Grid item lg={4} md={4} sm={4} xs={12}>
								<InputOutlinedComponent
									label={"Type Name"}
									type={"text"}
									register={register("typeName", { required: true })}
									errors={errors}
								/>
							</Grid>
							<Grid item lg={4} md={4} sm={4} xs={12}>
								<SwitchCompontent
									defaultValue={typeUserExists?.status ? true : false}
									label="Status"
									register={register("status", { required: false })}
									errors={undefined}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Button variant="text" className={styles.buttonlogin} type="submit">{typeComponent} Type user</Button>
			</Box>
		</React.Fragment>
	);
};

export default FormTypeUserCreateComponent;