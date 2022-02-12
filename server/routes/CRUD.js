const router = require("express").Router();
const database = require("../database");
const authorize = require("../util/authorize");

//get all user tasks
router.get("/api/tasks/", authorize, async (req, res) => {
    // console.log(req.params)
    // task_id = req.params.id;

    const task_owner = res.user;
    console.log("user", task_owner)

    try {

        const thisTask = await database.query("SELECT * FROM tasks WHERE task_owner = $1", [task_owner]);
        res.status(201).json({
            data: thisTask.rows
        });
    } catch (err) {
        console.error(err.message);
    }
})

//get a specific task
router.get("/api/tasks/:id", authorize, async (req, res) => {
    console.log(req.params)
    task_id = req.params.id;

    const task_owner = res.user;
    console.log("user", task_owner)

    try {

        const thisTask = await database.query("SELECT * FROM tasks WHERE task_id = $1", [task_id]);
        console.log(thisTask.rowCount)
        if (thisTask.rowCount == 0) {
            res.status(404).json("Oops. Nothing Exists Here")
        } else {
            res.status(201).json({
                data: thisTask.rows[0]
            });
        }

    } catch (err) {
        console.error(err.message);
    }
})

router.post("/api/tasks", authorize, async (req, res) => {
    console.log('authorize passed')
    try {
        const { description } = req.body;
        console.log("description", description);

        const task_owner = res.user;
        console.log("user", task_owner)

        const newTask = await database.query("INSERT INTO tasks (description, task_owner) VALUES($1, $2) RETURNING *", [description, task_owner]);

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



router.put("/api/tasks/:id", authorize, async (req, res) => {
    console.log(req.params)

    task_id = req.params.id;
    task_description = req.body.description
    console.log(task_description)

    const task_owner = res.user;
    console.log("user", task_owner)

    try {
        const this_task = await database.query("UPDATE tasks SET description = $1 WHERE task_id = $2 AND task_owner = $3", [task_description, task_id, task_owner]);

        res.status(201).json({
            data: `Task ID# ${task_id}, was updated to ${task_description}`
        });
    } catch (err) {
        console.error(err.message);
    }

})

router.delete("/api/tasks/:id", authorize, async (req, res) => {
    console.log(req.params)

    task_id = req.params.id;
    task_description = req.body.description
    console.log(task_description)

    const task_owner = res.user;
    console.log("user", task_owner)

    try {
        const this_task = await database.query("DELETE FROM tasks WHERE task_id = $1 AND task_owner = $2", [task_id, task_owner]);

        res.status(201).json({
            data: `Task ID# ${task_id} -- ${task_description} was deleted.`
        });
    } catch (err) {
        console.error(err.message);
    }
})

//get all tasks
// router.get("/api/all-tasks", authorize, async (req, res) => {
//     try {
//         const allTasks = await database.query("SELECT * FROM tasks");
//         res.status(201).json({
//             data: allTasks.rows
//         });
//     } catch (err) {
//         console.error(err.message);
//     }
// });

module.exports = router;