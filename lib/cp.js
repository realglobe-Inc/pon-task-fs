/**
 * Define task
 * @function cp
 * @param {Object.<string, string>} linkages - Directory copy ruling
 * @param {Object} [options={}] - Optional settings
 * @param {boolean} [options.force=false] - Force create
 * @returns {function} Defined task
 */
'use strict'

const co = require('co')
const path = require('path')
const { copyDirAsync, existsAsync } = require('asfs')

/** @lends cp */
function cp (linkages = {}, options = {}) {
  let { force = true } = options
  function task (ctx) {
    let { cwd, logger } = ctx
    return co(function * () {
      for (let src of Object.keys(linkages)) {
        let dest = linkages[ src ]
        let absSrc = path.resolve(cwd, src)
        let absDest = path.resolve(cwd, dest)
        let srcExists = yield existsAsync(absSrc)
        if (!srcExists) {
          console.warn(`Source not exists: ${absSrc}`)
          continue
        }
        let destExists = yield existsAsync(absDest)
        if (destExists && !force) {
          continue
        }
        yield copyDirAsync(absSrc, absDest)
        logger.debug(`Directory copied: ${path.relative(cwd, absSrc)} -> ${path.relative(cwd, absDest)}`)
      }
    })
  }

  return Object.assign(task, {})
}

module.exports = cp
