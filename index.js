const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwtAuth = require('./jwtAuth');
const User = require('./userModel');
const connectToMongoDB = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

connectToMongoDB();

// Signup endpoint
app.post('/signup', async (req, res) => {
    const { username, password, status } = req.body;
  
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = new User({ username, password, status });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
        const user = await User.findOne({ username, password });
  
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
  
        const token = jwtAuth.generateToken({ username });

        res.status(200).json({
            message:"LoggedIn Success",
            "token":token
        });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Users endpoint
app.get('/users', jwtAuth.authenticateToken, async (req, res) => {
    const { createdAt, status } = req.query;
    try {
        let query = {};
        if (createdAt) {
            // Filter documents where the 'createdAt' field is greater than or equal to the specified date.
            query.createdAt = { $gte: new Date(createdAt) };
        }
        if (status) {
            // Filter for the 'status' field based on the provided value
            query.status = status;
        }
        const users = await User.find(query);
        res.status(200).json(users);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Protected route for testing authentication
app.get('/protected', jwtAuth.authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Protected route accessed successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});