import { Request, Response, NextFunction } from "express"
import UserService from "../services/UserService";

import UserInMemoryRepository from "../repositories/in-memory/UserInMemoryRepository";
import UserPrismaRepository from "../repositories/prisma/UserPrismaRepository";

const userService = new UserService(new UserPrismaRepository());

class UserController{

    constructor(){

    }

    async create(Req: Request, Res: Response) {

        try {

            const data =  Req.body;

            if (!data.name || !data.email || !data.password) {
                return Res.status(400).json({
                    message: "Name, email, and password are required" });
            }

            const userCreatedData = await userService.create(data)
                
            return Res.status(201).json(userCreatedData);
    

        } catch(err: any) {
            return Res.status(400).json({
                error: err.message});

        }

    }

    async checkLogin(Req: Request, Res: Response) {

        try {

            const data =  Req.body;

            if (!data.email || !data.password) {
                return Res.status(400).json({
                    message: "Email e senha são Obrigatórios" });
            }

            const userCheckData = await userService.checkLogin(data)

            return Res.status(200).json(userCheckData);
    

        } catch(err: any) {
            return Res.status(400).json({
                error: err.message});
        }
    }

}

export default UserController