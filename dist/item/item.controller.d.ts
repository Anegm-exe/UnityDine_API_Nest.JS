import { ItemService } from './item.service';
import { Item } from '../schemas/item.schema';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(createItemDto: Item): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    update(id: number, updateItemDto: Partial<Item>): Promise<Item>;
    delete(id: number): Promise<void>;
}
