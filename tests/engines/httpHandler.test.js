var target = require('../../engines/httpHandler');
var response = require('./response.mock');

describe('An HTTP engine', function () {
  it('handles errors', function () {
    const res = response();
    target({ message: 'error' }, res);
    res.getResult().should.equal('500text/plain; charset=utf-8Error: error');
  });

  it('handles responses', function () {
    const res = response();
    const content = { type: 'type', response: 'message' };
    target(null, res, content);
    res.getResult().should.equal('200typemessage');
  });

  it('handles responses with no-cache', function () {
    const res = response();
    const content = { type: 'type', response: 'message', nocache: true };
    target(null, res, content);
    res.getResult().should.equal('200typeno-cachemessage');
  });
});
