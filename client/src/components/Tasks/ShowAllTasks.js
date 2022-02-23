import React, { useEffect } from 'react'
import apiurl from '../../environment';
import UniqueTask from './UniqueTask';


export default function ShowAllTasks(props) {
    const [theTasks, setTheTasks] = [];

    useEffect(() => {

        async function showTasks(e) {
            fetch(`${apiurl}/api/tasks`, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            })
                .then(response => response.json())
                .then(tasks => setTheTasks(tasks))
                .catch(error => console.log('error', error));

        }


        showTasks();
    }, [])




    return (
        <div>
            {theTasks.map(task => {
                <UniqueTask key={task.id} token={props.token} />
            })}

        </div>
    )
}
