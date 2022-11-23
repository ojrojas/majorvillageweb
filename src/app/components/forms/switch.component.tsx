import { FormControl, FormControlLabel, FormGroup, FormLabel, Switch } from "@mui/material";
import React from "react";

interface Props {
    label: string;
    register: any;
    errors: any;
    styles?: React.CSSProperties;
    labelPlacement?: "bottom" | "end" | "start" | "top";
    defaultValue?:boolean;
}

const SwitchCompontent: React.FC<Props> = ({ label, styles, labelPlacement,defaultValue, register }) => {
    return (
            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                            defaultChecked={defaultValue}
                                style={styles}
                                {...register} />
                        }
                        label={label}
                        labelPlacement={labelPlacement}
                    />
                </FormGroup>
            </FormControl>
    )
}

export default SwitchCompontent;