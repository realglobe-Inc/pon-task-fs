/**
 * Define task
 * @function del
 * @param {string|string[]} Patterns - File pattern to delete
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const path = require('path')
const filedel = require('filedel')

/** @lends del */
function del (patterns, options = {}) {
  async function task (ctx) {
    const {cwd, logger} = ctx
    const filenames = await filedel(patterns, {cwd})
    for (const filename of filenames) {
      logger.debug(`File unlinked: ${path.relative(cwd, filename)}`)
    }
  }

  return Object.assign(task, {})
}

module.exports = del


