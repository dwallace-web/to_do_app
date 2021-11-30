import React, { Component } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'



export class Menu extends Component {
    render() {
        return (
            <div>
                <h1>Menu</h1>
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

export default Menu
