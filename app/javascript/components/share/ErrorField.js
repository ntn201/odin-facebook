import React from 'react'

export default class ErrorField extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <p className="text-danger m-5">{this.props.error}</p>
            </div>
        )
    }
}