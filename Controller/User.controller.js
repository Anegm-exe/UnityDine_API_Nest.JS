const userService = require('./user.service'); // Adjust the path as necessary

class UserController {
    // Login: Dummy implementation for simplicity
    async login(req, res) {
        try {
            const { email, password } = req.body; // Assuming login uses email & password
            // Implement actual login logic here
            const user = await userService.getUserByEmail(email);
            if (user && password === 'dummy_password') { // Replace with real password checking
                return res.status(200).json({ success: true, message: 'Login successful' });
            }
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Getters
    async getID(req, res) {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            res.status(200).json({ id: user._id });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getName(req, res) {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            res.status(200).json({ name: user.name });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getContact(req, res) {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            res.status(200).json({ contact: user.contact });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getEmail(req, res) {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            res.status(200).json({ email: user.email });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getDateOfBirth(req, res) {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            res.status(200).json({ dateOfBirth: user.dateOfBirth });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getRole(req, res) {
        try {
            const { userId } = req.params;
            const user = await userService.getUserById(userId);
            res.status(200).json({ role: user.role });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Setters
    async setName(req, res) {
        try {
            const { userId } = req.params;
            const { name } = req.body;
            const user = await userService.updateUser(userId, { name });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async setContact(req, res) {
        try {
            const { userId } = req.params;
            const { contact } = req.body;
            const user = await userService.updateUser(userId, { contact });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async setEmail(req, res) {
        try {
            const { userId } = req.params;
            const { email } = req.body;
            const user = await userService.updateUser(userId, { email });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async setDateOfBirth(req, res) {
        try {
            const { userId } = req.params;
            const { dateOfBirth } = req.body;
            const user = await userService.updateUser(userId, { dateOfBirth });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async setRole(req, res) {
        try {
            const { userId } = req.params;
            const { role } = req.body;
            const user = await userService.updateUser(userId, { role });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // ViewMenu: Dummy implementation for simplicity
    async viewMenu(req, res) {
        try {
            // Implement menu viewing logic here
            res.status(200).json({ success: true, menu: 'Menu content here' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();
