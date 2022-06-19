import React from 'react';
import NewTask from './NewTask';
import ShowAllTasks from './ShowAllTasks'
import { useEffect, useState } from 'react'
import apiurl from '../../environment';

function TaskBody(props) {

    const [tasks, setTasks] = useState('');

    useEffect(() => {

        async function getAllTasks(e) {
            fetch(`${apiurl}/api/tasks`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
                .then(response => response.json())
                .then(tasks => setTasks(tasks.data))
                .catch(error => console.log('error', error));
        }
        getAllTasks();
    }, [])

    return (
        <div>
            <h1>Tasks</h1>
            {
                props.tasks !== '' ?
                    <div>
                        <h4> All Things to Do</h4>
                        <ShowAllTasks token={props.token} tasks={tasks} />
                        <h4> Add New things to do</h4>
                        <NewTask token={props.token} />
                    </div> : null
            }
        </div>
    )
}

export default TaskBody