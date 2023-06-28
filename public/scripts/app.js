"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp() {
        _classCallCheck(this, IndecisionApp);

        return _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var options = ["one", "two", "Four"];
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title }),
                React.createElement(Options, { options: options }),
                React.createElement(AddOptions, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Options = function (_React$Component3) {
    _inherits(Options, _React$Component3);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this3 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this3.RemoveAllFunction = _this3.RemoveAllFunction.bind(_this3);
        return _this3;
    }

    _createClass(Options, [{
        key: "RemoveAllFunction",
        value: function RemoveAllFunction() {
            console.log(this.props.options);
        }
    }, {
        key: "render",
        value: function render() {
            console.log(this.props);
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.RemoveAllFunction },
                    "Remove All"
                ),
                React.createElement(
                    "p",
                    null,
                    "Option Components here!"
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { val: option, key: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOptions = function (_React$Component4) {
    _inherits(AddOptions, _React$Component4);

    function AddOptions() {
        _classCallCheck(this, AddOptions);

        return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
    }

    _createClass(AddOptions, [{
        key: "OnSubmitFunction",
        value: function OnSubmitFunction(e) {
            e.preventDefault();
            var value = e.target.elements.addoptions.value.trim();
            e.target.elements.addoptions.value = '';
            if (value) {

                alert(value);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.OnSubmitFunction },
                    React.createElement("input", { type: "text", name: "addoptions" }),
                    React.createElement(
                        "button",
                        null,
                        "Add the option"
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "p",
                null,
                this.props.val
            );
        }
    }]);

    return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
