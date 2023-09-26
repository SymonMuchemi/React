import {Component} from 'react'

class Message extends Component{
    render(){
        return (
            <>
                <h1>Message </h1>
                <p>{this.props.messageContent}</p>
            </>
        )
    }
}

export default Message
