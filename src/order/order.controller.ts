import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './model/order.schema';

@Controller('orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }

    // All Single Supporting Funcs (Main Single Service Ones)
    @Post()
    async create(@Body() createOrderDto: Order): Promise<Order> {
        return this.orderService.create(createOrderDto);
    }

    @Get()
    async findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string,@Body() updateOrderDto: Partial<Order>): Promise<Order> {
        return this.orderService.update(id, updateOrderDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.orderService.delete(id);
    }
}