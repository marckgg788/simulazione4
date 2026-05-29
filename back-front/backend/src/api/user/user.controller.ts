import { Request, Response, NextFunction } from "express";
import userService from "./user.service";
import { TypedRequest } from "../../lib/typed-request.interface";
import { QueryListUserDTO } from "./user.dto";

export const listUsers = async (
    req: TypedRequest<unknown>,
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        next(error); 
    }
};
