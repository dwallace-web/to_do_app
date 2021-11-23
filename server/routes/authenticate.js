const router = require("express").Router();
// const router = express.Router()
const database = require("../database");
const bycrypt = require("bcrypt");
const JWT = require("../util/security");

//sign up

router.post('/signup', async (req, res) => {
    // console.log('test')

    const { user_detail_email, user_detail_pw } = req.body

    try {
        console.log([user_detail_email, user_detail_pw])
        console.log('test')

        //find users in database -- break if email exists
        const user = await database.query("SELECT * FROM users WHERE user_email = $1", [user_detail_email])
        console.log(user)

        if (user.rows[0] > 0) {
            res.status(400).send('this user exists already. login instead')
        } else {
            console.log([user_detail_email, user_detail_pw])

            let saltRounds = 12;
            let salt = await bycrypt.genSalt(saltRounds)
            let brcryptPassword = await bycrypt.hash(user_detail_pw, salt)


            let newUser = await database.query("INSERT INTO users (user_email, user_pw) VALUES($1, $2) RETURNING *",
                [user_detail_email, brcryptPassword]);

            const localToken = JWT(newUser.rows[0].user_id)

            res.status(201).json({
                status: "Success",
                data: {
                    input: {
                        email: newUser.rows[0].user_email,
                        id: newUser.rows[0].user_id
                    },
                    token: localToken
                }
            });
        }

        //return token

    } catch (error) {
        console.log(error);
        res.status(500).send('Server has an error. ' + error)
    }

});





//sign in








module.exports = router;