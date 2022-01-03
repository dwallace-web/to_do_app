const router = require("express").Router();
const database = require("../database");
// salt and hash password
const bcrypt = require("bcrypt");
// generate the toke
const JWT = require("../util/security");
// check that the token is valid
const authorize = require("../util/authorize");
// check that user submitted data
const QA = require("../util/qauser");

//sign up
router.post('/signup', QA, async (req, res) => {
    const { user_detail_email, user_detail_pw } = req.body
    try {
        const user = await database.query("SELECT * FROM users WHERE user_email = $1", [user_detail_email])
        // console.log(user.rows[0])
        if (user.rows.length > 0) {
            res.status(400).send('This user exists already. login instead')
        } else {
            let saltRounds = 12;
            let salt = await bcrypt.genSalt(saltRounds)
            let brcryptPassword = await bcrypt.hash(user_detail_pw, salt)
            let newUser = await database.query("INSERT INTO users (user_email, user_pw) VALUES($1, $2) RETURNING *",
                [user_detail_email, brcryptPassword]);
            const localToken = JWT(newUser.rows[0].user_id)
            res.status(201).json({
                status: "Sign Up Successful",
                token: localToken
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Server has an error. ' + error)
    }
});

//sign in
router.post('/signin', QA, async (req, res) => {
    const { user_detail_email, user_detail_pw } = req.body
    try {
        const user = await database.query("SELECT * FROM users WHERE user_email = $1", [user_detail_email])
        // console.log(user)
        if (user.rows == 0) {
            return res.status(500).json({
                message: "The the email or password does not match. Try again. "
            })
        }
        let checkPW = await bcrypt.compare(user_detail_pw, user.rows[0].user_pw);
        if (checkPW) {
            console.log('pw matches')
            const token = JWT(user.rows[0].user_id)
            console.log(token)
            return res.status(200).json({
                message: "Password matches. Welcome back",
                token: token
            })
        } else {
            console.log('bad password')
            return res.status(401).json("Password does not match")
        }
    } catch (error) {
        res.status(500).send("Something isn't right here. Error")
    }
})

//check that the token is valid with authorize.js
// provide the userId back in the token
router.get('/verified', authorize, async (req, res) => {
    console.log('authorize passed')   
    try {
        console.log({ "authenticate": res.user })
         res.status(200).send({ "token": true })
    } catch (error) {
        res.status(500).send
            ({
                "token": false,
                "message": "Sign Up or Sign In to Continue"
            })
    }
})

module.exports = router;