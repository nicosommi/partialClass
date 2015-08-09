import symbols from "./symbols";

export default class MyClass {
  [symbols.existentPrivateMethod]() {
    return "this is the result";
  }
}

import additionalMethod, {anotherAdditionalMethod, additionalPrivateMethod} from "./additionalMethods";
const additionalMethodsObject = {
  additionalMethod: additionalMethod,
  anotherAdditionalMethod: anotherAdditionalMethod
};
additionalMethodsObject[symbols.additionalPrivateMethod] = additionalPrivateMethod;

Object.assign(MyClass.prototype, additionalMethodsObject);
