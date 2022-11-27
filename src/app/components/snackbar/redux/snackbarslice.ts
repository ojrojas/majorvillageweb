import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MajorVillageSnackBarOptions } from "../majorvillagesnackbaroptions";

const initialOptions: MajorVillageSnackBarOptions = {
	open: false,
	message: "",
	severity: "info",
	autoHideDuration: undefined,
	title: ""
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
		openSnackBarMajorVillage: (state, action: PayloadAction<MajorVillageSnackBarOptions>) => {
			state.optionSnackBar.message = action.payload.message;
			state.optionSnackBar.open = true;
			state.optionSnackBar.severity = action.payload.severity;
			state.optionSnackBar.title = action.payload.title;
			state.optionSnackBar.autoHideDuration = action.payload.autoHideDuration;
		},
		closeSnackBarMajorVillage: (state) => {
			state.optionSnackBar = initialOptions;
		},
		openSnackBarActionsMajorVillage: (state, action: PayloadAction<MajorVillageSnackBarOptions>) => {
			state.optionSnackBarActions.message = action.payload.message;
			state.optionSnackBarActions.open = true;
			state.optionSnackBarActions.severity = action.payload.severity;
			state.optionSnackBar.title = action.payload.title;
			state.optionSnackBar.autoHideDuration = action.payload.autoHideDuration;
		},
		closeSnackBarActionsMajorVillage: (state) => {
			state.optionSnackBarActions = initialOptions;
		},
		resultAction: (state, action: PayloadAction<boolean>) => {
			state.optionSnackBarActions.resultAction=  action.payload
		}
	}
});

export default snackBarSlice.reducer;
export const {
	openSnackBarMajorVillage,
	closeSnackBarMajorVillage,
	openSnackBarActionsMajorVillage,
	closeSnackBarActionsMajorVillage,
	resultAction
} = snackBarSlice.actions;