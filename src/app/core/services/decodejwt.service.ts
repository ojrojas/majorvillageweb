import jwt_decode from "jwt-decode";
import _ from "lodash";
import { IUser } from "../models/user/user";
export class DecodeJwt {
	static decodeJwt = (token:string): IUser | undefined => {
		try {
			if(token === null || token === undefined)
				return undefined;
			const user = jwt_decode<any>(token);
			return {
				name: user.Name,
				middleName: user.Middlename,
				lastName: user.LastName,
				surName: user.SurName,
				identification: user.Identification,
				typeIdentificationId: user.TypeIdentificationId,
				typeUserId: user.TypeUserId,
				id: user.Id,
				address: user.Address,
				contact: user.Contact,
				birthDate: user.BirthDate,
				modifiedBy: user.ModifiedBy,
				modifiedOn: user.ModifiedOn,
				createdBy: user.CreatedBy,
				createdOn: user.CreatedOn,
				state: user.State
			};
		} catch (error) {
			console.log("error decode token ==>", error);
		}
	};
}