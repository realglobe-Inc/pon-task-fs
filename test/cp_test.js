/**
 * Test case for cp.
 * Runs with mocha.
 */
'use strict'

const cp = require('../lib/cp.js')
const ponContext = require('pon-context')
const assert = require('assert')

describe('cp', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Copy', async () => {
    const task = cp({
      '../../test': `foo`
    }, {force: true})
    const ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-cp`
    })
    await task(ctx)
  })

  it('Copy a file', async () => {
    const task = cp({
      [__filename]: `${__dirname}/../tmp/foo.txt`
    }, {force: true})
    const ctx = ponContext({})
    await task(ctx)
  })
})

/* global describe, before, after, it */
