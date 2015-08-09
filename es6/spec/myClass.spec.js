import MyClass from "../..";
import chai from "chai";
chai.should();

describe("PartialClass", () => {
	let component;

	before(() => {
		component = new MyClass();
	});

	it("should have the additional method", () => {
		component.additionalMethod().should.equal("this is the result");
	});

	it("should have another additional method", () => {
		component.anotherAdditionalMethod().should.equal("yet another result");
	});
});
