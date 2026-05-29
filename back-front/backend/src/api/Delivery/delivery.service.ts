
import { ClientModel } from "../Client/client.model";
import { DeliveryModel } from "./delivery.model";

export class DeliveryService {
  getConsegne = async (filters: any) => {
  return await DeliveryModel.find(filters)
    .populate("clienteId")
    .sort({ createdAt: -1 });
};

  getConsegnaById = async (id: string) => {
  return await DeliveryModel.findById(id);
};

  createConsegna = async (data: any) => {
  const cliente = await ClientModel.findById(data.clienteId);
  if (!cliente) throw new Error("Cliente non trovato");

  const consegna = await DeliveryModel.create({
    ...data,
    stato: "Da ritirare",
    chiaveConsegna: "TRK-" + Date.now(),
  });

  return consegna;
};

  updateConsegna = async (id: string, data: any) => {
  const consegna = await DeliveryModel.findById(id);
  if (!consegna) return null;

  if (consegna.stato === "Consegnata") {
    throw new Error("Consegna già completata");
  }

  if (data.stato === "Consegnata") {
    data.dataConsegna = new Date();
  }

  return await DeliveryModel.findByIdAndUpdate(id, data, { new: true });
};

  deleteConsegna = async (id: string) => {
  const consegna = await DeliveryModel.findById(id);

  if (!consegna) return false;
  if (consegna.stato === "Consegnata") return false;

  await consegna.deleteOne();
  return true;
};

  updateStatoConsegna = async (id: string, stato: string) => {
  const consegna = await DeliveryModel.findById(id);
  if (!consegna) return null;

  const update: any = { stato };

  if (stato === "Consegnata") {
    update.dataConsegna = new Date();
  }

  return await DeliveryModel.findByIdAndUpdate(id, update, { new: true });
};

  trackingConsegna = async (
    chiaveConsegna: string,
    dataRitiro: Date
  ) => {
    const consegna = await DeliveryModel.findOne({
      chiaveConsegna,
      dataRitiro,
    });

  if (!consegna) return null;

  return {
    stato: consegna.stato,
    dataRitiro: consegna.dataRitiro,
    dataConsegna: consegna.dataConsegna || null,
  };
};
};
