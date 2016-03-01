var grade = require('./grade');

function route(req, res) {
  grade(req, res);
}

module.exports = route;
