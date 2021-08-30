import { TextField, Button } from '@material-ui/core'
import React from 'react'


export default class PostForm extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <form action="posts" method="post" className="d-flex flex-column w-50 m-5">
                <TextField placeholder="Want to share anything?" name="post[caption]" className="p-2 m-2"/>
                <TextField placeholder="Tell your friends more about it." variant="outlined" className="p-2 m-2" name="post[body]"/>
                <TextField type="hidden" name="authenticity_token" defaultValue={this.props.authenticity_token}/>
                <Button type="submit" variant="contained" color="primary" className="col-2 align-self-end mx-3">Post</Button>
            </form>
        )
    }
}