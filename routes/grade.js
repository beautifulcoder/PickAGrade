var engine = require('../engines/engine');
var data = require('../data/data');

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

  return {
    grade: grade,
    wittyText: data.getWittyText(grade),
    virtualPath: process.env.virtualPath || '',
    signColor: data.getGradeSign(grade),
    gradeImage: data.getGradeImage(grade),
    styleBundle: engine.bundler()
  };
}

module.exports = getGrade;
