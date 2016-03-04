function mustache(text, data) {
  'use strict';
  var result = text;

  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      result = result.replace(`{{${prop}}}`, data[prop]);
    }
  }
  return result;
}

module.exports = mustache;
