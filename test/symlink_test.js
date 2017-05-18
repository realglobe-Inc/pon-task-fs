/**
 * Test case for symlink.
 * Runs with mocha.
 */
'use strict'

const symlink = require('../lib/symlink.js')
const ponContext = require('pon-context')
const assert = require('assert')
const co = require('co')

describe('symlink', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Symlink', () => co(function * () {
    let task = symlink({
      [__filename]: `foo.js`
    })
    let ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-symlink`
    })
    yield task(ctx)
  }))
})

/* global describe, before, after, it */
