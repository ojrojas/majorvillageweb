import React from "react";
import { MajorVillageSnackBarOptions } from "../../components/snackbar/majorvillagesnackbaroptions";
import { useAppSelector } from "../../hooks";

export const SnackBarMajorVillageContext = React.createContext<MajorVillageSnackBarOptions>({
	autoHideDuration: undefined,
	message: "",
	severity: "info",
	title: "",
});

interface Props {
    children: React.ReactNode;
}

export const SnackBarMajorVillageProvider:React.FC<Props> = ({children}) => {
	const {optionSnackBar, optionSnackBarActions} = useAppSelector(state => state.snack);

	return (<SnackBarMajorVillageContext.Provider value={{
		autoHideDuration: optionSnackBar.autoHideDuration || optionSnackBarActions.autoHideDuration,
		message: optionSnackBar.message || optionSnackBarActions.message,
		severity: optionSnackBar.severity || optionSnackBarActions.severity,
		title: optionSnackBar.title || optionSnackBarActions.title,
		resultAction: optionSnackBar.resultAction || optionSnackBarActions.resultAction,
		open: optionSnackBar.open || optionSnackBarActions.open,
	}}>
		{children}
	</SnackBarMajorVillageContext.Provider>);
};

