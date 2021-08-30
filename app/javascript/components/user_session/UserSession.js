import React from 'react'
import "../stylesheets/UserSession.css"

import SessionForm from "./SessionForm"
import ErrorField from '../share/ErrorField'

export default class UserSession extends React.Component {
    constructor(props){
        super(props)
    }
    render (){
        return(
            <div className="user-session d-flex flex-column justify-content-center align-items-center">
                <h1>Login</h1>
                <SessionForm authenticity_token={this.props.authenticity_token}/>
                <ErrorField error={this.props.error} />
            </div>
        )
    }
}

