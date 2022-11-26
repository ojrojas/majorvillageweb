import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MajorVillageSnackBarOptions } from "../majorvillagesnackbaroptions";

const initialOptions: MajorVillageSnackBarOptions = {
	open: false,
	message: "",
	severity: "info",
};

interface State {
    optionSnackBar: MajorVillageSnackBarOptions;
    optionSnackBarActions: MajorVillageSnackBarOptions;
}

const initialState: State = {
	optionSnackBar: initialOptions,
	optionSnackBarActions: initialOptions
};

const snackBarSlice = createSlice({
	name: "snackbar",
	initialState: initialState,
	reducers: {
		openSnackBarMajorVillage: (state, action: PayloadAction<{ message: string, severity: "success" | "info" | "warning" | "error" }>) => {
			state.optionSnackBar.message = action.payload.message;
			state.optionSnackBar.open = true;
			state.optionSnackBar.severity = action.payload.severity;
		},
		closeSnackBarMajorVillage: (state) => {
			state.optionSnackBar.open = false;
			state.optionSnackBar.message = "";
		},
		openSnackBarActionsMajorVillage: (state, action: PayloadAction<{ message: string, severity: "success" | "info" | "warning" | "error" }>) => {
			state.optionSnackBarActions.message = action.payload.message;
			state.optionSnackBarActions.open = true;
			state.optionSnackBarActions.severity = action.payload.severity;
		},
		closeSnackBarActionsMajorVillage: (state) => {
			state.optionSnackBarActions.open = false;
			state.optionSnackBarActions.message = "";
		},
	}
});

export default snackBarSlice.reducer;
export const {
	openSnackBarMajorVillage,
	closeSnackBarMajorVillage,
	openSnackBarActionsMajorVillage,
	closeSnackBarActionsMajorVillage 
} = snackBarSlice.actions;