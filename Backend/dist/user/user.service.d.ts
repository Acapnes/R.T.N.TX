import { User } from "./schemas/user.schema";
import { UsersRepository } from "./user.repository";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserById(userId: string): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(username: string, password: string): Promise<User>;
}
