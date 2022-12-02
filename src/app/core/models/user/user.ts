import { IBaseEntity } from "../baseentity";
import { ITypeIdentification } from "../typeidentification/typeidentification";
import { ITypeUser } from "../typeuser/typeuser";

export interface IUser extends IBaseEntity {
    name: string;
    middleName: string;
    lastName: string;
    surName: string;
    identification: string;
    typeIdentification?: ITypeIdentification;
    typeIdentificationId: string;
    birthDate: Date | string;
    address: string
    contact: string;
    typeUser?: ITypeUser;
    typeUserId: string;
}