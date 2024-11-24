import { Schema, model } from 'mongoose';

const ReservationSchema = new Schema({
  RID: { type: String, required: true },
  CID: { type: String, required: true },
  TID: { type: String, required: true },
  reservationTime: { type: Date, required: true },
  reservationStatus: {
    type: String,
    required: true,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },
});

const Reservation = model('Reservation', ReservationSchema);

export { Reservation, ReservationSchema }; //  exporting both