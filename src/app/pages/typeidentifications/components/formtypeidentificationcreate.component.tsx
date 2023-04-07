import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { createTypeIdentification, getAllTypeIdentifications, updateTypeIdentification } from "../redux/typeidentification-actions";
import styles from "./formtypeidentificationcreate.module.css";
import { schema } from "../schemas/formtypeidentificationcreate.schema";
import useYupValidationResolver from "../../../components/forms/resolver.function";
import SwitchCompontent from "../../../components/forms/switch.component";
import { ITypeIdentification } from "../../../core/models/typeidentification/typeidentification";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { openSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";
import InputOutlinedComponent from "../../../components/forms/input.component";

interface Props {
    onClose: () => void;
    typeIdentificationExists?: ITypeIdentification;
    typeComponent: "EDIT" | "CREATE"
}

const FormTypeIdentificationCreateComponent: React.FC<Props> = ({onClose, typeIdentificationExists, typeComponent }) => {
	const dispatch = useAppDispatch();
	const { error } = useAppSelector(x => x.typeIdentifications);
	const { user } = useAppSelector(x => x.login);

	const { register, handleSubmit, formState: { errors } } = useForm<ITypeIdentification>({
		mode: "all",
		defaultValues: typeIdentificationExists,
		resolver: useYupValidationResolver(schema)
	});

	const handlerSubmit = handleSubmit(async (typeIdentification: ITypeIdentification) => {
		if (user === null) throw Error("Error operation exception");
		if (typeComponent === "CREATE") {
			typeIdentification.createdBy = user?.id as string;
			typeIdentification.createdOn = new Date();
			await dispatch(createTypeIdentification({ typeIdentification })).unwrap().then(async (response) => {
				if (response?.typeIdentificationCreated === null) {
					await dispatch(openSnackBarMajorVillage({
						message: `Error, ${JSON.stringify(error, null, 2)}`,
						severity: "error", 
						title: "Type Identification",
						autoHideDuration:3000
					}));
					onClose();
				}
				else {
					await dispatch(openSnackBarMajorVillage({
						message: "Type identification created!",
						severity: "success", 
						title: "Type Identification"
					}));
					dispatch(getAllTypeIdentifications());
					onClose();
				}
			});
		}
		else {
			typeIdentification.modifiedBy = user?.id as string;
			typeIdentification.modifiedOn = new Date();
			await dispatch(updateTypeIdentification({ typeIdentification })).unwrap().then(async (response) => {
				if (response?.typeIdentificationUpdated === null) {
					await dispatch(openSnackBarMajorVillage({
						message: `Error, ${JSON.stringify(error, null, 2)}`,
						severity: "error",
						title: "Type Identification",
						autoHideDuration:3000
					}));
					onClose();
				}
				else {
					await dispatch(openSnackBarMajorVillage({
						message: "Type identification updated! ",
						severity: "success",
						title: "Type Identification",
						autoHideDuration:3000
					}));
					dispatch(getAllTypeIdentifications());
					onClose();
				}
			});
		}
		await dispatch(getAllTypeIdentifications());
	});

	return (
		<React.Fragment>
			<Box className={styles.formpaper} component={"form"} onSubmit={handlerSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Grid container>
							<Grid item lg={4} md={4} sm={4} xs={12}>
								<InputOutlinedComponent
									label={"Type identification name"}
									type={"text"}
									register={register("name", { required: true })}
									errors={errors}
								/>
							</Grid>
							<Grid item lg={4} md={4} sm={4} xs={12}>
								<SwitchCompontent
									defaultValue={typeIdentificationExists?.state ? true : false}
									label="State"
									register={register("state", { required: false })}
									errors={errors}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Button variant="text" className={styles.buttonlogin} type="submit">{typeComponent} Type identification</Button>
			</Box>
		</React.Fragment>
	);
};

export default FormTypeIdentificationCreateComponent;