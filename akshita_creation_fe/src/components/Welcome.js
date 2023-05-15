import React, {Component} from 'react'

class Welcome extends Component{
    render(props)
    {
        console.log("props----",props);
       return  React.createElement('div',null,'Hello Ishu');
    }
}

export default Welcome