var engine = require('../engines/engine');
var witty = require('../data/witty');

var request = {
  path: 'views/grade.html',
  type: 'text/html; charset=utf-8',
  nocache: true
};

function getGrade(req, res) {
  request.data = getData(req.url);
  const param = { handler: engine.httpHandler, template: engine.mustache };
  engine.render(request, res, param);
}

function getData(url) {
  const grade = engine.gradeParser(url);
  const wittyText = witty(grade);

  return {
    grade: grade,
    wittyText: wittyText,
    virtualPath: process.env.virtualPath || ''
  };
}

module.exports = getGrade;
