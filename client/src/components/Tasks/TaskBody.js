import React from 'react';
import NewTask from './NewTask';
import ShowAllTasks from './ShowAllTasks'

function TaskBody(props) {
    return (
        <div>
            <h1>Task Body</h1>
            <NewTask token={props.token} />
            {/* {
                props.token !== null ? <ShowAllTasks token={props.token} /> : null
            } */}

        </div>
    )
}

export default TaskBody
