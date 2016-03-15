function getGradeSign(grade) {
  const sign = grade.charAt(1);

  if (sign === '+') {
    return 'plus';
  } else if (sign === '-') {
    return 'minus';
  }

  return '';
}

module.exports = getGradeSign;
