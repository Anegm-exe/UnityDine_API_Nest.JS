import { TableService } from './table.service';
import { Table } from '../schemas/table.schema';
export declare class TableController {
    private readonly seatingService;
    constructor(seatingService: TableService);
    create(createSeatingDto: Table): Promise<Table>;
    findAll(): Promise<Table[]>;
    findOne(id: number): Promise<Table>;
    update(id: number, updateSeatingDto: Partial<Table>): Promise<Table>;
    delete(id: number): Promise<void>;
}
