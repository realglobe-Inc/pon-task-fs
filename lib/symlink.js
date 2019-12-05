/**
 * Define symlink task
 * @function symlink
 * @param {Object.<string, string>} linkages - File link ruling
 * @param {Object} [options={}] - Optional settings
 * @param {boolean} [options.force=false] - Force create
 * @param {boolean} [options.prefirDir=false] - Create directory if source path does'nt exist
 * @returns {function} Defined task
 */
'use strict'

const path = require('path')
const amkdirp = require('amkdirp')
const {existsAsync} = require('asfs')
const filelink = require('filelink')

/** @lends symlink */
function symlink (linkages = {}, options = {}) {
  const {force = true, preferDir = false} = options

  async function task (ctx) {
    const {cwd, logger} = ctx
    for (const src of Object.keys(linkages)) {
      const dest = linkages[src]
      const srcExists = await existsAsync(src)
      if (!srcExists) {
        if (preferDir) {
          await amkdirp(src)
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


