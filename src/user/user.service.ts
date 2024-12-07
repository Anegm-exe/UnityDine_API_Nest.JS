import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,) { }

    // Create A User With The Data Provided
    async create(user: User): Promise<User> {
        const { password } = user;
        const hashedPassword = await bcrypt.hash(password, 15);
        const userWithHashedPassword = { ...user, password: hashedPassword };
        const newUser = new this.userModel(userWithHashedPassword);
        return newUser.save();
    }

    // Get All Users Existing
    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    // Find A Specific User by ID
    async findOne(id: number): Promise<User> {
        const user = await this.userModel.findOne({ _id: id }).exec();
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    // Find Specific User By Email
    async findByEmail(email: string): Promise<User | null> {
        return this.userModel.findOne({ email }).exec();
    }

    // Update A User Based On New-Data
    async update(id: number, updateData: Partial<User>): Promise<User> {
        const updatedUser = await this.userModel
            .findOneAndUpdate({ _id: id }, updateData, { new: true })
            .exec();
        if (!updatedUser) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return updatedUser;
    }

    // Delete A User
    async delete(id: number): Promise<void> {
        const result = await this.userModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
    }
}