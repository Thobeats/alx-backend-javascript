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

});
