/**
 * Created by hubery on 2017/3/16.
 */

import React from 'react';

class Logo extends React.Component{

    render(){
        return (
            <div className="Logo">
                <img src={this.props.src}/>
                <span>{this.props.title}</span>
            </div>);
    }
}

Logo.propTypes ={
    src : React.PropTypes.string,
    title: React.PropTypes.string
}

Logo.defaultProps = {
    src: 'images/logo.svg',
    title: 'React World'
}

export default Logo;