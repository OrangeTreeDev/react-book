'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hubery on 2017/3/20.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Dialog = function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog(props) {
        _classCallCheck(this, Dialog);

        return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call(this, props));
    }

    _createClass(Dialog, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'Dialog' },
                _react2.default.createElement(
                    'div',
                    { className: 'dialog-entity' },
                    _react2.default.createElement(
                        'div',
                        { className: 'dialog-head' },
                        this.props.head
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dialog-content' },
                        this.props.children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'dialog-footer' },
                        this.props.allowCancel ? _react2.default.createElement(
                            'a',
                            { className: 'action-cancel', onClick: this.props.cancelAction.bind(null) },
                            'Cancel'
                        ) : '',
                        _react2.default.createElement(
                            _Button2.default,
                            { className: 'action-confirm', onClick: this.props.sureAction },
                            this.props.confirmTxt
                        )
                    )
                )
            );
        }
    }]);

    return Dialog;
}(_react2.default.Component);

Dialog.defaultProps = {
    head: '',
    allowCancel: false,
    confirmTxt: 'ok',
    cancelAction: function cancelAction() {},
    sureAction: function sureAction() {}
};

Dialog.propTypes = {
    head: _react2.default.PropTypes.string,
    allowCancel: _react2.default.PropTypes.bool,
    confirmTxt: _react2.default.PropTypes.string,
    cancelAction: _react2.default.PropTypes.func,
    sureAction: _react2.default.PropTypes.func
};

exports.default = Dialog;