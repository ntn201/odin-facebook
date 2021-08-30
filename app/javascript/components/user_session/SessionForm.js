import React from 'react'
import "../stylesheets/UserSession.css"
import {TextField, Button, Link, Checkbox, FormControlLabel} from '@material-ui/core'
import 'bootstrap';

export default class Form extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <form className="d-flex flex-column login-form align-items-center" action="sign_in" method="POST">
                <TextField type="hidden" name='authenticity_token' defaultValue={this.props.authenticity_token}></TextField>
                <TextField name="user[email]" label="Email" className="m-2 pt-4 w-75"/>
                <TextField name="user[password]" type="password" label="Password" className="m-2 pt-4 w-75"/>
                <Button type="submit" variant="contained" color="primary" className="col-3 m-4">login</Button>
                <div className="d-flex flex-row justify-content-between align-items-center w-75">
                    <FormControlLabel
                        value="remember_me"
                        control={<Checkbox color="primary" />}
                        label="Remember Me"
                        labelPlacement="start"
                    />
                    <Link href="/users/sign_up">Sign Up</Link>
                </div>
            </form>
        )
    }
}