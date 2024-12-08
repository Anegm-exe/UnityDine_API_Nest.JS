import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './model/restaurant.schema';

@Controller('restaurants')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) { }

    // All Single Supporting Funcs (Main Single Service Ones)
    @Post()
    async create(@Body() createRestaurantDto: Restaurant): Promise<Restaurant> {
        return this.restaurantService.create(createRestaurantDto);
    }

    @Get()
    async findAll(): Promise<Restaurant[]> {
        return this.restaurantService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Restaurant> {
        return this.restaurantService.findOne(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateRestaurantDto: Partial<Restaurant>,
    ): Promise<Restaurant> {
        return this.restaurantService.update(id, updateRestaurantDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        return this.restaurantService.delete(id);
    }
}