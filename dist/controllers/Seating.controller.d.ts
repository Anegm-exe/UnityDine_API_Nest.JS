import { SeatingService } from '../services/Seating.service';
import { Seating } from '../schemas/Seating.schema';
export declare class SeatingController {
    private readonly seatingService;
    constructor(seatingService: SeatingService);
    create(createSeatingDto: Seating): Promise<Seating>;
    findAll(): Promise<Seating[]>;
    findOne(id: number): Promise<Seating>;
    update(id: number, updateSeatingDto: Partial<Seating>): Promise<Seating>;
    delete(id: number): Promise<void>;
}
