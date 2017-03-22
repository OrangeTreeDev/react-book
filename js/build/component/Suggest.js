'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hubery on 2017/3/20.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Suggest = function (_React$Component) {
    _inherits(Suggest, _React$Component);

    function Suggest(props) {
        _classCallCheck(this, Suggest);

        var _this = _possibleConstructorReturn(this, (Suggest.__proto__ || Object.getPrototypeOf(Suggest)).call(this, props));

        _this.state = {
            value: _this.props.defaultGrape
        };
        return _this;
    }

    _createClass(Suggest, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.value;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'Suggest' },
                _react2.default.createElement('input', { list: this.props.listId, defaultValue: this.props.defaultGrape, onChange: function onChange(e) {
                        _this2.setState({ value: e.target.value });
                    } }),
                _react2.default.createElement(
                    'datalist',
                    { id: this.props.listId },
                    this.props.lists.map(function (item, idx) {
                        return _react2.default.createElement('option', { value: item, key: idx });
                    })
                )
            );
        }
    }]);

    return Suggest;
}(_react2.default.Component);

Suggest.defaultProps = {
    lists: [],
    listId: '',
    defaultGrape: ''
};

Suggest.propTypes = {
    lists: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
    listId: _react2.default.PropTypes.string.isRequired,
    defaultGrape: _react2.default.PropTypes.string
};

exports.default = Suggest;