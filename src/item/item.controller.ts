import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './model/item.schema';

@Controller('items')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }

    // All Single Supporting Funcs (Main Single Service Ones)
    @Post()
    async create(@Body() createItemDto: Item): Promise<Item> {
        return this.itemService.create(createItemDto);
    }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Item> {
        return this.itemService.findOne(id);
    }

    @Get('restaurant/:restaurantId')
    async findByRestaurantId(@Param('restaurantId') restaurantId: string): Promise<Item[]> {
        return this.itemService.findByRestaurantId(restaurantId);
    }

    @Put(':id')
    async update(@Param('id') id: string,@Body() updateItemDto: Partial<Item>): Promise<Item> {
        return this.itemService.update(id, updateItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.itemService.delete(id);
    }
}