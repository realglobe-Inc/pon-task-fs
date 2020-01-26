
'use strict'

const path = require('path')
const fs = require('fs')
const { mkdirpAsync} = require('asfs')

/**
 * Define task
 * @function mkdir
 * @param {string[]} dirnames - Directory name to make
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
function mkdir (dirnames, options = {}) {
  async function task (ctx) {
    const {cwd, logger} = ctx
    for (let dirname of [].concat(dirnames).filter(Boolean)) {
      dirname = path.resolve(cwd, dirname)
      let exists = await new Promise((resolve) => fs.exists(dirname, resolve))
      if (!exists) {
        await mkdirpAsync(dirname)
        logger.trace('Directory generated:', path.relative(cwd, dirname))
      }
    }
  }

  return Object.assign(task, {})
}

module.exports = mkdir


