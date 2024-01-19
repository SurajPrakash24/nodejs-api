const express = require('express');
const bodyParser = require('body-parser');
const jwtAuth = require('./jwtAuth');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const users = [];

// Signup endpoint
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    
    // Check if the user already exists
    if (users.some(user => user.username === username)) {
        return res.status(400).json({ error: 'User already exists' });
    }
    // Create user
    users.push({ username, password });
    res.status(201).json({ message: 'User created successfully' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwtAuth.generateToken({ username });
    res.status(200).json({
        message:"LoggedIn Success",
        "token":token
    });
});

// Protected route for testing authentication
app.get('/protected', jwtAuth.authenticateToken, (req, res) => {
    res.status(200).json({ message: 'Protected route accessed successfully' });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
