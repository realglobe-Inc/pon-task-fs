/**
 * Test case for del.
 * Runs with mocha.
 */
'use strict'

const del = require('../lib/del.js')
const assert = require('assert')
const writeout = require('writeout')
const ponContext = require('pon-context')


describe('del', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Unlink', async () => {
    let cwd = `${__dirname}/../tmp/testing-del`
    let filename = cwd + '/hoge.txt'
    await writeout(filename, 'hogehoge', { mkdirp: true, force: true })
    let task = del(cwd + '/*.txt')
    let ctx = ponContext({})
    await task(ctx)
  })
})

/* global describe, before, after, it */
