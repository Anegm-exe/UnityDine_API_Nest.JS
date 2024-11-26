import { Model } from 'mongoose';
import { Seating, SeatingDocument } from '../schemas/Seating.schema';
export declare class SeatingService {
    private seatingModel;
    constructor(seatingModel: Model<SeatingDocument>);
    create(seating: Seating): Promise<Seating>;
    findAll(): Promise<Seating[]>;
    findOne(id: number): Promise<Seating>;
    update(id: number, updateData: Partial<Seating>): Promise<Seating>;
    delete(id: number): Promise<void>;
}
