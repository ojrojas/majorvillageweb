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
				middlename: user.Middlename,
				lastName: user.LastName,
				surName: user.SurName,
				identification: user.Identification,
				email: user.Email,
				typeIdentificationId: user.TypeIdentificationId,
				typeIdentification: user.TypeIdentification,
				typeUserId: user.TypeUserId,
				typeUser: user.TypeUser,
				id: user.Id,
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