const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.SECRET_KEY;

// Generate JWT token
function generateToken(payload) {
    return jwt.sign(payload, secretKey, { expiresIn: '15m' });
}

// Middleware to authenticate JWT token
function authenticateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: Token Missing' });
    }

    jwt.verify(token.split(' ')[1], secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden: Invalid Token' });
        }

        req.user = user;
        next();
    });
}

module.exports = {
    generateToken,
    authenticateToken,
};
