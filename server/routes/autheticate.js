const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");

const JWT = require("../util/security");


//sign up

router.post('/signup', async (req, res) => {

    const user_details = req.body

    try {
        //find users in database -- break if email exists
        
        //create new user 

        //return token

    } catch (error) {
        console.log(error);
        res.status(500).send('Server has an error. ' + error)
    }

});





//sign in








