"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const bcrypt_1 = require("bcrypt");
const User_service_1 = require("../services/User.service");
class UserController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User_service_1.default.getUserByEmail(email);
            if (user) {
                const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
                if (isPasswordValid) {
                    return res.status(200).json({ success: true, message: 'Login Successful' });
                }
                else {
                    return res.status(401).json({ success: false, message: 'Faild To Login, Invalid Credentials' });
                }
            }
            return res.status(401).json({ success: false, message: 'Faild To Login, Invalid Credentials' });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async register(req, res) {
        try {
            const { email, password, name, dateOfBirth } = req.body;
            const existingUser = await User_service_1.default.getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ success: false, message: 'User with this email already exists' });
            }
            const hashedPassword = await bcrypt_1.default.hash(password, 10);
            const userData = {
                email,
                password: hashedPassword,
                name,
                dateOfBirth,
                role: false,
            };
            const newUser = await User_service_1.default.createUser(userData);
            return res.status(201).json({ success: true, message: 'User registered successfully', user: { email: newUser.email, name: newUser.name } });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    async getID(req, res) {
        try {
            const { userId } = req.params;
            const user = await User_service_1.default.getUserById(userId);
            return res.status(200).json({ id: user._id });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getName(req, res) {
        try {
            const { userId } = req.params;
            const user = await User_service_1.default.getUserById(userId);
            return res.status(200).json({ name: user.name });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getContact(req, res) {
        try {
            const { userId } = req.params;
            const user = await User_service_1.default.getUserById(userId);
            return res.status(200).json({ contact: user.contact });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getEmail(req, res) {
        try {
            const { userId } = req.params;
            const user = await User_service_1.default.getUserById(userId);
            return res.status(200).json({ email: user.email });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getDateOfBirth(req, res) {
        try {
            const { userId } = req.params;
            const user = await User_service_1.default.getUserById(userId);
            return res.status(200).json({ dateOfBirth: user.dateOfBirth });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async getRole(req, res) {
        try {
            const { userId } = req.params;
            const user = await User_service_1.default.getUserById(userId);
            return res.status(200).json({ role: user.role });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async setName(req, res) {
        try {
            const { userId } = req.params;
            const { name } = req.body;
            if (!name)
                return res.status(400).json({ success: false, message: 'Name is required' });
            const updatedUser = await User_service_1.default.updateUser(userId, { name });
            if (!updatedUser)
                return res.status(404).json({ success: false, message: 'User Not Found' });
            return res.status(200).json({ success: true, user: updatedUser });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async setContact(req, res) {
        try {
            const { userId } = req.params;
            const { contact } = req.body;
            const user = await User_service_1.default.updateUser(userId, { contact });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async setEmail(req, res) {
        try {
            const { userId } = req.params;
            const { email } = req.body;
            const user = await User_service_1.default.updateUser(userId, { email });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async setDateOfBirth(req, res) {
        try {
            const { userId } = req.params;
            const { dateOfBirth } = req.body;
            const user = await User_service_1.default.updateUser(userId, { dateOfBirth });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async setRole(req, res) {
        try {
            const { userId } = req.params;
            const { role } = req.body;
            const user = await User_service_1.default.updateUser(userId, { role });
            return res.status(200).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
    async viewMenu(req, res) {
        try {
            return res.status(200).json({ success: true, menu: 'Menu content here' });
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
exports.userController = new UserController();
//# sourceMappingURL=User.controller.js.map