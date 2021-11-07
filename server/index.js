require('dotenv').config();
const express = require('express');
const cors = require('cors');
const database = require('./database');
const app = express();

const morgan = require('morgan');

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//routes

app.post("/test/todos", (req, res) => {
    console.log(req.body)

    res.status(201).json({
        status: "sucess",
    })
})

app.get("/test/todos/:id", (req, res) => {
    console.log(req.params)

    res.json({
        status: "success",
    })

})

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        console.log(description)


        const newTodo = await database.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        console.log(newTodo)


        res.status(201).json({
            status: "Success",
            data: {
                input: newTodo.rows[0],
                "null": "null"
            }
        });
        // res.json(newTodo.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

app.get("/todos", async (req, res) => {
    try {
        const allTodos = await database.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//edit todo

//delete todo



app.listen(process.env.PORT, () => {
    console.log(`server is live on ${process.env.PORT}`);
})