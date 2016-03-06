var target = require('../../engines/gradeParser');

describe('A grade parser', function () {
  it('returns a grade with plus', function () {
    const res = target('/grades/a/plus');
    res.should.equal('A+');
  });

  it('returns a grade with minus', function () {
    const res = target('/grades/a/minus');
    res.should.equal('A-');
  });

  it('returns just a grade', function () {
      const res = target('/grades/b');
      res.should.equal('B');
  });

  it('returns a grade with weird url', function () {
      const res = target('/grades/afafdksks');
      res.should.equal('A');
  });

  it('returns a default grade', function () {
      const res = target('/grades/gfafdksks');
      res.should.equal('F');
  });
});
