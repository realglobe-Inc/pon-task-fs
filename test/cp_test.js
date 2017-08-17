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
    let task = cp({
      '../../test': `foo`
    }, { force: true })
    let ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-cp`
    })
    await task(ctx)
  })
})

/* global describe, before, after, it */
