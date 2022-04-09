import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { Model } from "mongoose";
import { UserDocument } from "./schemas/user.schema";
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getUserById(userId: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(email: string, age: number): Promise<User>;
    removeById(email: string, age: number): Promise<any>;
    updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User>;
}
