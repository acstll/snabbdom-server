
var escapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
  '`': '&#96;'
}

var re = new RegExp(`[${Object.keys(escapes).join('')}]`, 'g')

module.exports = function escape (value) {
  return ('' + value).replace(re, function (s) { return escapes[s] })
}
