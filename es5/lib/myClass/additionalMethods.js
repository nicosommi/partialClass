"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = additionalMethod;
exports.anotherAdditionalMethod = anotherAdditionalMethod;
exports.additionalPrivateMethod = additionalPrivateMethod;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _symbols = require("./symbols");

var _symbols2 = _interopRequireDefault(_symbols);

function additionalMethod() {
  return this[_symbols2["default"].existentPrivateMethod]();
}

function anotherAdditionalMethod() {
  return this[_symbols2["default"].additionalPrivateMethod]();
}

function additionalPrivateMethod() {
  return "yet another result";
}