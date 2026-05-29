import { Router } from "express";
import authRouter from "./auth/auth.router";
import userRouter from "./user/user.router";
import clientRouter from "./Client/client.router";
import categoryRouter from "./Delivery/delivery.router";
import { isAuthenticated } from "../lib/auth/auth.middleware";

const router = Router();

router.use('/client',isAuthenticated,clientRouter)
router.use('/category',isAuthenticated,categoryRouter);
router.use('/users', isAuthenticated, userRouter);
router.use(authRouter);

export default router;