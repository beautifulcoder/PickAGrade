var request = require('supertest');
var app = require('../../app');

describe('Get stylesheet', function () {
  afterEach(function () {
    delete process.env.isProduction;
  });

  it('responds with css', function (done) {
    request(app)
      .get('/styles/base.css')
      .expect('Content-Type', /css/)
      .expect(200, done);
  });

  it('responds with css and no-cache', function (done) {
    request(app)
      .get('/styles/base.css')
      .expect('Cache-Control', 'no-cache')
      .expect(200, done);
  });

  it('responds with css and cache', function (done) {
    process.env.isProduction = 'true';

    request(app)
      .get('/styles/base.css')
      .expect('Cache-Control', 'max-age=31536000')
      .expect(200, done);
  });
});
