import { Types } from "mongoose";
import { Client } from "./client.entity";
import { ClientModel } from "./client.model";

export class ClientService {


  async createClient(data: Client) : Promise<Client> {
    const newClient = await ClientModel.create(data);
    return newClient;
  }

 
  async getClient() : Promise<Client[]> {
    return await ClientModel.find().sort({ createdAt: -1 }).exec();
  }

  
  async getClientById(id: string) : Promise<Client | null> {
    return await ClientModel.findById(id).exec();
  }

  
  async updateClient(id: string, updates: Partial<Client>) : Promise<Client | null> {
    const client = await ClientModel.findByIdAndUpdate(id, updates, { new: true });
    return client;
  }

  
  async deleteClient(id: string) : Promise<boolean | null> {
    const request = await ClientModel.findById(id);
    if (!request) return null;

    await request.deleteOne();
    return true;
  }


}

