export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get [Symbol.toStringTag]() {
    return `${this._size}`;
  }

  get [Symbol.toNumberTag]() {
    return `${this._location}`;
  }
}
