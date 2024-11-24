import { Schema } from 'mongoose';
export declare const SeatingSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Seating: import("mongoose").Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
}, {}, {}, {}, import("mongoose").Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
}>> & import("mongoose").FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _Tid: number;
    Capacity: number;
    Available: boolean;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>>;
