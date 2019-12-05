/**
 * Test case for symlink.
 * Runs with mocha.
 */
'use strict'

const symlink = require('../lib/symlink.js')
const ponContext = require('pon-context')
const assert = require('assert')


describe('symlink', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Symlink', async () => {
    const task = symlink({
      [__filename]: `foo.js`,
      'bar.js': 'shim/bar.js',
    }, {
      force: true,
    })
    const ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-symlink`
    })
    await task(ctx)
  })

  it('preferDir option', async () => {
    const task = symlink({
      ['path/to/dir']: 'shim/path/to/dir'
    }, {
      force: true,
      preferDir: true,
    })
    const ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-symlink`
    })
    await task(ctx)
  })
})

/* global describe, before, after, it */
