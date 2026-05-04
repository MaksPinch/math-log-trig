export default class Character {
  constructor(baseAttack, distance) {
    this._baseAttack = baseAttack;
    this._stoned = false;
    this.distance = distance;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    const coefficient = 1 - (this.distance - 1) * 0.1;
    let currentAttack = this._baseAttack * coefficient;

    if (this._stoned) {
      currentAttack -= Math.log2(this.distance) * 5;
    }

    return Math.max(0, Math.round(currentAttack));
  }

  set attack(value) {
    this._baseAttack = value;
  }
}
