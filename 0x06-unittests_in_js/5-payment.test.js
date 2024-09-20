const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
   
    beforeEach(() => {
        sinon.spy(console, 'log');        
    });

    afterEach(() => {
        console.log.restore();
    });

    it('sendPaymentRequestToApi should return 120', () => {
        sendPaymentRequestToApi(100, 20);
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith('The total is: 120')).to.be.true;
    });
   
    it('sendPaymentRequestToApi should return 20', () => {

        sendPaymentRequestToApi(10, 10);
        expect(console.log.calledOnce).to.be.true;
        expect(console.log.calledWith('The total is: 20')).to.be.true;

    });
});