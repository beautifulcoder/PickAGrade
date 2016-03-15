var target = require('../../data/sign');

describe('A grade sign', function () {
  it('returns plus when +', function () {
    const result = target('A+');
    result.should.equal('plus');
  });

  it('returns minus when -', function () {
    const result = target('B-');
    result.should.equal('minus');
  });

  it('returns empty when none', function () {
    const result = target('B');
    result.should.equal('');
  });
});
