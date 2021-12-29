const router = require("express").Router();
const database = require("../database");

router.post("/api/tasks", async (req, res) => {
    
    try {
        const { description } = req.body;
        const { headers } = req.headers;

        console.log('headers', headers);

        const newTask = await database.query(
            "INSERT INTO tasks (description) VALUES($1) RETURNING *",
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

//get all tasks

router.get("/api/tasks", async (req, res) => {
    try {
        const allTasks = await database.query("SELECT * FROM tasks");
        res.status(201).json({
            data: allTasks.rows
        });

    } catch (err) {
        console.error(err.message);
    }
});

//get a specific task
router.get("/api/tasks/:id", async (req, res) => {
    console.log(req.params)

    task_id = req.params.id;

    try {
        const thisTask = await database.query("SELECT * FROM tasks WHERE task_id = $1", [task_id]);
        res.status(201).json({
            data: thisTask.rows[0].description
        });
    } catch (err) {
        console.error(err.message);
    }

})


router.put("/api/tasks/:id", async (req, res) => {
    console.log(req.params)

    task_id = req.params.id;
    task_description = req.body.description

    console.log(task_description)
    try {
        const this_task = await database.query("UPDATE task SET description = $1 WHERE task_id = $2",
            [task_description, task_id]
        );

        res.status(201).json({
            data: `Task # ${task_id}, was updated to ${task_description}`
        });
    } catch (err) {
        console.error(err.message);
    }

})

router.delete("/api/tasks/:id", async (req, res) => {
    console.log(req.params)

    task_id = req.params.id;
    task_description = req.body.description

    console.log(task_description)
    try {
        const this_task = await database.query("DELETE FROM tasks WHERE task_id = $1",
            [task_id]
        );

        res.status(201).json({
            data: `Task ${task_description} was deleted.`
        });
    } catch (err) {
        console.error(err.message);
    }

})


module.exports = router;