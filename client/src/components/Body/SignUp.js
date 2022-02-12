import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userTokenStatus, setUserTokenStatus] = useState(false)

    async function signUp(event) {
        event.preventDefault();
        await fetch(`${process.env.API_URL}/api/user/signup`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ user_detail_email: email, user_detail_pw: password }),
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setUserTokenStatus(true);
                console.log('sign up completed')
            })
            .catch(error => console.log('error', error));
    }


    return (
        <div>
            <h1>Sign Up</h1>


            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp
