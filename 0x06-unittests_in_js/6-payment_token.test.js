const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('get the result of getPaymentTokenFromAPI(true)', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data.data).to.equal('Successful response from the API');
        done();
      });
  });
});
