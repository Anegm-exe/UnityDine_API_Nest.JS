import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemService } from '../services/Item.service';
import { Item } from '../schemas/Item.schema';

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
    async findOne(@Param('id') id: number): Promise<Item> {
        return this.itemService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateItemDto: Partial<Item>,
    ): Promise<Item> {
        return this.itemService.update(id, updateItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.itemService.delete(id);
    }
}