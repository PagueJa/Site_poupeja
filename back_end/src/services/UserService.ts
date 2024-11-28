import { User, Login } from "../models/User"
import UserInMemoryRepository from "../repositories/in-memory/UserInMemoryRepository"
import UserPrismaRepository from "../repositories/prisma/UserPrismaRepository";
import jwt from "jsonwebtoken";


class UserService {

    constructor( private _userRepository: UserInMemoryRepository | UserPrismaRepository ) {

    }

    async create(data: User): Promise<{data: User}> {

        const userData = await this._userRepository.getByEmail(data.email)

        if (userData){
            throw new Error("This email already exists")
        }

        const addUserData = await this._userRepository.create(data)

        return { data: addUserData }

    }

    async checkLogin(data: Login): Promise<{ token: string }> {
        
        const user = await this._userRepository.getByEmail(data.email);

        if (!user) {
            throw new Error("Email ou senha inválidos");
        }

        const isPasswordValid = await this._userRepository.isPasswordValid(data.password, user.password);

        if (!isPasswordValid) {
            throw new Error("Email ou senha inválidos");
        }

        const token = this.generateToken(user);

        return { token };
    }

    private generateToken(user: User): string {

        return jwt.sign(

            { id: user.id_user, email: user.email },

            //TODO: Criar uma chave segura na variável de ambiente 
            "SECRET_KEY", 
            { expiresIn: "1h" }

        );
    }
}

export default UserService