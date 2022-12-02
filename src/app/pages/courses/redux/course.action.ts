import { createAsyncThunk } from "@reduxjs/toolkit";
import { RouteHttps } from "../../../core/constants/route.https.constants";
import { ICreateCourseRequest } from "../../../core/dtos/courses/createcourserequest";
import { ICreateCourseResponse } from "../../../core/dtos/courses/createcourseresponse";
import HttpClientApplication from "../../../core/services/api.service";

export const CreateCourse = createAsyncThunk<ICreateCourseResponse, ICreateCourseRequest>(
	"courses/createcourse", async (request: ICreateCourseRequest) => {
		const api = new HttpClientApplication();
		const response = await api.Post<ICreateCourseResponse>(RouteHttps.school.courses.createcourse,request );
		return response;
	});