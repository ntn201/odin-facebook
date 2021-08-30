import React from 'react'
import "../stylesheets/UserSession.css"
import {TextField, Button, Link, MenuItem} from '@material-ui/core'
import 'bootstrap';

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <form className="d-flex flex-column registration-form align-items-center" action="/users" method="POST">
                <TextField type="hidden" name='authenticity_token' defaultValue={this.props.authenticity_token}/>
                <TextField name="user[email]" label="Email" className="m-2 pt-4 w-75"/>
                <TextField name="user[full_name]" type="text" label="Full Name" className="m-2 pt-4 w-75"/>
                <TextField name="user[age]" type="number" label="Age" className="m-2 pt-4 w-75"/>
                <TextField name="user[gender]" label="Gender" className="m-2 pt-4 w-75" select>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                </TextField>
                <TextField name="user[password]" type="password" label="Password" className="m-2 pt-4 w-75"/>
                <TextField name="user[password_confirmation]" type="password" label="Password Confirmation" className="m-2 pt-4 w-75"/>
                <Button type="submit" name="commit" value="Sign up"variant="contained" color="primary" className="col-3 m-4">Sign Up</Button>
                <div className="d-flex flex-row justify-content-between w-75">
                    <p>Already have an account?</p>
                    <Link href="/users/sign_in">Sign In</Link>
                </div>
            </form>
        )
    }
}