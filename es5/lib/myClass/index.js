"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _symbols = require("./symbols");

var _symbols2 = _interopRequireDefault(_symbols);

var _additionalMethods = require("./additionalMethods");

var _additionalMethods2 = _interopRequireDefault(_additionalMethods);

var MyClass = (function () {
  function MyClass() {
    _classCallCheck(this, MyClass);
  }

  _createClass(MyClass, [{
    key: _symbols2["default"].existentPrivateMethod,
    value: function value() {
      return "this is the result";
    }
  }]);

  return MyClass;
})();

exports["default"] = MyClass;

var additionalMethodsObject = {
  additionalMethod: _additionalMethods2["default"],
  anotherAdditionalMethod: _additionalMethods.anotherAdditionalMethod
};
additionalMethodsObject[_symbols2["default"].additionalPrivateMethod] = _additionalMethods.additionalPrivateMethod;

Object.assign(MyClass.prototype, additionalMethodsObject);
module.exports = exports["default"];