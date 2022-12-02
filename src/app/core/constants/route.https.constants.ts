const routeIdentityApi = process.env.REACT_APP_ROUTE_API_IDENTITY;

export const RouteHttps = {
	identity: {
		userApplication: {
			login: `${routeIdentityApi}login`,
			createserapplication: `${routeIdentityApi}createuserapplication`,
			DeleteUserApplication: `${routeIdentityApi}deleteuserapplication`,
		},
		users: {
			getallusers: `${routeIdentityApi}getalluser`,
			createuser: `${routeIdentityApi}createuser`,
			deleteuser: `${routeIdentityApi}deleteuser/`,
			getUserbyid: `${routeIdentityApi}getUserbyid/`,
			updateuser: `${routeIdentityApi}updateuser`,
		},
		typeusers: {
			createtypeuser: `${routeIdentityApi}createtypeuser`,
			deletetypeuser: `${routeIdentityApi}deletetypeuser/`,
			getalltypeuser: `${routeIdentityApi}getalltypeuser`,
			gettypeuserbyid: `${routeIdentityApi}gettypeuserbyid/`,
			updatetypeuser: `${routeIdentityApi}updatetypeuser`,
		},
		typeidentifications: {
			createtypeidentification: `${routeIdentityApi}createtypeidentification`,
			deletetypeidentification: `${routeIdentityApi}deletetypeidentification/`,
			getalltypeidentification: `${routeIdentityApi}getalltypeidentification`,
			gettypeidentificationbyid: `${routeIdentityApi}gettypeidentificationbyid/`,
			updatetypeidentification: `${routeIdentityApi}updatetypeidentification`,
		}
	},
	school: {
		courses: {
			createcourse: ""
		}
	}
};