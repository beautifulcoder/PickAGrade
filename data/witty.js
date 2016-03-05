var witty = {
  'A': 'You are Awesome.',
  'B': 'The best don’t always come first.',
  'C': 'If at first you don’t succeed, try and try again.',
  'D': 'There is no way of knowing in which direction you are going.',
  'F': 'Roses are red, violets are blue. F is for Failure, how about you?'
};

function getWittyText(grade) {
  const prop = grade.charAt(0);
  return witty[prop];
}

module.exports = getWittyText;
