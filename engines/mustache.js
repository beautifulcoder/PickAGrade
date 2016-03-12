function mustache(text, data) {
  'use strict';
  var result = text;

  for (let prop in data) {
    if (data.hasOwnProperty(prop)) {
      result = getTemplateWithValue(result, { prop: prop, value: data[prop] });
    }
  }
  return result;
}

function getTemplateWithValue(template, data) {
  const regExp = new RegExp(`{{${data.prop}}}`, 'g');
  return template.replace(regExp, data.value);
}

module.exports = mustache;
