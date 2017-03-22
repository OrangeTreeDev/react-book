/**
 * Created by hubery on 2017/3/16.
 */

import React from 'react'

class Rating extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            ratingCount : this.props.defaultValue,
            tempRatingCount : this.props.defaultValue
        };
        this._handleMouseout = this._handleMouseout.bind(this);
    }

    getValue(){
        return this.state.ratingCount;
    }

    componentWillReceiveProps(nextProps){
        if (this.state.ratingCount != nextProps.defaultValue ){
            this.setState({
                tempRatingCount:  nextProps.defaultValue,
                ratingCount: nextProps.defaultValue
            });
        }

    }

    _handleMouseover(currentIdx, e){

        this.setState({
            tempRatingCount: currentIdx
        });
    }

    _handleMouseout(e){
        this.setState({
            tempRatingCount: this.state.ratingCount
        });
    }

    _handleClick(currentIdx,e){
        this.setState({
            ratingCount: currentIdx,
            tempRatingCount: currentIdx
        });
    }

    render(){
        let stars = [];
        for(let i=0;i< this.props.maxValue; i++){
            var spanRating = <span
                key={i} className={ i < this.state.tempRatingCount ? 'ratingOn': null}
                onMouseOver={this._handleMouseover.bind(this, i+1)}
                onClick = {this._handleClick.bind(this, i+1)}
            >&#9734;</span>
            stars.push(spanRating);
        }

        return (
            <div className="rating" onMouseOut={this._handleMouseout} style={ this.props.allowEdit? {pointerEvents:'auto'}:{pointerEvents:'none'} }>
                {stars}
            </div>
        );
    }
}

Rating.propTypes = {
    defaultValue : React.PropTypes.number,
    maxValue: React.PropTypes.number,
    allowEdit: React.PropTypes.bool
}

Rating.defaultProps = {
    defaultValue: 0,
    maxValue: 5,
    allowEdit: false
}

export default Rating;