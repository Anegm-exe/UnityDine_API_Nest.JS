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
    let restaurantService: RestaurantService;
    let tableService: TableService;
    let orderService: OrderService;

    const mockReservation = {
        _id: 'testId',
        customer_id: 'testCustomerId',
        table_id: 'testTableId',
        restaurant_id: 'testRestaurantId',
        reservation_time: new Date(),
        end_time: new Date(),
        guests: 2,
        reservation_status: 'Pending',
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

    const mockReservationModel = {
        create: jest.fn(),
        find: jest.fn(),
        findOne: jest.fn(),
        findByIdAndDelete: jest.fn(),
        findOneAndUpdate: jest.fn(),
    };

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ReservationService,
                {
                    provide: getModelToken(Reservation.name),
                    useValue: mockReservationModel,
                },
                {
                    provide: RestaurantService,
                    useValue: mockRestaurantService,
                },
                {
                    provide: TableService,
                    useValue: mockTableService,
                },
                {
                    provide: OrderService,
                    useValue: mockOrderService,
                },
            ],
        }).compile();

        service = module.get<ReservationService>(ReservationService);
        reservationModel = module.get<Model<Reservation>>(getModelToken(Reservation.name));
        restaurantService = module.get<RestaurantService>(RestaurantService);
        tableService = module.get<TableService>(TableService);
        orderService = module.get<OrderService>(OrderService);
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        const createReservationDto: Reservation = {
            customer_id: 'testCustomerId',
            table_id: 'testTableId',
            restaurant_id: 'testRestaurantId',
            reservation_time: new Date(),
            end_time: new Date(),
            guests: 2,
            reservation_status: 'Pending',
        };

        it('should successfully create a reservation', async () => {
            const savedReservation = { ...mockReservation, save: jest.fn().mockResolvedValue(mockReservation) };
            mockReservationModel.create.mockResolvedValue(savedReservation);
            mockRestaurantService.findOne.mockResolvedValue({ _id: 'testRestaurantId' });

            const result = await service.create(createReservationDto);

            expect(mockReservationModel.create).toHaveBeenCalledWith(createReservationDto);
            expect(mockRestaurantService.findOne).toHaveBeenCalledWith(createReservationDto.restaurant_id);
            expect(mockRestaurantService.addReservation).toHaveBeenCalledWith(
                createReservationDto.restaurant_id,
                mockReservation._id
            );
            expect(result).toEqual(savedReservation);
        });

        it('should throw NotFoundException when restaurant not found', async () => {
            mockRestaurantService.findOne.mockResolvedValue(null);

            await expect(service.create(createReservationDto)).rejects.toThrow(NotFoundException);
        });
    });

    describe('findAll', () => {
        it('should return all reservations', async () => {
            const reservations = [mockReservation];
            mockReservationModel.find.mockReturnValue({ exec: jest.fn().mockResolvedValue(reservations) });

            const result = await service.findAll();

            expect(mockReservationModel.find).toHaveBeenCalled();
            expect(result).toEqual(reservations);
        });
    });

    describe('findByUserId', () => {
        it('should return reservations for specific user', async () => {
            const userId = 'testCustomerId';
            const reservations = [mockReservation];
            mockReservationModel.find.mockReturnValue({ exec: jest.fn().mockResolvedValue(reservations) });

            const result = await service.findByUserId(userId);

            expect(mockReservationModel.find).toHaveBeenCalledWith({ customer_id: userId });
            expect(result).toEqual(reservations);
        });
    });

    describe('findByRestaurantId', () => {
        it('should return reservations for specific restaurant', async () => {
            const restaurantId = 'testRestaurantId';
            const reservations = [mockReservation];
            mockReservationModel.find.mockReturnValue({ exec: jest.fn().mockResolvedValue(reservations) });

            const result = await service.findByRestaurantId(restaurantId);

            expect(mockReservationModel.find).toHaveBeenCalledWith({ restaurant_id: restaurantId });
            expect(result).toEqual(reservations);
        });
    });

    describe('findOne', () => {
        it('should return a specific reservation', async () => {
            mockReservationModel.findOne.mockReturnValue({ exec: jest.fn().mockResolvedValue(mockReservation) });

            const result = await service.findOne('testId');

            expect(mockReservationModel.findOne).toHaveBeenCalledWith({ _id: 'testId' });
            expect(result).toEqual(mockReservation);
        });

        it('should throw NotFoundException when reservation not found', async () => {
            mockReservationModel.findOne.mockReturnValue({ exec: jest.fn().mockResolvedValue(null) });

            await expect(service.findOne('testId')).rejects.toThrow(NotFoundException);
        });
    });

    describe('update', () => {
        const updateData = { guests: 3 };

        it('should successfully update a reservation', async () => {
            const updatedReservation = { ...mockReservation, ...updateData };
            mockReservationModel.findOneAndUpdate.mockReturnValue({
                exec: jest.fn().mockResolvedValue(updatedReservation),
            });

            const result = await service.update('testId', updateData);

            expect(mockReservationModel.findOneAndUpdate).toHaveBeenCalledWith(
                { _id: 'testId' },
                updateData,
                { new: true }
            );
            expect(result).toEqual(updatedReservation);
        });

        it('should throw NotFoundException when reservation not found', async () => {
            mockReservationModel.findOneAndUpdate.mockReturnValue({ exec: jest.fn().mockResolvedValue(null) });

            await expect(service.update('testId', updateData)).rejects.toThrow(NotFoundException);
        });
    });

    describe('delete', () => {
        it('should successfully delete a reservation', async () => {
            mockReservationModel.findByIdAndDelete.mockReturnValue({ exec: jest.fn().mockResolvedValue(mockReservation) });
            mockRestaurantService.findOne.mockResolvedValue({ _id: 'testRestaurantId' });

            await service.delete('testId');

            expect(mockReservationModel.findByIdAndDelete).toHaveBeenCalledWith({ _id: 'testId' });
            expect(mockRestaurantService.deleteReservation).toHaveBeenCalledWith(
                mockReservation.restaurant_id,
                mockReservation._id
            );
            expect(mockTableService.deleteReservation).toHaveBeenCalledWith(
                mockReservation.table_id,
                mockReservation._id
            );
            expect(mockOrderService.deleteByReservation).toHaveBeenCalledWith(mockReservation.restaurant_id);
        });

        it('should throw NotFoundException when reservation not found', async () => {
            mockReservationModel.findByIdAndDelete.mockReturnValue({ exec: jest.fn().mockResolvedValue(null) });

            await expect(service.delete('testId')).rejects.toThrow(NotFoundException);
        });

        it('should throw NotFoundException when restaurant not found during deletion', async () => {
            mockReservationModel.findByIdAndDelete.mockReturnValue({ exec: jest.fn().mockResolvedValue(mockReservation) });
            mockRestaurantService.findOne.mockResolvedValue(null);

            await expect(service.delete('testId')).rejects.toThrow(NotFoundException);
        });
    });
});