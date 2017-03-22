'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Button = require('./component/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Excel = require('./component/Excel');

var _Excel2 = _interopRequireDefault(_Excel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Excel 组件骨架 和 数据
/**
 * Created by hubery on 2017/3/16.
 */

var schema = {
        field_name: {
                displayName: 'name',
                fieldType: 'string'
        },
        field_year: {
                displayName: 'year',
                fieldType: 'number'
        },
        field_grape: {
                displayName: 'grape',
                fieldType: 'suggest'
        },
        field_rating: {
                displayName: 'rating',
                fieldType: 'rating'
        }
};

var datas = [{
        field_name: 'merlot france',
        field_year: 2015,
        field_grape: 'Merlot',
        field_rating: 4
}, {
        field_name: 'Norton Garden 77',
        field_year: 2000,
        field_grape: 'Norton',
        field_rating: 2
}];

var props = {
        'schema': schema,
        'datas': datas
};
_reactDom2.default.render(_react2.default.createElement(
        'div',
        { className: 'Display' },
        _react2.default.createElement(
                'div',
                { className: 'header' },
                _react2.default.createElement('img', { src: 'images/wp-logo2.png' }),
                _react2.default.createElement(
                        'span',
                        null,
                        'Welcome to Whinepad!'
                )
        ),
        _react2.default.createElement(
                'div',
                { className: 'content' },
                _react2.default.createElement(
                        'div',
                        { className: 'toolbar' },
                        _react2.default.createElement(
                                _Button2.default,
                                { className: 'middle' },
                                '+ add'
                        ),
                        _react2.default.createElement('input', { className: 'searchInpt', type: 'text', placeholder: 'search' })
                ),
                _react2.default.createElement(_Excel2.default, props)
        )
), document.getElementById('app'));