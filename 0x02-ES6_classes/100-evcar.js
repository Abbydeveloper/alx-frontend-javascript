import Car from './100-car';

export default class EVCar extends Car {
  constructor(range) {
    super(brand);
    super(motor);
    super(color);
    this._range = range;
  }

  cloneCar() {
    return this;
  }
}