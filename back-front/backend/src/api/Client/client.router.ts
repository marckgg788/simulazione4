import { Router } from "express";
import { validate } from "../../lib/validation-middleware";
import { CreateClientDTO, UpdateClientDTO } from "./client.dto";
import { createClient, deleteClient, getAllClients, getClientById, updateClient } from "./client.controller";


const router = Router();


router.get("/getAllClients",getAllClients);
router.post("/createClient", validate(CreateClientDTO),createClient);
router.get("/getClientById/:id", getClientById);
router.put("/updateClient/:id", validate(UpdateClientDTO), updateClient);
router.delete("/deleteClient/:id", deleteClient);


export default router;
