import { DeliveryModel } from "../Delivery/delivery.model";

const trackingConsegna = async (
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