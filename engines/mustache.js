function mustache(text, data) {
  'use strict';
  var result = text;

  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      const regExp = new RegExp(`{{${prop}}}`, 'g');
      result = result.replace(regExp, data[prop]);
    }
  }
  return result;
}

module.exports = mustache;
