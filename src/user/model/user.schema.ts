import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields automatically
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: false })
    contact?: string;

    @Prop({ required: true })
    dateOfBirth: Date;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, default: false })
    role: boolean;

    readonly _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);