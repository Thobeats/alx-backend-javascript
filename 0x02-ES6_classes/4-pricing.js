import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amount) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount; // eslint-disable-line no-underscore-dangle
  }

  get amount() {
    return this._amount; // eslint-disable-line no-underscore-dangle
  }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a valid currency');
    }
    this._currency = currency; // eslint-disable-line no-underscore-dangle
  }

  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`; // eslint-disable-line no-underscore-dangle
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }

    if (typeof (conversionRate) !== 'number') {
      throw new TypeError('Conversion Rate must be a number');
    }

    return amount * conversionRate;
  }
}

export default Pricing;
