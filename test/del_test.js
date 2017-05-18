/**
 * Test case for del.
 * Runs with mocha.
 */
'use strict'

const del = require('../lib/del.js')
const assert = require('assert')
const writeout = require('writeout')
const ponContext = require('pon-context')
const co = require('co')

describe('del', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Unlink', () => co(function * () {
    let cwd = `${__dirname}/../tmp/testing-del`
    let filename = cwd + '/hoge.txt'
    yield writeout(filename, 'hogehoge', { mkdirp: true, force: true })
    let task = del(cwd + '/*.txt')
    let ctx = ponContext({})
    yield task(ctx)
  }))
})

/* global describe, before, after, it */
