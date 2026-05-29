import { Request, Response, NextFunction } from 'express';
import { DeliveryService } from '../Delivery/delivery.service';


const deliveryService = new DeliveryService();


export const trackingConsegna = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { chiaveConsegna, dataRitiro } = req.body;

    const result = await deliveryService.trackingConsegna(
      chiaveConsegna,
      new Date(dataRitiro)
    );

    if (!result) {
      res.status(404).json({ message: "Consegna non trovata" });
    }

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};