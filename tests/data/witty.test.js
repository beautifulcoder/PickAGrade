var target = require('../../data/witty');
var should = require('should');

describe('A witty text', function () {
    it('returns witty text with a grade', function () {
        const result = target('A');
        should.exist(result);
    });

    it('return witty text with a grade and symbol', function () {
        const result = target('B-');
        should.exist(result);
    });
});
