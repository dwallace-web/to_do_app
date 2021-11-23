// this will export and generate the JWT web token 
require('dotenv').config();
const token = require("jsonwebtoken")

genToken = (userId) => {
    const payload = {
        user: {
            id: userId
        }
    };
    return token.sign(payload, "justademotoken", { expiresIn: '24h' })
}


module.exports = genToken;