var grade = require('./grade');
var style = require('./style');

function route(req, res) {
  if (style(req, res)) {
  } else {
    grade(req, res);
  }
}

module.exports = route;
