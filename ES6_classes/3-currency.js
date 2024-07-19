// christian is gei
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get() {
    return this._code, this._name;;
  }

  set(newCode, newName) {
    this._code = newCode;
    this._name = newName;
  }


  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
