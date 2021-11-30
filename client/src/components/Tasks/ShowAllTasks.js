import React, { Component } from 'react'
import UniqueTask from './UniqueTask';

export class ShowAllTasks extends Component {
    render() {
        return (
            <div>
                <h2>Show All Tasks</h2>
                <UniqueTask />
            </div>
        )
    }
}

export default ShowAllTasks
