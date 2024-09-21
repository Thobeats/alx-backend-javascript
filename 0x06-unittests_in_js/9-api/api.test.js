const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
    it('get the correct status code', ()=>{
        request('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
        });
    });

    it('get the correct result', ()=>{
        request('http://localhost:7865', (error, response, body) => {
            expect(response.body).to.equal('Welcome to the payment system');
        });
    });

    it('get the correct port', ()=>{
        request('http://localhost:7865', (error, response, body) => {
            expect(response.request.uri.port).to.equal('7865');
        });
    });

    it('get the correct value for id', ()=>{
        request('http://localhost:7865/cart/12', (error, response, body) => {
            expect(body).to.equal('Payment methods for cart 12');
        });
    });

    it('get the correct status code', ()=>{
        request('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equal(200);
        });
    });

    it('can’t accept :id not a number', ()=>{
        request('http://localhost:7865/cart/hello', (error, response, body) => {
            expect(response.statusCode).to.equal(404);
        });
    });


});
