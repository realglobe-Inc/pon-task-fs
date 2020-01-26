
'use strict'

const path = require('path')
const {existsAsync, mkdirpAsync} = require('asfs')
const filelink = require('filelink')

/**
 * Define symlink task
 * @function symlink
 * @param {Object.<string, string>} linkages - File link ruling
 * @param {Object} [options={}] - Optional settings
 * @param {boolean} [options.force=false] - Force create
 * @param {boolean} [options.preferDir=false] - Create directory if source path does'nt exist
 * @returns {function} Defined task
 */
function symlink (linkages = {}, options = {}) {
  const {force = true, preferDir = false} = options

  async function task (ctx) {
    const {cwd, logger} = ctx
    for (const src of Object.keys(linkages)) {
      const dest = linkages[src]
      const srcExists = await existsAsync(src)
      if (!srcExists) {
        if (preferDir) {
          await mkdirpAsync(src)
        } else {
          console.warn(`Source not exists: ${src}`)
          continue
        }
      }
      const changed = await filelink(src, dest, {cwd, force, mkdirp: true})
      if (changed) {
        logger.debug(`Symlink changed: ${path.relative(cwd, src)} -> ${path.relative(cwd, dest)}`)
      }
    }
  }

  return Object.assign(task, {})
}

module.exports = symlink


