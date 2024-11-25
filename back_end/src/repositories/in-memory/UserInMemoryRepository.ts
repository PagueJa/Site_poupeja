import { randomUUID } from 'crypto'
import { User } from "../../models/User";

import UserPrismaRepository from '../prisma/UserPrismaRepository';

class UserInMemoryRepository implements UserPrismaRepository {

    private users: User[];

    constructor() {
        this.users = [];
    }

    async create(data: User): Promise<User> {
        data.id_user = randomUUID();
        this.users.push(data);
        return data;
    }

    async getByEmail(email: string): Promise<User | null> {

        const dataUser = this.users.find((item) => item.email === email)

        if (!dataUser) {
            return null
        }

        return dataUser

    }
}

export default UserInMemoryRepository