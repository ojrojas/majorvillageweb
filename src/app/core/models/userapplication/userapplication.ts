import { IBaseEntity } from "../baseentity";
import { IUser } from "../user/user";

export interface IUserApplication extends IBaseEntity{
    userName:string;
	password:string;
	user: IUser;
	userId?: string;
}