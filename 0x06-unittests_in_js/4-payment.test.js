const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
   
    beforeEach(() => {
        sinon.stub(Utils, 'calculateNumber');
        sinon.spy(console, 'log');        
    });

    afterEach(() => {
        Utils.calculateNumber.restore();
        console.log.restore();
    });
   
    it('calculateNumber should return 10', () => {

        Utils.calculateNumber.returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(Utils.calculateNumber.calledOnce).to.be.true;
        expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith('The total is: 10')).to.be.true;

    });
});