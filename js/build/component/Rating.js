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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hubery on 2017/3/16.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Rating = function (_React$Component) {
    _inherits(Rating, _React$Component);

    function Rating(props) {
        _classCallCheck(this, Rating);

        var _this = _possibleConstructorReturn(this, (Rating.__proto__ || Object.getPrototypeOf(Rating)).call(this, props));

        _this.state = {
            ratingCount: _this.props.defaultValue,
            tempRatingCount: _this.props.defaultValue
        };
        _this._handleMouseout = _this._handleMouseout.bind(_this);
        return _this;
    }

    _createClass(Rating, [{
        key: 'getValue',
        value: function getValue() {
            return this.state.ratingCount;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.state.ratingCount != nextProps.defaultValue) {
                this.setState({
                    tempRatingCount: nextProps.defaultValue,
                    ratingCount: nextProps.defaultValue
                });
            }
        }
    }, {
        key: '_handleMouseover',
        value: function _handleMouseover(currentIdx, e) {

            this.setState({
                tempRatingCount: currentIdx
            });
        }
    }, {
        key: '_handleMouseout',
        value: function _handleMouseout(e) {
            this.setState({
                tempRatingCount: this.state.ratingCount
            });
        }
    }, {
        key: '_handleClick',
        value: function _handleClick(currentIdx, e) {
            this.setState({
                ratingCount: currentIdx,
                tempRatingCount: currentIdx
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var stars = [];
            for (var i = 0; i < this.props.maxValue; i++) {
                var spanRating = _react2.default.createElement(
                    'span',
                    {
                        key: i, className: i < this.state.tempRatingCount ? 'ratingOn' : null,
                        onMouseOver: this._handleMouseover.bind(this, i + 1),
                        onClick: this._handleClick.bind(this, i + 1)
                    },
                    '\u2606'
                );
                stars.push(spanRating);
            }

            return _react2.default.createElement(
                'div',
                { className: 'rating', onMouseOut: this._handleMouseout, style: this.props.allowEdit ? { pointerEvents: 'auto' } : { pointerEvents: 'none' } },
                stars
            );
        }
    }]);

    return Rating;
}(_react2.default.Component);

Rating.propTypes = {
    defaultValue: _react2.default.PropTypes.number,
    maxValue: _react2.default.PropTypes.number,
    allowEdit: _react2.default.PropTypes.bool
};

Rating.defaultProps = {
    defaultValue: 0,
    maxValue: 5,
    allowEdit: false
};

exports.default = Rating;