import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from "./schemas/user.schema";

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async getUserById(userId: string): Promise<User> {
        return this.userModel.findOne({ userId })
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.userModel.findOne({ email })
    }

    async getUsers(): Promise<User[]> {
        return this.userModel.find({});
    }

    async createUser(email: string, age: number): Promise<User> {
        return this.userModel.create({
            userId: uuidv4(),
            email,
            age,
            favoriteFoods: []
        })
    }

    async removeById(email: string,age:number) {
        return this.userModel.remove({email,age});
    }

    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User> {
        return this.userModel.findOneAndUpdate({ userId }, userUpdates);
    }
}