/**
 * Created by hubery on 2017/3/20.
 */

import React from 'react';
import Button from './Button'
import Rating from './Rating'

class Dialog extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="Dialog">
                <div className="dialog-entity">
                    <div className="dialog-head">{ this.props.head }</div>
                    <div className="dialog-content">{ this.props.children }</div>
                    <div className="dialog-footer">
                        {
                            this.props.allowCancel ? <a className="action-cancel" onClick={this.props.cancelAction.bind(null)}>Cancel</a> : ''
                        }
                        <Button className="action-confirm" onClick={this.props.sureAction}>{this.props.confirmTxt}</Button>
                    </div>
                </div>
            </div>
        );
    }
}

Dialog.defaultProps = {
    head : '',
    allowCancel: false,
    confirmTxt: 'ok',
    cancelAction: () => {},
    sureAction: () => {}
}

Dialog.propTypes = {
    head: React.PropTypes.string,
    allowCancel: React.PropTypes.bool,
    confirmTxt: React.PropTypes.string,
    cancelAction: React.PropTypes.func,
    sureAction: React.PropTypes.func
}


export default Dialog;