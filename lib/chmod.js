/**
 * Define task
 * @function chmod
 * @param {Object.<string, string>} permissions - File pattern and permissions
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const co = require('co')
const path = require('path')
const filemode = require('filemode')

/** @lends chmod */
function chmod (permissions, options = {}) {
  function task (ctx) {
    let { cwd, logger } = ctx
    return co(function * () {
      for (let pattern of Object.keys(permissions)) {
        let mode = permissions[ pattern ]
        let results = yield filemode(pattern, mode, { cwd })
        for (let filename of Object.keys(results)) {
          logger.debug(`Permission changed: ${path.relative(cwd, filename)} ${mode}`)
        }
      }
    })
  }

  return Object.assign(task, {})
}

module.exports = chmod


