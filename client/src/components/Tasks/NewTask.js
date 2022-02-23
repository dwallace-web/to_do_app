import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import apiurl from '../../environment';

export default function NewTask(props) {

    const [description, setDescription] = useState('');
    const [taskCreated, setTaskCreated] = useState(false);
    const result = []

    async function newTask(e) {
        e.preventDefault();

        fetch(`${apiurl}/api/tasks`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            }),
            body: JSON.stringify({
                description: description
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setTaskCreated(true);
            })
            .catch(error => console.log('error', error));

    }

    return (
        <div>

            {
                taskCreated === true ? <>{result}</> :
                    <Form onSubmit={newTask}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>What do you need to do?</Form.Label>
                            <Form.Control onChange={(e) => setDescription(e.target.value)} rows={3} />
                        </Form.Group>
                        <Button type="submit">Add Task</Button>
                    </Form>
            }

        </div>
    )
}
