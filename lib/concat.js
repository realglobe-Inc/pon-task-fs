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
const write = require('./write')
const { EOL } = require('os')
const watch = require('pon-task-watch')
const { readFileAsync, statAsync } = require('asfs')

/** @lends concat */
function concat(pattern, dest, options = {}) {
  const {
    watchDelay = 100,
    watchTargets = [],
    joiner = EOL
  } = options

  async function task(ctx) {
    const { cwd, logger } = ctx

    const filenames = await aglob(pattern)
    const stats = (await Promise.all(
      filenames.map((filename) =>
        statAsync(filename).catch(() => null)
      )
    ))
    const contents = await Promise.all(
      filenames.map((filename) =>
        readFileAsync(filename)))
    const lastUpdate = Math.max(
      ...stats.map((state) => state && state.mtime).filter(Boolean)
    )
    const destState = await statAsync(dest).catch(() => null)
    const skip = !!lastUpdate && destState && (lastUpdate <= destState.mtime)
    if (skip) {
      return null
    }
    const content = contents.map(String).join(joiner)
    return write(dest, content)(ctx)
  }

  return Object.assign(task,
    {
      async watch(ctx) {
        const { cwd } = ctx
        const srcPattern = [].concat(pattern).filter(Boolean)
        const targets = [].concat(
          watchTargets,
          srcPattern
        ).filter((filename, i, arr) => arr.indexOf(filename) === i)
        return watch(
          targets,
          async (event, changed) => task(ctx),
          { delay: watchDelay }
        )(ctx)
      }
    }
  )

}

module.exports = concat
