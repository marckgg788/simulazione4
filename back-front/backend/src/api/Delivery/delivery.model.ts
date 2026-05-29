import { Schema, model } from 'mongoose';
import { Deliveries } from './delivery.entity';

const deliverySchema = new Schema<Deliveries>(
  {
    clienteId: { type: String, required: true },
    dataRitiro: { type: Date, required: true },
    dataConsegna: { type: Date },
    stato: { type: String, enum: ["Da ritirare", "In deposito", "In consegna", "Consegnata", "In giacenza"], required: true },
    chiaveConsegna: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

deliverySchema.set('toJSON', {
  virtuals: true,
  transform: (_, ret) => {
  delete (ret as unknown as any)._id;
  delete (ret as unknown as any).__v;
    return ret;
  },
});

export const DeliveryModel = model<Deliveries>('Delivery', deliverySchema);
