var target = require('../../data/image');
var should = require('should');

describe('A grade image', function () {
  it('returns image with a grade', function () {
    const result = target('A');
    should.exist(result);
  });

  it('return image with a grade and symbol', function () {
    const result = target('B-');
    should.exist(result);
  });

  it('return no image with a grade out of bounds', function () {
    const result = target('F-');
    should.not.exist(result);
  });
});
