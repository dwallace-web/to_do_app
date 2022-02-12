import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <Button type="submit">Log out</Button>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Menu

