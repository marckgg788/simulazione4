import { Router } from "express";
import { validate } from "../../lib/validation-middleware";
import { CreateClientDTO, UpdateClientDTO } from "./client.dto";
import { createClient, deleteClient, getAllClients, getClientById, updateClient } from "./client.controller";


const router = Router();


router.get("/",getAllClients);
router.post("/", validate(CreateClientDTO),createClient);
router.get("/:id", getClientById);
router.put("/:id", validate(UpdateClientDTO), updateClient);
router.delete("/:id", deleteClient);


export default router;
