import { Model } from 'mongoose';
import { Table, TableDocument } from '../schemas/table.schema';
export declare class TableService {
    private tableModel;
    constructor(tableModel: Model<TableDocument>);
    create(table: Table): Promise<Table>;
    findAll(): Promise<Table[]>;
    findOne(id: number): Promise<Table>;
    update(id: number, updateData: Partial<Table>): Promise<Table>;
    delete(id: number): Promise<void>;
}
