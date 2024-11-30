import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TableDocument = Table & Document;

@Schema({ timestamps: true })
export class Table {
    @Prop({ required: true, min: 1 })
    capacity: number;

    @Prop({ default: true })
    available: boolean;

    readonly _id?: string;
}

export const TableSchema = SchemaFactory.createForClass(Table);