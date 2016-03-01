var engine = require('../engines/engine');

var request = {
  path: 'views/grade.html',
  type: 'text/html; charset=utf-8',
  nocache: true
};

function getGrade(req, res) {
  engine.render(request, res, engine.httpHandler);
}

module.exports = getGrade;
