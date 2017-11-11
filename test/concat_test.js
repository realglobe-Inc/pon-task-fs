/**
 * Test case for concat.
 * Runs with mocha.
 */
'use strict'

const concat = require('../lib/concat.js')
const assert = require('assert')
const ponContext = require('pon-context')

describe('concat', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Concat', async () => {
    const ctx = ponContext({})
    const task = concat(
      `${__dirname}/*.js`,
      `${__dirname}/../tmp/testing-concat/all.txt`
    )
    await task(ctx)
  })
})

/* global describe, before, after, it */
