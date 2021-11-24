const security = require("./security")
const jwt = require("jsonwebtoken")
require("dotenv");

module.exports = async (req, res, next) => {

    const userToken = req.header("token");
    console.log(userToken)
    try {
        // if the usern't doesn't have a token stop here
        if (!userToken) {
            return res.status(400).json("You don't have permissions for this action. V1")
        } else {
            const payload = await jwt.verify(userToken, process.env.JWT)
            console.log(payload)
            res.user = payload
            next()
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json("You don't have permission for that! V2")
    }
}