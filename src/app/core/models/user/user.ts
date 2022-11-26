import { IBaseEntity } from "../baseentity";
import { ITypeIdentification } from "../typeidentification/typeidentification";
import { ITypeUser } from "../typeuser/typeuser";

export interface IUser extends IBaseEntity {
    firstName: string;
    middlename?: string;
    lastName: string;
    surName?: string;
    identification: string;
    email: string;
    typeIdentificationId: string;
    typeIdentification?: ITypeIdentification;
    typeUserId: string;
    typeUser?: ITypeUser;
}