import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import styles from "./formusercreate.module.css";
import { IUser } from "../../../core/models/user/user";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import useYupValidationResolver from "../../../components/forms/resolver.function";
import SelectOutlinedComponet, { PropsOptions } from "../../../components/forms/select.component";
import SwitchCompontent from "../../../components/forms/switch.component";
import { ITypeIdentification } from "../../../core/models/typeidentification/typeidentification";
import { ITypeUser } from "../../../core/models/typeuser/typeuser";
import { createUser, updateUser, getAllUsers } from "../redux/users-actions";
import LoadingBackdropComponent from "../../../components/loaders/backdrop.component";
import InputOutlinedComponent from "../../../components/forms/input.component";
import { schema } from "../schemas/formusercreate.schema";
import { openSnackBarMajorVillage } from "../../../components/snackbar/redux/snackbarslice";

interface createUserForm {
    onClose: () => void;
    userExists?: IUser;
    typeComponent: "EDIT" | "CREATE"
}

const FormUserCreateComponent: React.FC<createUserForm> = ({userExists, typeComponent, onClose }) => {
	const dispatch = useAppDispatch();
	const { loading, error } = useAppSelector(state => state.user);
	const userApp = useAppSelector(state => state.login).user;
	const { getAllTypeUserResponse } = useAppSelector(state => state.typeUsers);
	const { getAllTypeIdentifications } = useAppSelector(state => state.typeIdentifications);
	const state = useAppSelector(x => x.login);

	const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
		mode: "all",
		defaultValues: { ...userExists },
		resolver: useYupValidationResolver(schema)
	});

	const createDataTypeUserOptions = (options?: ITypeUser[]): PropsOptions[] => {
		const newOptions: PropsOptions[] = [];
		if (options === undefined) return newOptions;
		options.forEach(item => {
			newOptions.push({ value: item.id, label: item.name });
		});
		return newOptions;
	};

	const createDataTypeIdentificationOptions = (options?: ITypeIdentification[]): PropsOptions[] => {
		const newOptions: PropsOptions[] = [];
		if (options === undefined) return newOptions;
		options.forEach(item => {
			newOptions.push({ value: item.id, label: item.name });
		});
		return newOptions;
	};

	const handlerSubmit = handleSubmit(async (user: IUser) => {
		if (userApp === null) throw Error("Error operation exception");
		if (typeComponent === "CREATE") {
			user.createdBy = state.user?.id as string;
			user.createdOn = new Date();
			dispatch(createUser({ user })).then(async (response) => {
				if(response.meta.requestStatus === "fulfilled"){
					dispatch(openSnackBarMajorVillage({
						message: "User created!",
						severity: "success",
						title: "Users", 
						autoHideDuration: 3000
					}));
					onClose();
				}
				else {
					dispatch(openSnackBarMajorVillage({
						message: `Error, ${JSON.stringify(error, null, 2)}`,
						severity: "error",
						title: "Users",
						autoHideDuration: 3000
					}));
				}
			});
		}
		else {
			user.modifiedBy = state.user?.id as string;
			user.modifiedOn = new Date();
			await dispatch(updateUser({ user })).then(async (response) => {
				if (response.meta.requestStatus === "fulfilled") {
					await dispatch(openSnackBarMajorVillage({
						message: "User Updated!",
						severity: "success",
						title: "Users",
						autoHideDuration: 3000
					}));
					onClose();
				}
				else {
					await dispatch(openSnackBarMajorVillage({
						message: `Error, ${JSON.stringify(error, null, 2)}`,
						severity: "error",
						title: "Users",
						autoHideDuration: 3000
					}));
					onClose();
				}
			});
		}
		await dispatch(getAllUsers());
	});

	return (
		<React.Fragment>
			<LoadingBackdropComponent open={loading} />
			<Box className={styles.formpaper} component={"form"} onSubmit={handlerSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={12} sm={12}>
						<Grid container spacing={1}>
							<Grid item md={3} sm={3} xs={12}>
								<InputOutlinedComponent
									fullWidth
									label={"First Name"}
									type={"text"}
									register={register("name", { required: true })}
									errors={errors}
								/>
							</Grid>
							<Grid item md={3} sm={3} xs={12}>
								<InputOutlinedComponent
									fullWidth
									label={"Middlename"}
									type={"text"}
									register={register("middleName", { required: false })}
									errors={errors}
								/>
							</Grid>
							<Grid item md={3} sm={3} xs={12}>
								<InputOutlinedComponent
									fullWidth
									label={"Last Name"}
									type={"text"}
									register={register("lastName", { required: true })}
									errors={errors}
								/>
							</Grid>
							<Grid item md={3} sm={3} xs={12}>
								<InputOutlinedComponent
									fullWidth
									label={"Sur Name"}
									type={"text"}
									register={register("surName", { required: false })}
									errors={errors}
								/>
							</Grid>
							<Grid item md={3} sm={3} xs={12}>
								<SelectOutlinedComponet
									fullWidth
									label={"Type Identification"}
									type={"text"}
									register={register("typeIdentificationId", { required: true })}
									errors={errors}
									data={createDataTypeIdentificationOptions(getAllTypeIdentifications?.typeIdentifications)} />
							</Grid>
							<Grid item md={3} sm={3} xs={12}>
								<InputOutlinedComponent
									fullWidth
									label={"Identification"}
									type={"text"}
									register={register("identification", { required: true })}
									errors={errors}
								/>
							</Grid>
							<Grid item md={3} sm={3} xs={12}>
								<InputOutlinedComponent
									fullWidth
									label={"Birth Date"}
									type={"date"}
									shrinkProp={true}
									register={register("birthDate", { required: false })}
									errors={errors}
								/>
							</Grid>
							<Grid item md={3} sm={3} xs={12}>
								<SelectOutlinedComponet
									fullWidth
									label={"Type User"}
									type={"text"}
									register={register("typeUserId", { required: true })}
									errors={errors}
									data={createDataTypeUserOptions(getAllTypeUserResponse?.typeUsers)}
								/>
							</Grid>
							<Grid item md={3} sm={3} xs={12}>
								<SwitchCompontent
									defaultValue={userExists?.state ? true : false}
									label="State"
									register={register("state", { required: false })}
									errors={errors}
								/>
							</Grid>
							<Grid item md={12} sm={12} xs={12}>
								<InputOutlinedComponent
									fullWidth
									label={"Address"}
									type={"text"}
									register={register("address", { required: true })}
									errors={errors}
								/>
							</Grid>
							<Grid item md={12} sm={12} xs={12}>
								<InputOutlinedComponent
									fullWidth
									label={"Contact"}
									type={"tel"}
									register={register("contact", { required: true })}
									errors={errors}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Button variant="text" className={styles.buttonlogin} type="submit">{typeComponent} User</Button>
			</Box>
		</React.Fragment>
	);
};

export default FormUserCreateComponent;