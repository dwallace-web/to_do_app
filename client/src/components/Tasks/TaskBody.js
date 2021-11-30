import React, { Component } from 'react';
import NewTask from './NewTask';
import ShowAllTasks from './ShowAllTasks'

export class TaskBody extends Component {
    render() {
        return (
            <div>
            <h1>Task Body</h1>
                <NewTask />
                <ShowAllTasks />
            </div>
        )
    }
}

export default TaskBody
