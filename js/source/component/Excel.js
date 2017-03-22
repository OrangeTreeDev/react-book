/**
 * Created by hubery on 2017/3/20.
 */

import React from 'react';
import Actions from './Actions'
import Dialog from './Dialog'
import Rating from './Rating'
import Suggest from './Suggest'
import grapes from '../graps'

class Excel extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            actionType: 'none',
            selectedRowIdx: -1,
            comments : this.props.datas
        }
    }

    _handleActions(rowIdx, type){

        switch (type){
            case 'info':
                this.setState({
                    actionType : 'info',
                    selectedRowIdx : rowIdx
                });
                break;
            case 'edit':
                this.setState({
                    actionType : 'edit',
                    selectedRowIdx : rowIdx
                });
                break;
            case 'delete':
                this.setState({
                    actionType : 'delete',
                    selectedRowIdx : rowIdx
                });
                break;
        }
    }

    _sureEdit(){

        var datas = Array.from( this.state.comments);

        var newData = {};
        Object.keys(this.props.schema).forEach( function(fieldKey, idx ){

            var fieldType = this.props.schema[fieldKey].fieldType;
            if ( fieldType == 'string' || fieldType == 'number') {
                newData[fieldKey] = this.refs[fieldKey].value;
            }else {
                newData[fieldKey] = this.refs[fieldKey].getValue();
            }
        }.bind(this) );
        datas[ this.state.selectedRowIdx] = newData;
        this.setState({
            actionType: 'none',
            selectedRowIdx: -1,
            comments: datas
        });
    }

    _genDialog(){

        let dialog ='';
        switch (this.state.actionType){
            case 'info':
                var selectedData = this.props.datas[ this.state.selectedRowIdx];

                dialog =  <Dialog head="Item info" confirmTxt="ok"
                                  sureAction={  () => {
                                  this.setState( { actionType : 'none',selectedRowIdx: -1 } );
                                  } } >
                    {
                        Object.keys( this.props.schema ).map( function(filedKey, idx){

                            return (
                                <div key={idx} className="item-info">
                                    <label>{this.props.schema[ filedKey ].displayName}:</label>
                                    {
                                        this.props.schema[ filedKey ].fieldType == 'rating' ?
                                            <Rating defaultValue ={selectedData[filedKey]}></Rating> : <p>{selectedData[filedKey]}</p>
                                    }
                                </div>
                            );
                        }.bind(this) )
                    }
                </Dialog> ;

                break;
            case 'edit':

                var selectedData = this.props.datas[ this.state.selectedRowIdx];

                dialog = <Dialog head="Edit item" allowCancel={true} confirmTxt="ok"
                                 cancelAction ={ () => {
                                 this.setState( {actionType: 'none', selectedRowIdx: -1} );
                                 }}
                                 sureAction = {this._sureEdit.bind(this)}>
                    {
                        Object.keys(this.props.schema).map( function(fieldKey, idx){

                            var formInput ='';
                            var fieldType = this.props.schema[ fieldKey ].fieldType;
                            if (fieldType == 'string'){

                                formInput = <input ref={fieldKey} type="text" defaultValue={ selectedData[fieldKey] }/>
                            }else if (fieldType=='number'){

                                formInput = <input ref={fieldKey} type="number" defaultValue={ selectedData[fieldKey] }/>
                            }else if (fieldType=='suggest'){

                                formInput = <Suggest ref={fieldKey} listId={'grapeList'} lists={grapes} defaultGrape={ selectedData[fieldKey] }></Suggest>
                            }else if (fieldType=='rating'){

                                formInput = <Rating ref={fieldKey} defaultValue={ selectedData[fieldKey] } allowEdit={true}></Rating>
                            }

                            return (
                                <div key={idx} className="item-edit">
                                    <label>{this.props.schema[ fieldKey ].displayName}</label>
                                    { formInput }
                                </div>
                            );
                        }.bind(this))
                    }
                </Dialog>;

                break;
            case 'delete':
                dialog = <Dialog head="Confirm deletion" allowCancel={true} confirmTxt="ok"
                                 cancelAction ={ () => {
                                 this.setState( {actionType: 'none', selectedRowIdx: -1} );
                                 }}
                                 sureAction = { () => {
                                 this.setState({actionType: 'none', selectedRowIdx: -1});
                                 }}>
                    <span>are you sure to delete the item ?</span>
                </Dialog>;

                break;
            case 'none':
                dialog ='';
                break;
        }

        return dialog;
    }

    render(){

        // 判断dialog的显示状态
       //let dialog = ;

        var fieldKeys = Object.keys(this.props.schema);
        return (
            <div className="Excel">
                <table>
                    <thead>
                    <tr>
                        {
                            fieldKeys.map( function(key, idx){
                                return <th key={idx}><span>{this.props.schema[key].displayName}</span></th>
                            }.bind(this) )
                        }
                        <th><span>action</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.comments.map( function(elem, rowIdx){
                            return (<tr key={rowIdx}>
                                {
                                    fieldKeys.map( function(key, idx){
                                        if (this.props.schema[key].fieldType == 'rating'){
                                            return <td key={idx}><Rating defaultValue={elem[key]}></Rating></td>;
                                        }else{
                                            return <td key={idx}><span>{ elem[key] }</span></td>;
                                        }
                                    }.bind(this) )
                                }
                                <td> <Actions action={ this._handleActions.bind(this, rowIdx) }></Actions> </td>
                            </tr>);
                        }.bind(this) )
                    }
                    </tbody>
                </table>
                {
                    this._genDialog()
                }
            </div>
        );
    }
}

Excel.propTypes ={
    schema : React.PropTypes.objectOf(
        React.PropTypes.shape({
            displayName : React.PropTypes.string,
            fieldType : React.PropTypes.string
            })
    ),
    datas : React.PropTypes.arrayOf(
        React.PropTypes.shape({
            field_name : React.PropTypes.string,
            field_year: React.PropTypes.number,
            field_grape: React.PropTypes.string,
            field_rating: React.PropTypes.number
        })
    )
}

Excel.defaultProps ={
    schema : {},
    datas: []
}

export default Excel;