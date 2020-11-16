var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import CustomButton from './Button.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.handleClick = function (e) {
            console.log('pressed');
        };

        _this.handleVariant = function (e) {
            _this.setState({
                variant: e.currentTarget.value
            });
        };

        _this.handleColor = function (e) {
            _this.setState({
                color: e.currentTarget.value
            });
        };

        _this.handleSize = function (e) {
            _this.setState({
                size: e.currentTarget.value
            });
        };

        _this.handleDisabled = function (e) {
            if (e.currentTarget.checked) {
                _this.setState({
                    disabled: true
                });
            } else {
                _this.setState({
                    disabled: false
                });
            }
        };

        _this.handleShadow = function (e) {
            if (e.currentTarget.checked) {
                _this.setState({
                    hasShadow: true
                });
            } else {
                _this.setState({
                    hasShadow: false
                });
            }
        };

        _this.handleIcon = function (e) {
            if (e.keyCode === 13) {
                if (e.currentTarget.name == 'startIcon') {
                    _this.setState({
                        startIcon: e.currentTarget.value
                    });
                    e.currentTarget.blur();
                } else {
                    _this.setState({
                        endIcon: e.currentTarget.value
                    });
                    e.currentTarget.blur();
                }
            }
        };

        _this.state = {
            variant: '',
            color: '',
            size: '',
            disabled: false,
            hasShadow: false,
            startIcon: '',
            endIcon: '',
            value: 'Default'
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'page-header' },
                    React.createElement(
                        'h1',
                        { className: 'page-title' },
                        'Button'
                    ),
                    React.createElement(CustomButton, { value: this.state.value, variant: this.state.variant,
                        color: this.state.color, size: this.state.size,
                        disabled: this.state.disabled, disableShadow: this.state.hasShadow,
                        startIcon: this.state.startIcon, endIcon: this.state.endIcon,
                        onPressed: this.handleClick })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'grid' },
                        React.createElement(
                            'div',
                            { className: 'control' },
                            React.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'variant' },
                                'Variants'
                            ),
                            React.createElement(
                                'select',
                                { className: 'control-select', name: 'variant', onChange: this.handleVariant },
                                React.createElement(
                                    'option',
                                    { value: '' },
                                    'Default'
                                ),
                                React.createElement(
                                    'option',
                                    { value: 'outline' },
                                    'Outline'
                                ),
                                React.createElement(
                                    'option',
                                    { value: 'text' },
                                    'Text'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'control' },
                            React.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'colors' },
                                'Colors'
                            ),
                            React.createElement(
                                'select',
                                { className: 'control-select', name: 'colors', onChange: this.handleColor },
                                React.createElement(
                                    'option',
                                    { value: '' },
                                    'Default'
                                ),
                                React.createElement(
                                    'option',
                                    { value: 'primary' },
                                    'Primary'
                                ),
                                React.createElement(
                                    'option',
                                    { value: 'secondary' },
                                    'Secondary'
                                ),
                                React.createElement(
                                    'option',
                                    { value: 'danger' },
                                    'Danger'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'control' },
                            React.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'sizes' },
                                'Sizes'
                            ),
                            React.createElement(
                                'select',
                                { className: 'control-select', name: 'sizes', onChange: this.handleSize },
                                React.createElement(
                                    'option',
                                    { value: '' },
                                    'Normal'
                                ),
                                React.createElement(
                                    'option',
                                    { value: 'sm' },
                                    'Small'
                                ),
                                React.createElement(
                                    'option',
                                    { value: 'lg' },
                                    'Large'
                                )
                            )
                        ),
                        React.createElement('div', null),
                        React.createElement(
                            'div',
                            { className: 'control' },
                            React.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'sizes' },
                                'Leading Icon'
                            ),
                            React.createElement('input', { className: 'control-select', placeholder: 'Ex: call', type: 'text', name: 'startIcon', onKeyUp: this.handleIcon })
                        ),
                        React.createElement(
                            'div',
                            { className: 'control' },
                            React.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'sizes' },
                                'Trailing Icon'
                            ),
                            React.createElement('input', { className: 'control-select', placeholder: 'Ex: call', type: 'text', name: 'endIcon', onKeyUpt: this.handleIcon })
                        ),
                        React.createElement(
                            'div',
                            { className: 'control-row' },
                            React.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'sizes' },
                                'Disabled ?'
                            ),
                            React.createElement('input', { className: 'control-select', type: 'checkbox', name: 'disabled', onChange: this.handleDisabled })
                        ),
                        React.createElement('div', null),
                        React.createElement(
                            'div',
                            { className: 'control-row' },
                            React.createElement(
                                'label',
                                { className: 'control-label', htmlFor: 'sizes' },
                                'Disable Shadow ?'
                            ),
                            React.createElement('input', { className: 'control-select', type: 'checkbox', name: 'disableShadow', onChange: this.handleShadow })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

var element = React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
);
ReactDOM.render(element, document.querySelector('#app'));