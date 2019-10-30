const chai = require('chai');
const request = require('request');

const urlBase = 'http://localhost:3333';

const { expect } = chai;

describe('Api test for get trms', () => {
  it('Expect trms from database', done => {
    request.get(
      {
        url: `${urlBase}/trm`,
      },
      (error, response, body) => {
        let _body = {};
        try {
          _body = JSON.parse(body);
        } catch (e) {
          _body = {};
        }

        expect(response.statusCode).to.equal(200);

        done();
      }
    );
  });
});
