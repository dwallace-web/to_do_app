// this will export and generate the JWT web token 
require('dotenv').config();
const token = require("jsonwebtoken")

genToken = (userId) => {
    const payload = {
        user: {
            id: userId
        }
    };
    return token.sign(payload, process.env.JWT, { expiresIn: '12h' })
}


module.exports = genToken;