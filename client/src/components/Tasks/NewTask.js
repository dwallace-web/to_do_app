import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

function NewTask() {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>What do you need to do?</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit">Add Task</Button>
            </Form>
        </div>
    )
}

export default NewTask
