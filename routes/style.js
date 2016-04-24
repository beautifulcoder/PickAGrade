var engine = require('../engines/engine');

function getStyle(req, res) {
  if (req.method === 'GET' && req.url.indexOf('/styles/') >= 0) {
    const request = {
      path: getPath(req.url),
      type: 'text/css; charset=utf-8'
    };

    if (process.env.isProduction === 'true') {
      request.cache = true;
    } else {
      request.nocache = true;
    }

    engine.render(request, res, { handler: engine.httpHandler });

    return true;
  }

  return false;
}

function getPath(url) {
  return url.slice(url.indexOf('/styles/') + 1);
}

module.exports = getStyle;
