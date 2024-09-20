const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
   
    it('should call calculateNumber', () => {
       let sinonSpy = sinon.spy(Utils);

        sendPaymentRequestToApi(100, 20);
        expect(sinonSpy.calculateNumber.calledOnce).to.be.true;
        expect(sinonSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

        sinonSpy.calculateNumber.restore();
    });
});