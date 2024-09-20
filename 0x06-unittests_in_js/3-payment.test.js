const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {

    beforeEach(() => {
        sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        Utils.calculateNumber.restore();
    });
   
    it('should call calculateNumber', () => {

        sendPaymentRequestToApi(100, 20);
        expect(Utils.calculateNumber.calledOnce).to.be.true;
        expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;

    });
});