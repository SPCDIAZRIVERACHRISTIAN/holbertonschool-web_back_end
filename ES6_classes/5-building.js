export default class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') {
      TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    if (this._sqft == Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    return `${this._sqft}`;
  }
}
