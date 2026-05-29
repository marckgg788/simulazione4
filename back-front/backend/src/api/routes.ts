import { Router } from "express";
import authRouter from "./auth/auth.router";
import userRouter from "./user/user.router";
import clientRouter from "./Client/client.router";
import deliveryRouter from "./Delivery/delivery.router";
import { isAuthenticated } from "../lib/auth/auth.middleware";
import trackingRouter from "./tracking/tracking.router";


const router = Router();

router.use('/client',isAuthenticated,clientRouter)
router.use('/consegna',isAuthenticated,deliveryRouter);
router.use('/users', isAuthenticated, userRouter);
router.use('/tracking', trackingRouter);
router.use(authRouter);

export default router;