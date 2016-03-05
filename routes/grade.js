var engine = require('../engines/engine');
var witty = require('../data/witty');

var request = {
  path: 'views/grade.html',
  type: 'text/html; charset=utf-8',
  nocache: true
};

function getGrade(req, res) {
  request.data = getData(req.url);
  engine.render(request, res, engine.httpHandler, engine.mustache);
}

function getData(url) {
  const grade = engine.gradeParser(url);
  const wittyText = witty(grade);

  return {
    grade: grade,
    wittyText: wittyText
  };
}

module.exports = getGrade;
