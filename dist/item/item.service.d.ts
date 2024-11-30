import { Model } from 'mongoose';
import { Item, ItemDocument } from '../schemas/item.schema';
export declare class ItemService {
    private itemModel;
    constructor(itemModel: Model<ItemDocument>);
    create(item: Item): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    update(id: number, updateData: Partial<Item>): Promise<Item>;
    delete(id: number): Promise<void>;
}
