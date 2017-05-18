/**
 * Test case for unlink.
 * Runs with mocha.
 */
'use strict'

const unlink = require('../lib/unlink.js')
const assert = require('assert')
const writeout = require('writeout')
const ponContext = require('pon-context')
const co = require('co')

describe('unlink', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Unlink', () => co(function * () {
    let cwd = `${__dirname}/../tmp/testing-unlink`
    let filename = cwd + '/hoge.txt'
    yield writeout(filename, 'hogehoge', { mkdirp: true, force: true })
    let task = unlink(cwd + '/*.txt')
    let ctx = ponContext({})
    yield task(ctx)
  }))
})

/* global describe, before, after, it */
