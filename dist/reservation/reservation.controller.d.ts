import { ReservationService } from './reservation.service';
import { Reservation } from '../schemas/reservation.schema';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(createReservationDto: Reservation): Promise<Reservation>;
    findAll(): Promise<Reservation[]>;
    findOne(id: number): Promise<Reservation>;
    update(id: number, updateReservationDto: Partial<Reservation>): Promise<Reservation>;
    delete(id: number): Promise<void>;
}
