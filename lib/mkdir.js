/**
 * Define task
 * @function mkdir
 * @param {string[]} dirnames - Directory name to make
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const co = require('co')
const path = require('path')
const fs = require('fs')
const amkdirp = require('amkdirp')

/** @lends mkdir */
function mkdir (dirnames, options = {}) {
  function task (ctx) {
    let { cwd, logger } = ctx
    return co(function * () {
      for (let dirname of [].concat(dirnames).filter(Boolean)) {
        dirname = path.resolve(cwd, dirname)
        let exists = yield new Promise((resolve) => fs.exists(dirname, resolve))
        if (!exists) {
          yield amkdirp(dirname)
          logger.trace('Directory generated:', path.relative(cwd, dirname))
        }
      }
    })
  }

  return Object.assign(task, {})
}

module.exports = mkdir


