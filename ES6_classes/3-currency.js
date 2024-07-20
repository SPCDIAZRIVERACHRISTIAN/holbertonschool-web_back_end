export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string' && typeof (name)) {
      throw TypeError('code and name must be string');
    }
    /* eslint-disable no-underscore-dangle */
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof (code) !== 'string') {
      throw TypeError('code must be string');
    }
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw TypeError('name must  be string');
    }
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
