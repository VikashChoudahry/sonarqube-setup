/* eslint no-undef: 0, prefer-destructuring: 0 */
const { expect } = require('chai'),
  server = require('../../../../server'),
  request = require('supertest')(server),
  fixtures = require('../../../fixtures/test.json');

describe('Test GET API', () => {
  it('Should get valid response from test api', (done) => {
    request
      .get('/api/v1/test')
      .set('Accept', 'application/json')
      .send(fixtures.postPayload)
      .end((err, response) => {
        if (err) done(err);
        expect(response.status).to.be.equal(200);
        expect(response.body.data).to.deep.equals(fixtures.successResponse);
        done();
      });
  });
});
