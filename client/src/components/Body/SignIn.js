import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import apiurl from '../../environment';

export const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInStatus, setSignInStatus] = useState(true);
    const result = [];

    async function signInUser(event) {
        event.preventDefault();
        await fetch(`${apiurl}/api/user/signIn`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({ user_detail_email: email, user_detail_pw: password }),
        })
            .then(response => {
                if (response.status !== 201) {
                    return response.json()
                }
                return response.json()
            })
            .then(result => {
                if (result.token) {
                    props.updateToken(result.token)
                    setSignInStatus(true);
                    // history.push('/');
                    // window.location.reload(true);
                }
            })
            .catch(error => {
                console.log(error)
            });
    }


    return (
        <div>
            <h1>Sign In</h1>
            <Form onSubmit={signInUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required minLength={8} onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required minLength={8} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Sign In</Button>
            </Form>
            <div>
                {signInStatus ? <p>Sign In Please</p> : <h6>Sign In Failed</h6>}
            </div>
        </div>
    )
}

export default SignIn