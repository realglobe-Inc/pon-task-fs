/**
 * Define task
 * @function define
 * @param {Object} [options={}] - Optional settings
 * @param {Array} [options.mkdir=[]] - Options for mkdir
 * @returns {function} Defined task
 */
'use strict'

const mkdir = require('./mkdir')
const chmod = require('./chmod')

const creators = { mkdir, chmod }

/** @lends define */
function define (options = {}) {
  let subTasks = Object
    .keys(creators)
    .reduce((subTasks, name) => Object.assign(subTasks, {
      [name]: creators[ name ](...(options[ name ] || []))
    }), {})

  function task (ctx) {
    return Promise.all([
      Object.keys(subTasks).map((name) => subTasks[ name ](ctx))
    ])
  }

  return Object.assign(task, subTasks)
}

module.exports = Object.assign(define, creators)


