import { createSlice } from "@reduxjs/toolkit";
import { ICreateTypeIdentificationRequest } from "../../../core/dtos/typeidentification/createtypeidentificationrequest";
import { ICreateTypeIdentificationResponse } from "../../../core/dtos/typeidentification/createtypeidentificationresponse";
import { IDeleteTypeIdentificationResponse } from "../../../core/dtos/typeidentification/deletetypeidentificationresponse";
import { IDeleteTypeIdentificationRequest } from "../../../core/dtos/typeidentification/deletetypeidentificationresquest";
import { IGetAllTypeIdentificationResponse } from "../../../core/dtos/typeidentification/getalltypeidentificationresponse";
import { IUpdateTypeIdentificationRequest } from "../../../core/dtos/typeidentification/updatetypeidentificationrequest";
import { IUpdateTypeIdentificationResponse } from "../../../core/dtos/typeidentification/updatetypeidentificationresponse";
import { createTypeIdentification, deleteTypeIdentification, getAllTypeIdentifications, updateTypeIdentification } from "./typeidentification-actions";

export interface ITypeIdentificationState {
    loading: boolean;
    getAllTypeIdentifications?: IGetAllTypeIdentificationResponse;
    createTypeIdentificationRequest?: ICreateTypeIdentificationRequest;
    createTypeIdentificationResponse?: ICreateTypeIdentificationResponse;
    updateTypeIdentificationRequest?: IUpdateTypeIdentificationRequest;
    updateTypeIdentificationResponse?: IUpdateTypeIdentificationResponse;
    deleteTypeIdentificationRequest?: IDeleteTypeIdentificationRequest;
    deleteTypeIdentificationResponse?: IDeleteTypeIdentificationResponse;
    error: any;
}

const initialState: ITypeIdentificationState = {
	loading: false,
	error: undefined
};

export const typeIdentificationSlice = createSlice({
	name: "typeIdentification",
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getAllTypeIdentifications.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getAllTypeIdentifications.fulfilled, (state, action) => {
			state.loading = false;
			state.getAllTypeIdentifications = action.payload;
		});
		builder.addCase(getAllTypeIdentifications.rejected, (state, action) => {
			state.loading = false;
			state.getAllTypeIdentifications = undefined;
			state.error = action.error;
		});
		builder.addCase(createTypeIdentification.pending, (state, action) => {
			state.loading = true;
			state.createTypeIdentificationRequest = action.meta.arg;
		});
		builder.addCase(createTypeIdentification.fulfilled, (state, action) => {
			state.loading = false;
			state.createTypeIdentificationResponse = action.payload;
		});
		builder.addCase(createTypeIdentification.rejected, (state, action) => {
			state.loading = false;
			state.createTypeIdentificationResponse = undefined;
			state.createTypeIdentificationRequest = undefined;
			state.error = action.error;
		});
		builder.addCase(updateTypeIdentification.pending, (state, action) => {
			state.loading = true;
			state.updateTypeIdentificationRequest = action.meta.arg;
		});
		builder.addCase(updateTypeIdentification.fulfilled, (state, action) => {
			state.loading = false;
			state.updateTypeIdentificationResponse = action.payload;
		});
		builder.addCase(updateTypeIdentification.rejected, (state, action) => {
			state.loading = false;
			state.updateTypeIdentificationResponse = undefined;
			state.updateTypeIdentificationRequest = undefined;
			state.error = action.error;
		});
		builder.addCase(deleteTypeIdentification.pending, (state, action) => {
			state.loading = true;
			state.deleteTypeIdentificationRequest = action.meta.arg;
		});
		builder.addCase(deleteTypeIdentification.fulfilled, (state, action) => {
			state.loading = false;
			state.deleteTypeIdentificationResponse = action.payload;
		});
		builder.addCase(deleteTypeIdentification.rejected, (state, action) => {
			state.loading = false;
			state.deleteTypeIdentificationResponse = undefined;
			state.deleteTypeIdentificationRequest = undefined;
			state.error = action.error;
		});
	}
});

export default typeIdentificationSlice.reducer;