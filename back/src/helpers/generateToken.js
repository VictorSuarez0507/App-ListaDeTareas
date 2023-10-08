const jwt = require('jsonwebtoken');
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;
const usersModels = require("../models/usersModels");

const generateToken = () => {
    const payload =  Date.now();
    const token = jwt.sign({payload}, secretKey, { expiresIn: '1h' });
    return token
    
}

module.exports = generateToken;