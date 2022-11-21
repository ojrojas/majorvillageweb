import { createBrowserRouter } from "react-router-dom";
import DrawerComponent from "../components/layout/drawercomponent";
import { RouteConstanstPage } from "../core/constants/route.pages.constants";
import DashboardPage from "../pages/dashboard/dashboard";
import LoginPage from "../pages/login/login";

const router = createBrowserRouter([
    {
        path: RouteConstanstPage.root,
        element: <DrawerComponent />,
        children: [
            {
                path: RouteConstanstPage.dashboard,
                element: <DashboardPage />
            },
        ]
    },
    {
        path: RouteConstanstPage.login,
        element: <LoginPage />
    }
]);

export default router;