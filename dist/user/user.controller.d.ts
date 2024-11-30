import { UserService } from './user.service';
import { User } from '../schemas/user.schema';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(createUserDto: User): Promise<User>;
    login(credentials: {
        email: string;
        password: string;
    }): Promise<{
        message: string;
        user: User;
    }>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: Partial<User>): Promise<User>;
    delete(id: number): Promise<void>;
}
