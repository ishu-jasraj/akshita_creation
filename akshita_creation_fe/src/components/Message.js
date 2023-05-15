import React, {Component} from 'react';

class Message extends Component{
    constructor(){
        super();
        this.state = {
            message : 'Welcome visitor',
            button : 'Subscribe'
        }
    }

    ChangeMessage()
    {
        this.setState({
            message: 'Thankyou for subscribing our page'
        })
    }

    render(){
        return(
            <div>
            <h3>{this.state.message}</h3>
            <button onClick={()=>this.ChangeMessage()}>{this.state.button}</button>
            </div>
        )
    }
}

export default Message