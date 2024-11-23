import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserService from '../services/User.service';

class UserController {

    // Login (Sign In) Method
    async login(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const user = await UserService.getUserByEmail(email);   // Get User By His Email

            if (user) { // If Email Exists
                const isPasswordValid = await bcrypt.compare(password, user.password);

                if (isPasswordValid) {
                    return res.status(200).json({ success: true, message: 'Login Successful' });
                } else {
                    return res.status(401).json({ success: false, message: 'Faild To Login, Invalid Credentials' });
                }
            }
            return res.status(401).json({ success: false, message: 'Faild To Login, Invalid Credentials' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Register (Sign Up) Method
    async register(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password, name, dateOfBirth } = req.body;  // Only require these fields for registration
            const existingUser = await UserService.getUserByEmail(email);   // Check if email already exists

            if (existingUser) {
                return res.status(400).json({ success: false, message: 'User with this email already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);  // Hash the password + 10 salt
            const userData = {
                email,
                password: hashedPassword,
                name,
                dateOfBirth,
                role: false,    // User _NOTADMIN_
            };
            const newUser = await UserService.createUser(userData); // Create & Save User To DB
            return res.status(201).json({success: true, message: 'User registered successfully', user: { email: newUser.email, name: newUser.name }});  // the Response
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Data Getters
    async getID(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const user = await UserService.getUserById(userId);
            return res.status(200).json({ id: user._id });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getName(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const user = await UserService.getUserById(userId);
            return res.status(200).json({ name: user.name });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getContact(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const user = await UserService.getUserById(userId);
            return res.status(200).json({ contact: user.contact });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getEmail(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const user = await UserService.getUserById(userId);
            return res.status(200).json({ email: user.email });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getDateOfBirth(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const user = await UserService.getUserById(userId);
            return res.status(200).json({ dateOfBirth: user.dateOfBirth });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async getRole(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const user = await UserService.getUserById(userId);
            return res.status(200).json({ role: user.role });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // Setters
    async setName(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const { name } = req.body;

            if (!name)
                return res.status(400).json({ success: false, message: 'Name is required' });

            const updatedUser = await UserService.updateUser(userId, { name });

            if (!updatedUser)
                return res.status(404).json({ success: false, message: 'User Not Found' });

            return res.status(200).json({ success: true, user: updatedUser });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async setContact(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const { contact } = req.body;
            const user = await UserService.updateUser(userId, { contact });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async setEmail(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const { email } = req.body;
            const user = await UserService.updateUser(userId, { email });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async setDateOfBirth(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const { dateOfBirth } = req.body;
            const user = await UserService.updateUser(userId, { dateOfBirth });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async setRole(req: Request, res: Response): Promise<Response> {
        try {
            const { userId } = req.params;
            const { role } = req.body;
            const user = await UserService.updateUser(userId, { role });
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    // ViewMenu: Dummy implementation for simplicity
    async viewMenu(req: Request, res: Response): Promise<Response> {
        try {
            // Implement menu viewing logic here
            return res.status(200).json({ success: true, menu: 'Menu content here' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}

export const userController = new UserController();
