/**
 * Created by hubery on 2017/3/20.
 */

import React from 'react';

class Suggest extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            value: this.props.defaultGrape
        };
    }

    getValue(){
        return this.state.value;
    }

    render(){
        return (
            <div className="Suggest">
                <input list={this.props.listId} defaultValue={this.props.defaultGrape} onChange={ (e) => { this.setState({value:e.target.value}) } }/>
                <datalist id={this.props.listId}>
                    { this.props.lists.map( function(item, idx){
                        return <option value={item} key={idx}></option>
                    })}
                </datalist>
            </div>
        );
    }
}

Suggest.defaultProps ={
    lists: [],
    listId : '',
    defaultGrape: ''
}

Suggest.propTypes ={
    lists: React.PropTypes.arrayOf(
        React.PropTypes.string
    ),
    listId : React.PropTypes.string.isRequired,
    defaultGrape: React.PropTypes.string
}

export default Suggest;