const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    const { name, username, email, password } = req.body;

    try {
        // Check if the email or username already exists
        const existingUser = await User.findOne({ 
            $or: [{ email }, { username }]
        });

        if (existingUser) {
            return res.status(409).json({ 
                error: "User with this email or username already exists" 
            }); // 409 Conflict
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({ 
            name, 
            username, 
            email, 
            password: hashedPassword 
        });

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({message: 'Login successful', authToken: token, user: { name: user.name, username: user.username, email: user.email, favCar: user.favorites } });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};