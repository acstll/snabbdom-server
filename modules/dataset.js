
var escape = require('../util/escape')

// data.dataset

module.exports = function datasetModule (vnode, attributes) {
  var dataset = vnode.data.dataset || {}

  Object.entries(dataset).forEach(function ([key, value]) {
    attributes.set(`data-${key}`, escape(value))
  })
}
