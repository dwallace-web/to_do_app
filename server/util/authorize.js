const security = require("./security")
const jwt = require("jsonwebtoken")
require("dotenv");

module.exports = async (req, res, next) => {
    console.log('start authorize.js')
    console.log(req.headers.authorization)
    const userToken = req.header("Authorization");
    console.log('authorize==> ', userToken)

    try {
        // if the usern't doesn't have a token stop here
        if (!userToken) {
            return res.status(400).json("You don't have permissions for this action. We cannot validate your login information. Sign Up or Sign In to continue.")
        } else {
            const payload = await jwt.verify(userToken, process.env.JWT)
            console.log({ "authorize": payload.user.id })
            res.user = payload.user.id
            next()
        }

    } catch (error) {
        console.log("something is broken " + error)
        return res.status(400).json("It's been too long. Sign Up or Sign In to continue.")
    }
}