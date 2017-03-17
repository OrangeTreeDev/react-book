'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Rating = require('./component/Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _Button = require('./component/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hubery on 2017/3/16.
 */

_reactDom2.default.render(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        'Raiting'
    ),
    _react2.default.createElement(_Rating2.default, { className: 'test' }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
        'h1',
        null,
        'Button'
    ),
    _react2.default.createElement(_Button2.default, { txt: 'ok' }),
    _react2.default.createElement(_Button2.default, { className: 'middle', txt: '+ add' })
), document.getElementById('app'));