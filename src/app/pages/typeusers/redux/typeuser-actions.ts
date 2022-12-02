import { createAsyncThunk } from "@reduxjs/toolkit";
import { RouteHttps } from "../../../core/constants/route.https.constants";
import { IDeleteTypeIdentificationRequest } from "../../../core/dtos/typeidentification/deletetypeidentificationresquest";
import { ICreateTypeUserRequest } from "../../../core/dtos/typeuser/createtypeuserrequest";
import { ICreateTypeUserResponse } from "../../../core/dtos/typeuser/createtypeuserresponse";
import { IDeleteTypeUserResponse } from "../../../core/dtos/typeuser/deletetypeuserresponse";
import { IGetAllTypeUserResponse } from "../../../core/dtos/typeuser/getalltypeuserresponse";
import { IUpdateTypeUserRequest } from "../../../core/dtos/typeuser/updatetypeuserrequest";
import { IUpdateTypeUserResponse } from "../../../core/dtos/typeuser/updatetypeuserresponse";
import HttpClientApplication from "../../../core/services/api.service";

export const getAllTypeUsers = createAsyncThunk<IGetAllTypeUserResponse>(
	"typeuser/getalltypeusers", async () => {
		const api = new HttpClientApplication();
		const response = await api.Get<IGetAllTypeUserResponse>(RouteHttps.identity.typeusers.getalltypeuser);
		return response;
	});

export const createTypeUser = createAsyncThunk<ICreateTypeUserResponse, ICreateTypeUserRequest>(
	"typeuser/createtypeuser", async (createTypeUser: ICreateTypeUserRequest) => {
		const api = new HttpClientApplication();
		const response = await api.Post<ICreateTypeUserResponse>(RouteHttps.identity.typeusers.createtypeuser, createTypeUser);
		return response;
	});

export const updateTypeUser = createAsyncThunk<IUpdateTypeUserResponse, IUpdateTypeUserRequest>(
	"typeuser/updatetypeuser", async (updateTypeUser: IUpdateTypeUserRequest) => {
		const api = new HttpClientApplication();
		const response = await api.Patch<IUpdateTypeUserResponse>(RouteHttps.identity.typeusers.updatetypeuser, updateTypeUser);
		return response;
	});

export const deleteTypeUser = createAsyncThunk(
	"typeuser/deletetypeuser", async (request: IDeleteTypeIdentificationRequest) => {
		const api = new HttpClientApplication();
		const response = await api.Delete<IDeleteTypeUserResponse>(RouteHttps.identity.typeusers.deletetypeuser + request.id);
		return response;
	});