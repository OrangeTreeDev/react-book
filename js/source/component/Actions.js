/**
 * Created by hubery on 2017/3/20.
 */

import React from 'react';

class Actions extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="Actions">
                <span className="action-info" onClick={ this.props.action.bind(null,'info') }>&#8505;</span>
                <span className="action-edit" onClick={ this.props.action.bind(null, 'edit') }>&#10000;</span>
                <span className="action-delete" onClick={ this.props.action.bind(null, 'delete') }>x</span>
            </div>
        );
    }
}

Actions.propTypes ={
    action: React.PropTypes.func
}

Actions.defaultProps ={
    action: () => {}
}

export default Actions;
