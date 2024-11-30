import { Document } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    name: string;
    contact?: string;
    dateOfBirth: Date;
    email: string;
    password: string;
    role: string;
    readonly _id?: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
