﻿function gradeParser(url) {
  const gradeIndex = url.indexOf('/', 1) + 1;
  const grade = getGrade(url, gradeIndex);
  const symbolIndex = url.indexOf('/', gradeIndex) + 1;
  const symbol = symbolIndex > 0 ? getSymbol(url, symbolIndex) : '';

  return getGradeWithBoundary(grade, symbol);
}

function getGrade(url, index) {
  var grade = url.substring(index, index + 1).toUpperCase();
  if (grade < 'A' || grade > 'F') {
    grade = 'F';
  }
  return grade;
}

function getSymbol(url, index) {
  const symbol = url.substring(index, url.length);
  return convertSymbolToSign(symbol);
}

function convertSymbolToSign(symbol) {
  if (symbol === 'plus') {
    return '+';
  }
  return '-';
}

function getGradeWithBoundary(grade, symbol) {
  if (grade === 'A' && symbol === '+') {
    return grade;
  } else if (grade === 'F' && symbol !== '') {
    return grade;
  }

  return grade + symbol;
}

module.exports = gradeParser;
