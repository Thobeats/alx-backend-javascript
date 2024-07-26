class Building {
  constructor(sqft) {
    if (this.constructor !== 'Buiding') {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  set sqft(sqft) {
    if (typeof (sqft) !== 'number') {
      throw new TypeError('Square Feet must be a number');
    }
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }
}

export default Building;
