/**
 * Define task
 * @function del
 * @param {string|string[]} Patterns - File pattern to delete
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const co = require('co')
const path = require('path')
const filedel = require('filedel')

/** @lends del */
function del (patterns, options = {}) {
  function task (ctx) {
    let { cwd, logger } = ctx
    return co(function * () {
      let filenames = yield filedel(patterns, { cwd })
      for (let filename of filenames) {
        logger.debug(`File unlinked: ${path.relative(cwd, filename)}`)
      }
    })
  }

  return Object.assign(task, {})
}

module.exports = del


