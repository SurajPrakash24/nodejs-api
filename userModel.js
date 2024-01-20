const mongoose = require('mongoose');

// user statuses
const UserStatus = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
    PENDING: 'pending',
    BLOCKED: 'blocked',
};

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    status: {
        type: String,
        enum: Object.values(UserStatus),
        default: UserStatus.PENDING,
    },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;