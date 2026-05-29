import { Request, Response, NextFunction } from 'express';
import { DeliveryService } from './delivery.service';

const deliveryService = new DeliveryService();

export const getAllConsegne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deliveryService.getConsegne(req.query);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const getConsegnaById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deliveryService.getConsegnaById(req.params.id);

    if (!result) {
      res.status(404).json({ message: "Consegna non trovata" });
    }

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};


export const createConsegna = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deliveryService.createConsegna(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};


export const updateConsegna = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deliveryService.updateConsegna(req.params.id, req.body);

    if (!result) {
      res.status(404).json({ message: "Consegna non trovata" });
    }

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteConsegna = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await deliveryService.deleteConsegna(req.params.id);

    if (!result) {
      res.status(400).json({ message: "Non eliminabile" });
      return;
    }

    res.status(200).json({ message: "Eliminata" });
  } catch (err) {
    next(err);
  }
};

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
