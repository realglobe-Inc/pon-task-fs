/**
 * Define task
 * @function write
 * @param {string} filename - File name write
 * @param {string|Buffer|function} content - Content or content creator function
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const path = require('path')
const {statAsync, mkdirpAsync, writeFileAsync} = require('asfs')

/** @lends write */
function write (filename, content, options = {}) {
  async function task (ctx) {
    const {cwd, logger} = ctx
    await mkdirpAsync(path.dirname(filename))
    const from = await statAsync(filename).catch((e) => null)
    await writeFileAsync(
      filename,
      typeof content === 'function' ? content() : content,
      options)
    const to = await statAsync(filename).catch((e) => null)

    const unchanged = from && to && from.size === to.size
    if (unchanged) {
      return
    }
    logger.debug(`File generated: ${filename}`)
  }

  return Object.assign(task, {})
}

module.exports = write


