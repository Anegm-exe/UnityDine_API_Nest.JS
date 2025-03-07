import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './model/user.schema';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // register Func
    @Post('register')
    async register(@Body() createUserDto: User): Promise<User> {
        const { email } = createUserDto;

        // Check if email already exists
        const existingUser = await this.userService.findByEmail(email);
        if (existingUser) {
            throw new BadRequestException('Invalid Registeration Attempt');
        }

        const createdUser = await this.userService.create(createUserDto);
        return createdUser;
    }

    // Login Func
    @Post('login')
    async login(@Body() credentials: { email: string; password: string }): Promise<User> {
        const { email, password } = credentials;

        // Find the user by email
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Invalid Login Attempt');
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid Login Attempt');
        }

        return user;
    }

    // All Single Supporting Funcs (Main Single Service Ones)
    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string,@Body() updateUserDto: Partial<User>): Promise<User> {
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.userService.delete(id);
    }
}