import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from '../schemas/reservation.schema';
export declare class ReservationService {
    private reservationModel;
    constructor(reservationModel: Model<ReservationDocument>);
    create(reservation: Reservation): Promise<Reservation>;
    findAll(): Promise<Reservation[]>;
    findOne(id: number): Promise<Reservation>;
    update(id: number, updateData: Partial<Reservation>): Promise<Reservation>;
    delete(id: number): Promise<void>;
}
