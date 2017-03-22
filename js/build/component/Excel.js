'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Rating = require('./Rating');

var _Rating2 = _interopRequireDefault(_Rating);

var _Suggest = require('./Suggest');

var _Suggest2 = _interopRequireDefault(_Suggest);

var _graps = require('../graps');

var _graps2 = _interopRequireDefault(_graps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hubery on 2017/3/20.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Excel = function (_React$Component) {
    _inherits(Excel, _React$Component);

    function Excel(props) {
        _classCallCheck(this, Excel);

        var _this = _possibleConstructorReturn(this, (Excel.__proto__ || Object.getPrototypeOf(Excel)).call(this, props));

        _this.state = {
            actionType: 'none',
            selectedRowIdx: -1,
            comments: _this.props.datas
        };
        return _this;
    }

    _createClass(Excel, [{
        key: '_handleActions',
        value: function _handleActions(rowIdx, type) {

            switch (type) {
                case 'info':
                    this.setState({
                        actionType: 'info',
                        selectedRowIdx: rowIdx
                    });
                    break;
                case 'edit':
                    this.setState({
                        actionType: 'edit',
                        selectedRowIdx: rowIdx
                    });
                    break;
                case 'delete':
                    this.setState({
                        actionType: 'delete',
                        selectedRowIdx: rowIdx
                    });
                    break;
            }
        }
    }, {
        key: '_sureEdit',
        value: function _sureEdit() {

            var datas = Array.from(this.state.comments);

            var newData = {};
            Object.keys(this.props.schema).forEach(function (fieldKey, idx) {

                var fieldType = this.props.schema[fieldKey].fieldType;
                if (fieldType == 'string' || fieldType == 'number') {
                    newData[fieldKey] = this.refs[fieldKey].value;
                } else {
                    newData[fieldKey] = this.refs[fieldKey].getValue();
                }
            }.bind(this));
            datas[this.state.selectedRowIdx] = newData;
            this.setState({
                actionType: 'none',
                selectedRowIdx: -1,
                comments: datas
            });
        }
    }, {
        key: '_genDialog',
        value: function _genDialog() {
            var _this2 = this;

            var dialog = '';
            switch (this.state.actionType) {
                case 'info':
                    var selectedData = this.props.datas[this.state.selectedRowIdx];

                    dialog = _react2.default.createElement(
                        _Dialog2.default,
                        { head: 'Item info', confirmTxt: 'ok',
                            sureAction: function sureAction() {
                                _this2.setState({ actionType: 'none', selectedRowIdx: -1 });
                            } },
                        Object.keys(this.props.schema).map(function (filedKey, idx) {

                            return _react2.default.createElement(
                                'div',
                                { key: idx, className: 'item-info' },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    this.props.schema[filedKey].displayName,
                                    ':'
                                ),
                                this.props.schema[filedKey].fieldType == 'rating' ? _react2.default.createElement(_Rating2.default, { defaultValue: selectedData[filedKey] }) : _react2.default.createElement(
                                    'p',
                                    null,
                                    selectedData[filedKey]
                                )
                            );
                        }.bind(this))
                    );

                    break;
                case 'edit':

                    var selectedData = this.props.datas[this.state.selectedRowIdx];

                    dialog = _react2.default.createElement(
                        _Dialog2.default,
                        { head: 'Edit item', allowCancel: true, confirmTxt: 'ok',
                            cancelAction: function cancelAction() {
                                _this2.setState({ actionType: 'none', selectedRowIdx: -1 });
                            },
                            sureAction: this._sureEdit.bind(this) },
                        Object.keys(this.props.schema).map(function (fieldKey, idx) {

                            var formInput = '';
                            var fieldType = this.props.schema[fieldKey].fieldType;
                            if (fieldType == 'string') {

                                formInput = _react2.default.createElement('input', { ref: fieldKey, type: 'text', defaultValue: selectedData[fieldKey] });
                            } else if (fieldType == 'number') {

                                formInput = _react2.default.createElement('input', { ref: fieldKey, type: 'number', defaultValue: selectedData[fieldKey] });
                            } else if (fieldType == 'suggest') {

                                formInput = _react2.default.createElement(_Suggest2.default, { ref: fieldKey, listId: 'grapeList', lists: _graps2.default, defaultGrape: selectedData[fieldKey] });
                            } else if (fieldType == 'rating') {

                                formInput = _react2.default.createElement(_Rating2.default, { ref: fieldKey, defaultValue: selectedData[fieldKey], allowEdit: true });
                            }

                            return _react2.default.createElement(
                                'div',
                                { key: idx, className: 'item-edit' },
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    this.props.schema[fieldKey].displayName
                                ),
                                formInput
                            );
                        }.bind(this))
                    );

                    break;
                case 'delete':
                    dialog = _react2.default.createElement(
                        _Dialog2.default,
                        { head: 'Confirm deletion', allowCancel: true, confirmTxt: 'ok',
                            cancelAction: function cancelAction() {
                                _this2.setState({ actionType: 'none', selectedRowIdx: -1 });
                            },
                            sureAction: function sureAction() {
                                _this2.setState({ actionType: 'none', selectedRowIdx: -1 });
                            } },
                        _react2.default.createElement(
                            'span',
                            null,
                            'are you sure to delete the item ?'
                        )
                    );

                    break;
                case 'none':
                    dialog = '';
                    break;
            }

            return dialog;
        }
    }, {
        key: 'render',
        value: function render() {

            // 判断dialog的显示状态
            //let dialog = ;

            var fieldKeys = Object.keys(this.props.schema);
            return _react2.default.createElement(
                'div',
                { className: 'Excel' },
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'thead',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            fieldKeys.map(function (key, idx) {
                                return _react2.default.createElement(
                                    'th',
                                    { key: idx },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        this.props.schema[key].displayName
                                    )
                                );
                            }.bind(this)),
                            _react2.default.createElement(
                                'th',
                                null,
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'action'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'tbody',
                        null,
                        this.state.comments.map(function (elem, rowIdx) {
                            return _react2.default.createElement(
                                'tr',
                                { key: rowIdx },
                                fieldKeys.map(function (key, idx) {
                                    if (this.props.schema[key].fieldType == 'rating') {
                                        return _react2.default.createElement(
                                            'td',
                                            { key: idx },
                                            _react2.default.createElement(_Rating2.default, { defaultValue: elem[key] })
                                        );
                                    } else {
                                        return _react2.default.createElement(
                                            'td',
                                            { key: idx },
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                elem[key]
                                            )
                                        );
                                    }
                                }.bind(this)),
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    ' ',
                                    _react2.default.createElement(_Actions2.default, { action: this._handleActions.bind(this, rowIdx) }),
                                    ' '
                                )
                            );
                        }.bind(this))
                    )
                ),
                this._genDialog()
            );
        }
    }]);

    return Excel;
}(_react2.default.Component);

Excel.propTypes = {
    schema: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.shape({
        displayName: _react2.default.PropTypes.string,
        fieldType: _react2.default.PropTypes.string
    })),
    datas: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
        field_name: _react2.default.PropTypes.string,
        field_year: _react2.default.PropTypes.number,
        field_grape: _react2.default.PropTypes.string,
        field_rating: _react2.default.PropTypes.number
    }))
};

Excel.defaultProps = {
    schema: {},
    datas: []
};

exports.default = Excel;