
const User = require('../models/user'); // Assuming you have a User model
const bcrypt = require('bcryptjs'); // Import bcryptjs
const jwt = require('jsonwebtoken'); // Import jsonwebtoken

// Signup Controller
exports.signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const newUser  = new User({ username, password });
        await newUser .save();
        res.status(201).json({ message: 'User  created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

// Login Controller
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};


//add hashing and jsonwebtoken


// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key'; // Replace with your own secret key

// Signup Controller
exports.signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser  = new User({ username, password: hashedPassword });
        await newUser .save();
        res.status(201).json({ message: 'User  created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

// Login Controller
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the hashed password with the provided password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in' });
    }
};
