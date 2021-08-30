import React from 'react'

export default class Post extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div>
                <h3>{this.props.caption}</h3>
                <p>{this.props.body}</p>
            </div>
        )
    }
}
