var fs = require('fs');
var path = require('path');

function render(req, res, engine) {
  const fullpath = path.join(__dirname, '../') + req.path;

  fs.readFile(fullpath, 'utf-8', function (err, text) {
    const content = {
      response: engine.template ? engine.template(text, req.data) : text,
      type: req.type,
      nocache: req.nocache
    };
    engine.handler(err, res, content);
  });
}

module.exports = render;
