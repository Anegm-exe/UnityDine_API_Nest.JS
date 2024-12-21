import { Test, TestingModule } from '@nestjs/testing';
import { ReservationService } from './reservation.service';
import { getModelToken } from '@nestjs/mongoose';
import { Reservation } from './model/reservation.schema';
import { RestaurantService } from 'src/restaurant/restaurant.service';
import { TableService } from 'src/table/table.service';
import { OrderService } from 'src/order/order.service';
import { NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

describe('ReservationService', () => {
    let service: ReservationService;
    let reservationModel: Model<Reservation>;

    const mockReservation = {
        _id: 'testId',
        customer_id: 'testCustomerId',
        table_id: 'testTableId',
        restaurant_id: 'testRestaurantId',
        reservation_time: new Date(),
        end_time: new Date(),
        guests: 2,
        reservation_status: 'Pending',
        save: jest.fn().mockResolvedValue(this),
    };

    const mockReservationModel = {
        find: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue([mockReservation]) }),
        findOne: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockReservation) }),
        findByIdAndDelete: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockReservation) }),
        findOneAndUpdate: jest.fn().mockReturnValue({ exec: jest.fn().mockResolvedValue(mockReservation) }),
        create: jest.fn().mockReturnValue(mockReservation),
    };

    const mockRestaurantService = {
        findOne: jest.fn().mockResolvedValue({ _id: 'testRestaurantId' }),
        addReservation: jest.fn(),
        deleteReservation: jest.fn(),
    };

    const mockTableService = {
        deleteReservation: jest.fn(),
    };

    const mockOrderService = {
        deleteByReservation: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ReservationService,
                {
                    provide: getModelToken(Reservation.name),
                    useValue: mockReservationModel,
                },
                { provide: RestaurantService, useValue: mockRestaurantService },
                { provide: TableService, useValue: mockTableService },
                { provide: OrderService, useValue: mockOrderService },
            ],
        }).compile();

        service = module.get<ReservationService>(ReservationService);
        reservationModel = module.get<Model<Reservation>>(getModelToken(Reservation.name));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should create and return a reservation', async () => {
            const createReservationDto: Reservation = {
                customer_id: 'userId',
                table_id: 'tableId',
                restaurant_id: 'restaurantId',
                reservation_time: new Date(),
                end_time: new Date(),
                guests: 4,
                reservation_status: 'Pending',
            };

            const result = await service.create(createReservationDto);

            expect(mockRestaurantService.addReservation).toHaveBeenCalledWith(
                createReservationDto.restaurant_id,
                mockReservation._id,
            );
            expect(result).toEqual(createReservationDto);
        });

        it('Should throw not found exception if restaurant doesnt exist', async () => {
            const createReservationDto: Reservation = {
                customer_id: 'userId',
                table_id: 'tableId',
                restaurant_id: 'restaurantId',
                reservation_time: new Date(),
                end_time: new Date(),
                guests: 4,
                reservation_status: 'Pending',
            };
            mockRestaurantService.findOne.mockResolvedValue(null);
            await expect(service.create(createReservationDto)).rejects.toThrow(NotFoundException);
        });
    });

    describe('findAll', () => {
        it('should return all reservations', async () => {
            const reservations = [mockReservation, { ...mockReservation, _id: 'id2' }];
            (reservationModel.find as jest.Mock).mockReturnValue({
                exec: jest.fn().mockResolvedValue(reservations),
            });

            const result = await service.findAll();

            expect(reservationModel.find).toHaveBeenCalled();
            expect(result).toEqual(reservations);
        });
    });

    describe('findByUserId', () => {
        it('should return reservations by user ID', async () => {
            const reservations = [mockReservation];
            (reservationModel.find as jest.Mock).mockReturnValue({
                exec: jest.fn().mockResolvedValue(reservations),
            });
            const result = await service.findByUserId('testCustomerId');
            expect(reservationModel.find).toHaveBeenCalledWith({ customer_id: 'testCustomerId' });
            expect(result).toEqual(reservations);
        });
    });

    describe('findOne', () => {
        it('should return a reservation by ID', async () => {
            (reservationModel.findOne as jest.Mock).mockReturnValue({
                exec: jest.fn().mockResolvedValue(mockReservation),
            });
            const result = await service.findOne('testId');
            expect(reservationModel.findOne).toHaveBeenCalledWith({ _id: 'testId' });
            expect(result).toEqual(mockReservation);
        });

        it('should throw NotFoundException if reservation is not found', async () => {
            (reservationModel.findOne as jest.Mock).mockReturnValue({
                exec: jest.fn().mockResolvedValue(null),
            });
            await expect(service.findOne('nonExistentId')).rejects.toThrow(NotFoundException);
        });
    });

    describe('update', () => {
        it('should update and return a reservation', async () => {
            const updatedReservation = { ...mockReservation, guests: 5 };
            (reservationModel.findOneAndUpdate as jest.Mock).mockReturnValue({
                exec: jest.fn().mockResolvedValue(updatedReservation),
            });
            const result = await service.update('testId', { guests: 5 });
            expect(reservationModel.findOneAndUpdate).toHaveBeenCalledWith(
                { _id: 'testId' },
                { guests: 5 },
                { new: true },
            );
            expect(result).toEqual(updatedReservation);
        });

        it('should throw NotFoundException if reservation is not found', async () => {
            (reservationModel.findOneAndUpdate as jest.Mock).mockReturnValue({
                exec: jest.fn().mockResolvedValue(null),
            });
            await expect(service.update('nonExistentId', { guests: 5 })).rejects.toThrow(NotFoundException);
        });
    });

    describe('delete', () => {
        it('should delete a reservation and update related entities', async () => {
            mockRestaurantService.findOne.mockResolvedValue({ _id: 'testRestaurantId' });
            (reservationModel.findByIdAndDelete as jest.Mock).mockReturnValue({
                exec: jest.fn().mockResolvedValue(mockReservation),
            });
            await service.delete('testId');
            expect(reservationModel.findByIdAndDelete).toHaveBeenCalledWith('testId');
            expect(mockRestaurantService.deleteReservation).toHaveBeenCalledWith(
                mockReservation.restaurant_id,
                mockReservation._id,
            );
            expect(mockTableService.deleteReservation).toHaveBeenCalledWith(
                mockReservation.table_id,
                mockReservation._id,
            );
            expect(mockOrderService.deleteByReservation).toHaveBeenCalledWith(mockReservation.restaurant_id);
        });

        it('should throw NotFoundException if reservation is not found', async () => {
            (reservationModel.findByIdAndDelete as jest.Mock).mockReturnValue({
                exec: jest.fn().mockResolvedValue(null),
            });
            await expect(service.delete('nonExistentId')).rejects.toThrow(NotFoundException);
        });
    });
});