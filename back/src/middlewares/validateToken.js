const jwt = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.SECRET_KEY;

function validateToken (req, res, next) {
    const userToken = req.headers.authorization;
    if(!userToken) {
        return res.status(401).json({error: "No se proporcionó ningún token"});
    }

    jwt.verify(userToken, secretKey, (err, _data) => {
        if (err) {
            return res.status(403).json({error: "Token inválido o ya está vencido. Intentalo nuevamente"});
        }
        next();
    });
}

module.exports = validateToken;