import { ItemService } from '../services/Item.service';
import { Item } from '../schemas/Item.schema';
export declare class ItemController {
    private readonly itemService;
    constructor(itemService: ItemService);
    create(createItemDto: Item): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    update(id: number, updateItemDto: Partial<Item>): Promise<Item>;
    delete(id: number): Promise<void>;
}
