/**
 * Define task
 * @function cp
 * @param {Object.<string, string>} linkages - Directory copy ruling
 * @param {Object} [options={}] - Optional settings
 * @param {boolean} [options.force=false] - Force create
 * @returns {function} Defined task
 */
'use strict'

const path = require('path')
const {copyDirAsync, existsAsync, statAsync} = require('asfs')
const filecopy = require('filecopy')

/** @lends cp */
function cp (linkages = {}, options = {}) {
  const {force = true} = options

  async function task (ctx) {
    const {cwd, logger} = ctx
    for (const src of Object.keys(linkages)) {
      const dest = linkages[src]
      const absSrc = path.resolve(cwd, src)
      const absDest = path.resolve(cwd, dest)
      const srcExists = await existsAsync(absSrc)
      if (!srcExists) {
        console.warn(`Source not exists: ${absSrc}`)
        continue
      }
      const destExists = await existsAsync(absDest)
      if (destExists && !force) {
        continue
      }

      const isDir = await statAsync(absSrc).then((stat) => stat.isDirectory()).catch(() => false)
      if (isDir) {
        await copyDirAsync(absSrc, absDest)
        logger.debug(`Directory copied: ${path.relative(cwd, absSrc)} -> ${path.relative(cwd, absDest)}`)
      } else {
        await filecopy(src, dest, {mkdirp: true})
        logger.debug(`File copied: ${path.relative(cwd, absSrc)} -> ${path.relative(cwd, absDest)}`)
      }
    }
  }

  return Object.assign(task, {})
}

module.exports = cp
