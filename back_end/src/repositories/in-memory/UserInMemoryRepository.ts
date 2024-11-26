import { randomUUID } from 'crypto';
import bcrypt from 'bcryptjs';  // Usando bcryptjs para a verificação da senha
import { User } from "../../models/User";
import UserPrismaRepository from '../prisma/UserPrismaRepository';

class UserInMemoryRepository implements UserPrismaRepository {

    private users: User[];

    constructor() {
        this.users = [];
    }

    // Cria um novo usuário
    async create(data: User): Promise<User> {
        data.id_user = randomUUID();
        // Criptografa a senha antes de salvar
        data.password = await bcrypt.hash(data.password, 10);
        this.users.push(data);
        return data;
    }

    // Busca um usuário pelo email
    async getByEmail(email: string): Promise<User | null> {
        const dataUser = this.users.find((item) => item.email === email);
        return dataUser || null;
    }

    // Verifica se a senha é válida
    async isPasswordValid(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);  // Compara a senha informada com a senha criptografada
    }
}

export default UserInMemoryRepository;
