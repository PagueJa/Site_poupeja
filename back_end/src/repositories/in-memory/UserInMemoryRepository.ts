import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs'; 
import { User } from "../../models/User";
import UserPrismaRepository from '../prisma/UserPrismaRepository';

class UserInMemoryRepository implements UserPrismaRepository {

    private users: User[];

    constructor() {
        this.users = [];
    }

   
    async create(data: User): Promise<User> {

        data.id_user = randomUUID();
        data.password = await bcrypt.hash(data.password, 10);
        this.users.push(data);

        return data;
    }

    
    async getByEmail(email: string): Promise<User | null> {

        const dataUser = this.users.find((item) => item.email === email);

        return dataUser || null;
    }

    async isPasswordValid(password: string, hashedPassword: string): Promise<boolean> {

        return bcrypt.compare(password, hashedPassword);
    }
}

export default UserInMemoryRepository;
