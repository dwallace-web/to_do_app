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




app.post("/api/tasks", async (req, res) => {
    try {
        const { description } = req.body;

        const newTask = await database.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.status(201).json({
            status: "Success",
            data: {
                input: newTask.rows[0]
            }
        });

    } catch (err) {
        console.error(err.message);
    }
});

//get all todos

app.get("/api/tasks", async (req, res) => {
    try {
        const allTasks = await database.query("SELECT * FROM todo");
        res.status(201).json({
            data: allTasks.rows
        });

    } catch (err) {
        console.error(err.message);
    }
});

//get a specific task
app.get("/api/tasks/:id", async (req, res) => {
    console.log(req.params)

    task_id = req.params.id;

    try {
        const thisTask = await database.query("SELECT * FROM todo WHERE todo_id = $1", [task_id]);
        res.status(201).json({
            data: thisTask.rows[0].description
        });
    } catch (err) {
        console.error(err.message);
    }

})

//edit todo

app.put("/api/tasks/:id", async (req, res) => {
    console.log(req.params)

    task_id = req.params.id;
    task_description = req.body.description

    console.log(task_description)
    try {
        const this_task = await database.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
            [task_description, task_id]
        );

        res.status(201).json({
            data: `Task # ${task_id}, was updated to ${task_description}`
        });
    } catch (err) {
        console.error(err.message);
    }

})
//delete todo



app.listen(process.env.PORT, () => {
    console.log(`server is live on ${process.env.PORT}`);
})