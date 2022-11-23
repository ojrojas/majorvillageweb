import React from "react";
import { Box, Button, colors, Divider, Grid, Paper, Typography } from "@mui/material";
import InputOutlinedComponent from "./../../../components/forms/input.component";
import styles from './formlogin.module.css';
import { useForm } from 'react-hook-form';
import { ILogin } from "./../../../core/models/login/login.model";
// import CheckBoxComponent from "../../../components/forms/checkbox.component";
import useYupValidationResolver from "../../../components/forms/resolver.function";
import { schema } from "../schema/formlogin.schema";

const FormLoginComponent: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ILogin>({
        mode: 'all',
        resolver: useYupValidationResolver(schema)
    });

    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <React.Fragment>
            <Grid container className={styles.container}>
                <Paper elevation={15}>
                    <Box component='form' noValidate className={styles.form}>
                        <Typography variant={'body2'} color={colors.blue[400]}>
                            Sign In
                        </Typography>
                        <Typography variant={'h5'} component='span' color={'var(--primary)'}>
                            Major Village
                        </Typography>
                        <Divider />
                        <InputOutlinedComponent
                            label="Username"
                            type={"text"}
                            size='small'
                            register={register('userName', { required: true })}
                            errors={errors} />
                        <InputOutlinedComponent
                            label="Password"
                            size="small"
                            type={"password"}
                            register={register('password', { required: true })}
                            errors={errors} />
                        {/* <CheckBoxComponent label='Remember Me!'  register={register('rememberMe')}/> */}
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
                    </Box>
                </Paper>
            </Grid>
        </React.Fragment>
    )
}

export default FormLoginComponent;