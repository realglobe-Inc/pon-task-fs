/**
 * Define symlink task
 * @function symlink
 * @param {Object.<string, string>} linkages - File link ruling
 * @param {Object} [options={}] - Optional settings
 * @param {boolean} [options.force=false] - Force create
 * @returns {function} Defined task
 */
'use strict'

const co = require('co')
const path = require('path')
const { existsAsync } = require('asfs')
const filelink = require('filelink')

/** @lends symlink */
function symlink (linkages = {}, options = {}) {
  let { force = true } = options

  function task (ctx) {
    let { cwd, logger } = ctx
    return co(function * () {
      for (let src of Object.keys(linkages)) {
        let dest = linkages[ src ]
        let srcExists = yield existsAsync(src)
        if (!srcExists) {
          console.warn(`Source not exists: ${src}`)
          continue
        }
        let changed = yield filelink(src, dest, { cwd, force, mkdirp: true })
        if (changed) {
          logger.debug(`Symlink changed: ${path.relative(cwd, src)} -> ${path.relative(cwd, dest)}`)
        }
      }
    })
  }

  return Object.assign(task, {})
}

module.exports = symlink


