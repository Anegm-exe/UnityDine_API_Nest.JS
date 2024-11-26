import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt fields automatically
export class User {
    @Prop({ required: true })
    _id: number;

    @Prop({ required: true })
    name: string;

    @Prop()
    contact?: string;

    @Prop({ required: true })
    dateOfBirth: Date;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    role: boolean; // True for admin, false for regular user
}

export const UserSchema = SchemaFactory.createForClass(User);