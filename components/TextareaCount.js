/**
 * Created by hubery on 2017/3/13.
 */

var TextareaCount = React.createClass({
    propTypes: {
        text : React.PropTypes.string
    },
    getDefaultProps: function (){
        console.log('default props');
        return {
          text : ''
        };
    },
    getInitialState: function(){
        return {
            count : this.props.text.length,
            text: this.props.text
        }
    },
    componentWillReceiveProps: function( newProps ){
        if
        console.log('receive props',newProps);
    },
    componentWillUpdate: function(){
        console.log( 'component will update' );
    },
    componentDidUpdate: function(){
        console.log(' component did update ');
    },
    componentWillMount: function(){
        console.log('component will mount');
        console.log(this.props);
    },
    componentDidMount: function(){
      console.log('component did mount');
        console.log(this.props);

    },
    _textChange : function(event){
        this.setState({
           count: event.target.value.length
        });
    },
    render: function(){
        return React.DOM.div(null, React.DOM.textarea({
            defaultValue : this.props.text,
            onChange : this._textChange
        }),
        React.DOM.span( null, this.state.count));
    }
});