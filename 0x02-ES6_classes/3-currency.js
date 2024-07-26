class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set name(name) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set code(code) {
    if (typeof (code) !== 'string') {
      throw new TypeError('Length must be a string');
    }
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  get code() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`; // eslint-disable-line no-underscore-dangle
  }
}

export default Currency;
