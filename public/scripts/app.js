'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handlePlus = _this.handlePlus.bind(_this);
        _this.handleMinus = _this.handleMinus.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: props.count
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('count');
                var cnt = parseInt(json, 10);
                if (!isNaN(cnt)) {
                    this.setState(function () {
                        return {
                            count: cnt
                        };
                    });
                }
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                var count = JSON.stringify(this.state.count);
                localStorage.setItem('count', count);
            }
        }
    }, {
        key: 'handlePlus',
        value: function handlePlus() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleMinus',
        value: function handleMinus(cnt) {
            if (!this.state.count) {
                return "Count can't be -ve";
            }
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Count : ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handlePlus },
                    '+1'
                ),
                React.createElement(DecCount, { handleMinus: this.handleMinus, cnt: this.state.count }),
                React.createElement(
                    'button',
                    { onClick: this.handleReset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

Counter.defaultProps = {
    count: 0
};

var DecCount = function (_React$Component2) {
    _inherits(DecCount, _React$Component2);

    function DecCount(props) {
        _classCallCheck(this, DecCount);

        var _this2 = _possibleConstructorReturn(this, (DecCount.__proto__ || Object.getPrototypeOf(DecCount)).call(this, props));

        _this2.xyz = _this2.xyz.bind(_this2);
        _this2.state = {
            err: undefined
        };
        return _this2;
    }

    _createClass(DecCount, [{
        key: 'xyz',
        value: function xyz() {
            var err = this.props.handleMinus(this.props.cnt);

            this.setState(function () {
                return {
                    err: err
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.xyz },
                    '-1'
                ),
                this.state.err && React.createElement(
                    'p',
                    null,
                    this.state.err
                )
            );
        }
    }]);

    return DecCount;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
