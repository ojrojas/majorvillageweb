import { createSlice } from "@reduxjs/toolkit";
import { ICreateTypeUserRequest } from "../../../core/dtos/typeuser/createtypeuserrequest";
import { ICreateTypeUserResponse } from "../../../core/dtos/typeuser/createtypeuserresponse";
import { IDeleteTypeUserRequest } from "../../../core/dtos/typeuser/deletetypeuserrequest";
import { IDeleteTypeUserResponse } from "../../../core/dtos/typeuser/deletetypeuserresponse";
import { IGetAllTypeUserResponse } from "../../../core/dtos/typeuser/getalltypeuserresponse";
import { IGetTypeUserByIdRequest } from "../../../core/dtos/typeuser/gettypeuserbyidrequest";
import { IGetTypeUserByIdResponse } from "../../../core/dtos/typeuser/gettypeuserbyidresponse";
import { IUpdateTypeUserRequest } from "../../../core/dtos/typeuser/updatetypeuserrequest";
import { IUpdateTypeUserResponse } from "../../../core/dtos/typeuser/updatetypeuserresponse";
import { createTypeUser, deleteTypeUser, getAllTypeUsers, updateTypeUser } from "./typeuser-actions";

export interface ITypeUserState {
    loading:boolean;
    getAllTypeUserResponse?: IGetAllTypeUserResponse;
    createTypeUserRequest?: ICreateTypeUserRequest;
    createTypeUserResponse?: ICreateTypeUserResponse;
    updateTypeUserRequest?: IUpdateTypeUserRequest;
    updateTypeUserResponse?: IUpdateTypeUserResponse;
    getTypeUserByIdRequest?: IGetTypeUserByIdRequest;
    getTypeUserByIdResponse?: IGetTypeUserByIdResponse;
    deleteTypeUserRequest?: IDeleteTypeUserRequest;
    deleteTypeUserResponse?: IDeleteTypeUserResponse;
    error: any;
}

const initialState: ITypeUserState = {
	loading:false,
	getAllTypeUserResponse: undefined,
	createTypeUserRequest: undefined,
	createTypeUserResponse: undefined,
	updateTypeUserRequest: undefined,
	updateTypeUserResponse: undefined,
	getTypeUserByIdRequest: undefined,
	getTypeUserByIdResponse: undefined,
	error: undefined,
};

export const typeUserSlice = createSlice({
	name:"typeuser",
	initialState: initialState,
	reducers: {},
	extraReducers: builder =>  {
		builder.addCase(getAllTypeUsers.pending, (state)=> {
			state.loading = true;
		});
		builder.addCase(getAllTypeUsers.fulfilled, (state, action)=> {
			state.loading = false;
			state.getAllTypeUserResponse = action.payload;
		});
		builder.addCase(getAllTypeUsers.rejected, (state, action) => {
			state.loading = false;
			state.getAllTypeUserResponse = undefined;
			state.error = action.error;
		});
		builder.addCase(createTypeUser.pending, (state, action) => {
			state.loading = true;
			state.createTypeUserRequest = action.meta.arg;
		});
		builder.addCase(createTypeUser.fulfilled, (state, action) => {
			state.loading = false;
			state.createTypeUserResponse = action.payload;
		});
		builder.addCase(createTypeUser.rejected, (state, action) => {
			state.loading = false;
			state.createTypeUserRequest = undefined;
			state.createTypeUserResponse = undefined;
			state.error = action.error;
		});
		builder.addCase(updateTypeUser.pending, (state, action) => {
			state.loading = true;
			state.updateTypeUserRequest = action.meta.arg;
		});
		builder.addCase(updateTypeUser.fulfilled, (state, action) => {
			state.loading = false;
			state.updateTypeUserResponse = action.payload;
		});
		builder.addCase(updateTypeUser.rejected, (state, action) => {
			state.loading = false;
			state.updateTypeUserResponse = undefined;
			state.updateTypeUserRequest = undefined;
			state.error = action.error;
		});
		builder.addCase(deleteTypeUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteTypeUser.fulfilled, (state, action) => {
			state.deleteTypeUserResponse = action.payload;
			state.loading = false;
		});
		builder.addCase(deleteTypeUser.rejected, (state, action) => {
			state.loading = false;
			state.deleteTypeUserResponse = undefined;
			state.deleteTypeUserRequest = undefined;
			state.error = action.error;
		});
	}
});

export default typeUserSlice.reducer;