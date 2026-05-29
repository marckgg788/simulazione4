import { Schema, model } from "mongoose";
import { Client } from "./client.entity";

const clientSchema = new Schema<Client>(
  {
    nominativo: { type: String, required: true },
    via: { type: String, required: true },
    comune: { type: String, required: true },
    provincia: { type: String, required: true },
    telefono:{type: String},
    email:{type: String},
    note:{type: String}
  },
  { timestamps: true }
);

clientSchema.set("toJSON", {
  virtuals: true,
  transform: (_, ret) => {
    delete (ret as unknown as any)._id;
    delete (ret as unknown as any).__v;
    return ret;
  },
});

export const ClientModel = model<Client>("Client", clientSchema);
