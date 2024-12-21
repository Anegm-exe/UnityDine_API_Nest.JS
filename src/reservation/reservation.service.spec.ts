import { Test, TestingModule } from '@nestjs/testing';
import { ReservationService } from './reservation.service';
import { getModelToken } from '@nestjs/mongoose';
import { Reservation } from './model/reservation.schema';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import { TableService } from 'src/table/table.service';
import { OrderService } from 'src/order/order.service';
import { NotFoundException } from '@nestjs/common';

const mockReservationModel = {
    find: jest.fn(),
    findOne: jest.fn(),
    findByIdAndDelete: jest.fn(),
    findOneAndUpdate: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
};

const mockRestaurantService = {
    findOne: jest.fn(),
    addReservation: jest.fn(),
    deleteReservation: jest.fn(),
};

const mockTableService = {
    deleteReservation: jest.fn(),
};

const mockOrderService = {
    deleteByReservation: jest.fn(),
};

describe('ReservationService', () => {
    let service: ReservationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ReservationService,
                { provide: getModelToken(Reservation.name), useValue: mockReservationModel },
                { provide: RestaurantService, useValue: mockRestaurantService },
                { provide: TableService, useValue: mockTableService },
                { provide: OrderService, useValue: mockOrderService },
            ],
        }).compile();

        service = module.get<ReservationService>(ReservationService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should create and return a reservation', async () => {
            const createReservationDto = {
                customer_id: 'userId',
                table_id: 'tableId',
                restaurant_id: 'restaurantId',
                reservation_time: new Date(),
                end_time: new Date(),
                guests: 4,
                reservation_status: 'Pending',
            };

            const createdReservation = { ...createReservationDto, _id: 'newId' };

            mockReservationModel.create.mockReturnValue(createdReservation);
            mockRestaurantService.findOne.mockResolvedValue({ _id: 'restaurantId' });

            const result = await service.create(createReservationDto as any);

            expect(mockReservationModel.create).toHaveBeenCalledWith(createReservationDto);
            expect(mockRestaurantService.addReservation).toHaveBeenCalledWith(
                createReservationDto.restaurant_id,
                createdReservation._id,
            );
            expect(result).toEqual(createdReservation);
        });
    });

    describe('findAll', () => {
        it('should return all reservations', async () => {
            const reservations = [{ _id: 'id1' }, { _id: 'id2' }];
            mockReservationModel.find.mockResolvedValue(reservations);

            const result = await service.findAll();

            expect(mockReservationModel.find).toHaveBeenCalled();
            expect(result).toEqual(reservations);
        });
    });

    describe('findByUserId', () => {
        it('should return reservations by user ID', async () => {
            const reservations = [{ _id: 'id1', customer_id: 'userId' }];
            mockReservationModel.find.mockResolvedValue(reservations);

            const result = await service.findByUserId('userId');

            expect(mockReservationModel.find).toHaveBeenCalledWith({ customer_id: 'userId' });
            expect(result).toEqual(reservations);
        });
    });

    describe('findOne', () => {
        it('should return a reservation by ID', async () => {
            const reservation = { _id: 'id1' };
            mockReservationModel.findOne.mockResolvedValue(reservation);

            const result = await service.findOne('id1');

            expect(mockReservationModel.findOne).toHaveBeenCalledWith({ _id: 'id1' });
            expect(result).toEqual(reservation);
        });

        it('should throw NotFoundException if reservation is not found', async () => {
            mockReservationModel.findOne.mockResolvedValue(null);

            await expect(service.findOne('id1')).rejects.toThrow(NotFoundException);
        });
    });

    describe('update', () => {
        it('should update and return a reservation', async () => {
            const updatedReservation = { _id: 'id1', guests: 5 };
            mockReservationModel.findOneAndUpdate.mockResolvedValue(updatedReservation);

            const result = await service.update('id1', { guests: 5 });

            expect(mockReservationModel.findOneAndUpdate).toHaveBeenCalledWith(
                { _id: 'id1' },
                { guests: 5 },
                { new: true },
            );
            expect(result).toEqual(updatedReservation);
        });

        it('should throw NotFoundException if reservation is not found', async () => {
            mockReservationModel.findOneAndUpdate.mockResolvedValue(null);

            await expect(service.update('id1', { guests: 5 })).rejects.toThrow(NotFoundException);
        });
    });

    describe('delete', () => {
        it('should delete a reservation and update related entities', async () => {
            const reservation = {
                _id: 'id1',
                restaurant_id: 'restaurantId',
                table_id: 'tableId',
            };
            mockReservationModel.findByIdAndDelete.mockResolvedValue(reservation);
            mockRestaurantService.findOne.mockResolvedValue({ _id: 'restaurantId' });

            await service.delete('id1');

            expect(mockReservationModel.findByIdAndDelete).toHaveBeenCalledWith({ _id: 'id1' });
            expect(mockRestaurantService.deleteReservation).toHaveBeenCalledWith(
                reservation.restaurant_id,
                reservation._id,
            );
            expect(mockTableService.deleteReservation).toHaveBeenCalledWith(
                reservation.table_id,
                reservation._id,
            );
            expect(mockOrderService.deleteByReservation).toHaveBeenCalledWith(
                reservation.restaurant_id,
            );
        });

        it('should throw NotFoundException if reservation is not found', async () => {
            mockReservationModel.findByIdAndDelete.mockResolvedValue(null);

            await expect(service.delete('id1')).rejects.toThrow(NotFoundException);
        });
    });
});
