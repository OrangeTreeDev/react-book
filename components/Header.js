/**
 * Created by hubery on 2017/3/13.
 */

var Header = React.createClass({
    propTypes:{
      name: React.PropTypes.string.isRequired
    },
    render: function(){
        return React.DOM.h1(null, 'my name is ' + this.props.name);
    }
});