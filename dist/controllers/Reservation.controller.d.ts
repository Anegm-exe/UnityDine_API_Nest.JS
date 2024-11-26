import { ReservationService } from '../services/Reservation.service';
import { Reservation } from '../schemas/Reservation.schema';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    create(createReservationDto: Reservation): Promise<Reservation>;
    findAll(): Promise<Reservation[]>;
    findOne(id: number): Promise<Reservation>;
    update(id: number, updateReservationDto: Partial<Reservation>): Promise<Reservation>;
    delete(id: number): Promise<void>;
}
