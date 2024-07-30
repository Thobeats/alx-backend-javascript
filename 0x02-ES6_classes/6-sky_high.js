import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  set floors(floors) {
    if (typeof (floors) !== 'number') {
      throw new TypeError('Floors must be a number');
    }
    this._floors = floors; // eslint-disable-line no-underscore-dangle
  }

  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`; // eslint-disable-line no-underscore-dangle
  }
}

export default SkyHighBuilding;
