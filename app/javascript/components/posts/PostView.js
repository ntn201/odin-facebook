import React from 'react'

import Nav from "../share/Nav"
import PostIndex from './PostIndex'

export default class PostView extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Nav user_id={this.props.user_id} authenticity_token={this.props.authenticity_token}/>
                <div>
                    <PostIndex authenticity_token={this.props.authenticity_token}/>
                </div>
            </div>
        )
    }
}