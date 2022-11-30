import React from "react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import SnackbarMajorVillageAction from "./app/components/snackbar/actionssnackbar";
import SnackbarMajorVillage from "./app/components/snackbar/snackbar.component";
import { SnackBarMajorVillageProvider } from "./app/core/context/snackbar.context";
import { useTheme } from "./app/hooks";
import router from "./app/routes/route.component";

function App() {
	const { theme } = useTheme();
	return (
		<div style={{ ...theme as React.CSSProperties }}>
			<CssBaseline />
			<SnackBarMajorVillageProvider>
				<RouterProvider router={router} />
				<SnackbarMajorVillage />
				<SnackbarMajorVillageAction />
			</SnackBarMajorVillageProvider>
		</div>
	);
}

export default App;
