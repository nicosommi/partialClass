import symbols from "./symbols";

export default function additionalMethod() {
  return this[symbols.existentPrivateMethod]();
}

export function anotherAdditionalMethod() {
  return this[symbols.additionalPrivateMethod]();
}

export function additionalPrivateMethod() {
  return "yet another result";
}
