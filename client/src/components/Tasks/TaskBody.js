import React, { Component } from 'react';
import NewTask from './NewTask';
import ShowAllTasks from './ShowAllTasks'

function TaskBody() {
    return (
        <div>
            <h1>Task Body</h1>
            <NewTask />
            <ShowAllTasks />
        </div>
    )
}

export default TaskBody
