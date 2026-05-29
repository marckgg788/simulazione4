import { Router } from "express";
import { deleteConsegna, getAllConsegne, getConsegnaById, trackingConsegna, updateConsegna,createConsegna } from "./delivery.controller";


const router = Router();

router.get("/", getAllConsegne);
router.get("/:id", getConsegnaById);
router.post("/", createConsegna);
router.put("/:id", updateConsegna);
router.delete("/:id", deleteConsegna);
router.put("/:id/stato", updateConsegna);
router.post("/tracking", trackingConsegna);

export default router;