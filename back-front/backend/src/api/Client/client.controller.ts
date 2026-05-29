import { Request, Response, NextFunction } from "express";
import { ClientService } from "./client.service";
import { Client } from "./client.entity";

const clientService = new ClientService();



export const getAllClients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const clients = await clientService.getClient();
    res.status(200).json(clients);
  } catch (err) {
    next(err);
  }
};


// -----------------------------------
// GET /api/clienti/:id → dettaglio cliente
export const getClientById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const client = await clientService.getClientById(id);

    if (!client) {
      res.status(404).json({ message: "Cliente non trovato" });
    }

    res.status(200).json(client);
  } catch (err) {
    next(err);
  }
};


// -----------------------------------
// POST /api/clienti → crea cliente
export const createClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body;

    
    if (!data.nominativo || !data.via || !data.comune) {
       res.status(400).json({ message: "Dati cliente non validi" });
    }

    const client = await clientService.createClient(data);

    res.status(201).json(client);
  } catch (err) {
    next(err);
  }
};


// -----------------------------------
// PUT /api/clienti/:id → modifica cliente
export const updateClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updated = await clientService.updateClient(id, updates);

    if (!updated) {
      res.status(404).json({ message: "Cliente non trovato" });
    }

    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};


// -----------------------------------
// DELETE /api/clienti/:id → elimina cliente
export const deleteClient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const deleted = await clientService.deleteClient(id);

    if (!deleted) {
      res.status(404).json({ message: "Cliente non trovato" });
    }

    res.status(200).json({ message: "Cliente eliminato correttamente" });

  } catch (err) {
    next(err);
  }
};