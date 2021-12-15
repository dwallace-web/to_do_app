import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
            <Button>Sign Up</Button>
            <Form>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                    />
                </FormGroup>
                <Button onClick={signUp}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignUp
