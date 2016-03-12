var target = require('../../engines/mustache');

describe('A mustache template engine', function () {
  const template = 'some {{template}} with {{value}}';

  it('fills a template with values', function () {
    const result = target(template, { template: 'template', value: 'value' });
    result.should.equal('some template with value');
  });

  it('fills a template with duplicate values', function () {
    const duplicateTemplate = 'some {{value}} with {{value}}';
    const result = target(duplicateTemplate, { value: 'value' });
    result.should.equal('some value with value');
  });

  it('does not fill a template without proper values', function () {
      const result = target(template, { bad: 'value'});
      result.should.equal('some {{template}} with {{value}}');
  });

  it('does not fill a template with no values', function () {
      const result = target(template, { });
      result.should.equal('some {{template}} with {{value}}');
  });
});
