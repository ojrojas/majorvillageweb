import { createAsyncThunk } from "@reduxjs/toolkit";
import { RouteHttps } from "../../../core/constants/route.https.constants";
import { ICreateTypeIdentificationRequest } from "../../../core/dtos/typeidentification/createtypeidentificationrequest";
import { ICreateTypeIdentificationResponse } from "../../../core/dtos/typeidentification/createtypeidentificationresponse";
import { IDeleteTypeIdentificationResponse } from "../../../core/dtos/typeidentification/deletetypeidentificationresponse";
import { IDeleteTypeIdentificationRequest } from "../../../core/dtos/typeidentification/deletetypeidentificationresquest";
import { IGetAllTypeIdentificationResponse } from "../../../core/dtos/typeidentification/getalltypeidentificationresponse";
import { IGetTypeIdentificationByIdRequest } from "../../../core/dtos/typeidentification/gettypeidentificationbyidrequest";
import { IGetTypeIdentificationByIdResponse } from "../../../core/dtos/typeidentification/gettypeidentificationbyidresponse";
import { IUpdateTypeIdentificationRequest } from "../../../core/dtos/typeidentification/updatetypeidentificationrequest";
import { IUpdateTypeIdentificationResponse } from "../../../core/dtos/typeidentification/updatetypeidentificationresponse";
import HttpClientApplication from "../../../core/services/api.service";

export const getAllTypeIdentifications = createAsyncThunk<IGetAllTypeIdentificationResponse>(
	"typeidentification/getalltypeidentification", async () => {
		const api = new HttpClientApplication();
		const response = api.Get<IGetAllTypeIdentificationResponse>(RouteHttps.typeidentifications.getalltypeidentification);
		return response;
	});

export const createTypeIdentification = createAsyncThunk<ICreateTypeIdentificationResponse, ICreateTypeIdentificationRequest>(
	"typeidentification/createTypeIdentification", async (request: ICreateTypeIdentificationRequest) => {
		const api = new HttpClientApplication();
		const response = await api.Post<ICreateTypeIdentificationResponse>(RouteHttps.typeidentifications.createtypeidentification, request);
		return response;
	});

export const updateTypeIdentification = createAsyncThunk(
	"typeidentification/updatetypeidentification", async (request: IUpdateTypeIdentificationRequest) => {
		const api = new HttpClientApplication();
		const response = await api.Patch<IUpdateTypeIdentificationResponse>(RouteHttps.typeidentifications.updatetypeidentification, request);
		return response;
	});

export const deleteTypeIdentification = createAsyncThunk(
	"typeidentification/deletetypeidentification", async (request: IDeleteTypeIdentificationRequest) => {
		const api = new HttpClientApplication();
		const response = api.Delete<IDeleteTypeIdentificationResponse>(RouteHttps.typeidentifications.deletetypeidentification + request.id);
		return response;
	});

export const getTypeIdentificationById = createAsyncThunk(
	"typeIdentification/getTypeIdentificationById", async (request : IGetTypeIdentificationByIdRequest) => {
		const api = new HttpClientApplication();
		const response = await api.Get<IGetTypeIdentificationByIdResponse>(RouteHttps.typeidentifications.gettypeidentificationbyid+request.id);
		return response;
	});