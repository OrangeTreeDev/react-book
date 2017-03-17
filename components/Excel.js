/**
 * Created by hubery on 2017/3/15.
 */

var Excel = React.createClass({

    render: function(){
        return React.DOM.table( null,
            React.DOM.thead(null,
                React.DOM.tr(null, React.DOM.th(null, 'title'))),
            React.DOM.tbody(null,
                React.DOM.tr( null, React)));
    }
});