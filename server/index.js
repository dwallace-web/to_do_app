const express = require('express');
const app = express();
const cors = require('cors');
const env = require('dotenv').config();
const pool = require('./database');

//middleware for headers
app.use(cors());

//confirm and allow access to req.body
app.use(express.json())

//routes

//get all todos

//get specific todo

//create todo
app.post('/todos', async (req, res) => {
    try {
        // res.json(req.body);

        const { description } = req.body;
        const newTodo = await pool.query(
            'INSERT INTO todo (description) VALUES($1) RETURNING *',
            [description]
        );

        res.json(newTodo);

    } catch (err) {
        console.error(err.message)
    }
})

//edit todo

//delete todo



app.listen(4000, () => {
    console.log('server is starting on 4000');
})