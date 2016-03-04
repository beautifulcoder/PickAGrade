var fs = require('fs');
var path = require('path');

function render(req, res, handlerFn, templateFn) {
  const fullpath = path.join(__dirname, '../') + req.path;

  fs.readFile(fullpath, 'utf-8', function (err, text) {
    const content = {
      response: templateFn ? templateFn(text, req.data) : text,
      type: req.type,
      nocache: req.nocache
    };
    handlerFn(err, res, content);
  });
}

module.exports = render;
