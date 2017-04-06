/**
 * Test case for chmod.
 * Runs with mocha.
 */
'use strict'

const chmod = require('../lib/chmod.js')
const assert = require('assert')
const writeout = require('writeout')
const ponContext = require('pon-context')
const co = require('co')

describe('chmod', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Chmod', () => co(function * () {
    let cwd = `${__dirname}/../tmp/testing-chmod`
    let filename = cwd + '/hoge.txt'
    yield writeout(filename, 'hogehoge', { mkdirp: true, force: true })
    let task = chmod({
      [filename]: '444'
    })
    let ctx = ponContext({
      cwd: cwd
    })
    yield task(ctx)
  }))
})

/* global describe, before, after, it */
