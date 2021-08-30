import React from 'react'
import axios from 'axios';
import "../stylesheets/Nav.css"

import {Link, Button, Typography} from '@material-ui/core'

import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default class Nav extends React.Component{
    constructor(props){
        super(props)
        this.user_profile_path = this.user_profile_path.bind(this)
        this.sign_out_user = this.sign_out_user.bind(this)
    }

    sign_out_user(){
        axios.get("/users/sign_out", 
                { params :{authenticity_token: this.props.authenticity_token}} ).then(()=>{
                    window.location.href = "/"
                }).catch(error => {
                    console.log( error );
                });
    }

    user_profile_path(){
        return ("/users/" + this.props.user_id)
    }

    render(){
        return (
            <div className="d-flex flex-row align-items-center justify-content-between w-100 px-5 py-3 nav">
                <HomeIcon fontSize="large" className="icon-home"/>
                <Typography variant="h4" component="p">
                    Odin-Facebook
                </Typography>
                <div className="d-flex-inline flex-row align-items-center">
                    <Link href={this.user_profile_path()} className="m-3">
                        <AccountBoxIcon fontSize="large" className="icon-user"/>
                    </Link>
                    
                    <Button onClick={this.sign_out_user} className="m-3">
                        <ExitToAppIcon fontSize="large" className="icon-sign-out"/>
                    </Button>
        
                </div>
            </div>
        )
    }
}