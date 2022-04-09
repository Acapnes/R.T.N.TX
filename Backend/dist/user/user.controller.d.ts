import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './user.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUser(userId: string): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(createUserDto: UserDto): Promise<User>;
}
