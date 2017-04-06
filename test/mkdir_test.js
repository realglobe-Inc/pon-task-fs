/**
 * Test case for mkdir.
 * Runs with mocha.
 */
'use strict'

const mkdir = require('../lib/mkdir.js')
const ponContext = require('pon-context')
const assert = require('assert')
const co = require('co')

describe('mkdir', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Mkdir', () => co(function * () {
    let task = mkdir([
      'foo',
      'foo/bar',
      'foo/baz/' + new Date().getTime()
    ])
    let ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-mkdir`
    })
    yield task(ctx)
  }))
})

/* global describe, before, after, it */
