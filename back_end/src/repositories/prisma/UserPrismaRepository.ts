import { PrismaClient } from "@prisma/client"
import { User } from "../../models/User"
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

class UserPrismaRepository {

    async create(data: User): Promise<User> {

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        const newUser = await prisma.user.create({
            data: {
                ...data,
                password: hashedPassword, 
            },
        });

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

    async isPasswordValid(password: string, hashedPassword: string): Promise<boolean> {

        return bcrypt.compare(password, hashedPassword);

    }

}

export default UserPrismaRepository