import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DrawerComponent from "../components/layout/drawercomponent";
import { RouteConstanstPage } from "../core/constants/route.pages.constants";
import DashboardPage from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/login";
import TypeIdentificationPage from "../pages/typeidentifications/typeIdentifications";
import TypeUsersPage from "../pages/typeusers/typeuser";
import UsersPage from "../pages/users/user";

const router = createBrowserRouter([
	{
		path: RouteConstanstPage.root,
		element: <DrawerComponent />,
		children: [
			{
				path: RouteConstanstPage.dashboard,
				element: <DashboardPage />,
			},
			{
				path: RouteConstanstPage.users,
				element: <UsersPage />,
			},
			{
				path: RouteConstanstPage.typeIdentifications,
				element: <TypeIdentificationPage />,
			},
			{
				path: RouteConstanstPage.typeUsers,
				element: <TypeUsersPage />,
			},
		]
	},
	{
		path: RouteConstanstPage.login,
		element: <LoginPage />
	}
]);

export default router;