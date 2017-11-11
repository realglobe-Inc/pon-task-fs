/**
 * Concat multiple file into one
 * @function concat
 * @param {string|string[]} src
 * @param {function} dest
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const aglob = require('aglob')
const amkdirp = require('amkdirp')
const fs = require('fs')
const write = require('./write')
const {EOL} = require('os')
const {readFileAsync} = require('asfs')

/** @lends concat */
function concat (src, dest, options = {}) {
  const {joiner = EOL} = options

  async function task (ctx) {
    const {cwd, logger} = ctx

    const contents = await Promise.all(
      (await aglob(src))
        .map((src) =>
          readFileAsync(src))
    )

    const content = contents.map(String).join(joiner)
    return write(dest, content)(ctx)
  }

  return task

}

module.exports = concat