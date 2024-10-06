
var escape = require('../util/escape')

// data.attrs

module.exports = function attrsModule (vnode, attributes) {
  var attrs = vnode.data.attrs || {}

  Object.entries(attrs).forEach(function ([key, value]) {
    attributes.set(key, escape(value))
  })
}
