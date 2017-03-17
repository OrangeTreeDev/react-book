/**
 * Created by hubery on 2017/3/17.
 */

import React, {Component, PropTypes} from 'react';
import ClassName from 'classname'

class Button extends Component{

    constructor(props){
        super(props);
    }

    render(){
        var className = ClassName('Button', this.props.className);
        return (<button className={className}>{this.props.txt}</button>);
    }
}

Button.propTypes ={
    txt : PropTypes.string
}

Button.defaultProps ={
    text : ''
}

export default Button;
