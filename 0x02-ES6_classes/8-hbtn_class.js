class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(size) {
    this._size = size; // eslint-disable-line no-underscore-dangle
  }

  get size() {
    return this._size; // eslint-disable-line no-underscore-dangle
  }

  set location(location) {
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  get location() {
    return this._location; // eslint-disable-line no-underscore-dangle
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
export default HolbertonClass;
