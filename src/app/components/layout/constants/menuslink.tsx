import React from "react";
import { RouteConstanstPage } from "../../../core/constants/route.pages.constants";
import { MenuItem } from "../../../core/models/menulink.model";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupIcon from "@mui/icons-material/Group";

export const MenuLinkList: MenuItem[] = [
	{
		name: "Dashboard",
		icon: <DashboardIcon />,
		route: RouteConstanstPage.dashboard
	},
	{
		name: "Users",
		icon: <PersonIcon />,
		route: RouteConstanstPage.users
	},
	{
		name: "Type Identifications",
		icon: <BadgeIcon />,
		route: RouteConstanstPage.typeIdentifications
	},
	{
		name: "Type Users",
		icon: <GroupIcon />,
		route: RouteConstanstPage.typeUsers
	}
];