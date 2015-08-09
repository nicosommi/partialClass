"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ = require("../..");

var _2 = _interopRequireDefault(_);

var _chai = require("chai");

var _chai2 = _interopRequireDefault(_chai);

_chai2["default"].should();

describe("PartialClass", function () {
	var component = undefined;

	before(function () {
		component = new _2["default"]();
	});

	it("should have the additional method", function () {
		component.additionalMethod().should.equal("this is the result");
	});

	it("should have another additional method", function () {
		component.anotherAdditionalMethod().should.equal("yet another result");
	});
});