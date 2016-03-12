var request = require('supertest');
var app = require('../../app');

describe('Get stylesheet', function () {
  it('responds with css', function (done) {
    request(app)
      .get('/styles/base.css')
      .expect('Content-Type', /css/)
      .expect(200, done);
  });
});
