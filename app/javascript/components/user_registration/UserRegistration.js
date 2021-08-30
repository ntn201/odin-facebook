import React from 'react'
import "../stylesheets/UserRegistration.css"

import ResgistrationForm from "./RegistrationForm"
import ErrorField from '../share/ErrorField'

export default class UserRegistration extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="user-registration d-flex flex-column align-items-center justify-content-center">
                <h1>Create An Account</h1>
                <ResgistrationForm authenticity_token={this.props.authenticity_token}/>
                <ErrorField error={this.props.error}/>
            </div>
        )
    }
}