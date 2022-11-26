import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import LoginReducer from "../app/pages/login/redux/login.slice";
import UserReducer from "../app/pages/users/redux/usersslice";
import TypeUsersReducer from "../app/pages/typeusers/redux/typeuserslice";
import TypeIdentificationReducer from "../app/pages/typeidentifications/redux/typeidentificationslice";
import SnackBarReducer from "../app/components/snackbar/redux/snackbarslice";

export const store = configureStore({
	reducer: {
		login: LoginReducer,
		user: UserReducer,
		typeUsers: TypeUsersReducer,
		typeIdentifications: TypeIdentificationReducer,
		snack: SnackBarReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
