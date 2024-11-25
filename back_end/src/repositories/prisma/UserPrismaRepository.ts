import { PrismaClient } from "@prisma/client"
import { User } from "../../models/User"

const prisma = new PrismaClient()

class UserPrismaRepository {

    async create(data: User): Promise<User> {
        const newUser = await prisma.user.create({
            data
        })
        return newUser
    }

    async getByEmail(email: string): Promise<User | null>{
        const user = await prisma.user.findFirst({
            where: {
                email
            }
        })
        return user
    }

}

export default UserPrismaRepository