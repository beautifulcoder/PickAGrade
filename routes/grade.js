var engine = require('../engines/engine');

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
  return {
    grade: engine.gradeParser(url)
  };
}

module.exports = getGrade;
