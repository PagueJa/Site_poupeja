import { User } from "../models/User"
import UserInMemoryRepository from "../repositories/in-memory/UserInMemoryRepository"
import UserPrismaRepository from "../repositories/prisma/UserPrismaRepository";


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
}

export default UserService