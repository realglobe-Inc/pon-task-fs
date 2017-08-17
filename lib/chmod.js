/**
 * Define task
 * @function chmod
 * @param {Object.<string, string>} permissions - File pattern and permissions
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const path = require('path')
const filemode = require('filemode')

/** @lends chmod */
function chmod (permissions = {}, options = {}) {
  async function task (ctx) {
    const {cwd, logger} = ctx
    for (const pattern of Object.keys(permissions)) {
      const mode = permissions[pattern]
      const results = await filemode(pattern, mode, {cwd})
      for (const filename of Object.keys(results)) {
        logger.debug(`Permission changed: ${path.relative(cwd, filename)} ${mode}`)
      }
    }
  }

  return Object.assign(task, {})
}

module.exports = chmod


