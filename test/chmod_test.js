/**
 * Test case for chmod.
 * Runs with mocha.
 */
'use strict'

const chmod = require('../lib/chmod.js')
const assert = require('assert')
const writeout = require('writeout')
const ponContext = require('pon-context')

describe('chmod', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Chmod', async () => {
    let cwd = `${__dirname}/../tmp/testing-chmod`
    let filename = cwd + '/hoge.txt'
    await writeout(filename, 'hogehoge', {mkdirp: true, force: true})
    let task = chmod({
      [filename]: '444'
    })
    let ctx = ponContext({
      cwd: cwd
    })
    await task(ctx)
  })
})

/* global describe, before, after, it */
