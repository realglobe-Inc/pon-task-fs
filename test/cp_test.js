/**
 * Test case for cp.
 * Runs with mocha.
 */
'use strict'

const cp = require('../lib/cp.js')
const ponContext = require('pon-context')
const assert = require('assert')
const co = require('co')

describe('cp', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Copy', () => co(function * () {
    let task = cp({
      '../../test': `foo`
    }, { force: true })
    let ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-cp`
    })
    yield task(ctx)
  }))
})

/* global describe, before, after, it */
