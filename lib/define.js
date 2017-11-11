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
const symlink = require('./symlink')
const write = require('./write')
const del = require('./del')
const cp = require('./cp')
const concat = require('./concat')

const creators = {
  mkdir, chmod, symlink, write, del, cp, concat
}

/** @lends define */
function define (options = {}) {
  const subTasks = Object
    .keys(creators)
    .reduce((subTasks, name) => Object.assign(subTasks, {
      [name]: creators[name](...(options[name] || []))
    }), {})

  async function task (ctx) {
    return Promise.all([
      Object.keys(subTasks).map((name) => subTasks[name](ctx))
    ])
  }

  return Object.assign(task, subTasks)
}

module.exports = Object.assign(define, creators)
