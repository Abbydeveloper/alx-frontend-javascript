export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    this._sqft = val;
  }

  evacuationWarningMessage() {
    if !(this.constructor.hasOwnProperty(evacuationWarningMessage) {
      throw new Error(Class extending Building must override evacuationWarningMessage);
    }
  }
}
