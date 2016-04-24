var target = require('../../engines/bundler');

describe('A bundler', function () {
  beforeEach(function() {
    process.env.virtualPath = '/myvirtualpath';
  });

  afterEach(function () {
    delete process.env.virtualPath;
    delete process.env.isProduction;
  });

  it('gets styles in prod mode', function() {
    process.env.isProduction = 'true';

    const result = target();

    result.should.startWith('<link href="/myvirtualpath/styles/css-');
  });

  it('gets styles in non-prod mode', function () {
    process.env.isProduction = undefined;

    const result = target();

    result.should.not.startWith('<link href="/myvirtualpath/styles/css-');
  });
});
