/**
 * Created by hubery on 2017/3/13.
 */

var EventDelegate = React.createClass({
    _click: function(event){
      console.log(event.target.value);
    },
    render: function(){

        return React.DOM.div({
            className : 'btnContainer',
            onClick: this._click
        }, React.DOM.button(null, 'button1'),
        React.DOM.button(null, 'button2'),
        React.DOM.button(null, 'button3'));
    }
});