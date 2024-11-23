import { Schema } from 'mongoose';
export declare const UserSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
}> & Required<{
    _id: number;
}> & {
    __v: number;
}>;
export declare const User: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
} & Required<{
    _id: number;
}> & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: number;
    name: string;
    dateOfBirth: NativeDate;
    email: string;
    password: string;
    role: boolean;
    contact?: string;
}> & Required<{
    _id: number;
}> & {
    __v: number;
}>>;
