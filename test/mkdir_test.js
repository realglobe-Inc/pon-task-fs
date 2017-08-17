/**
 * Test case for mkdir.
 * Runs with mocha.
 */
'use strict'

const mkdir = require('../lib/mkdir.js')
const ponContext = require('pon-context')
const assert = require('assert')


describe('mkdir', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Mkdir', async () => {
    let task = mkdir([
      'foo',
      'foo/bar',
      'foo/baz/' + new Date().getTime()
    ])
    let ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-mkdir`
    })
    await task(ctx)
  })
})

/* global describe, before, after, it */
