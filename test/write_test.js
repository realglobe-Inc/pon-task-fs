/**
 * Test case for write.
 * Runs with mocha.
 */
'use strict'

const write = require('../lib/write.js')
const assert = require('assert')
const ponContext = require('pon-context')

describe('write', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Write', async () => {
    const ctx = ponContext()
    await write(
      `${__dirname}/../tmp/hoge-write.txt`,
      'hi?'
    )(ctx)
  })

  it('Write json', async () => {
    const ctx = ponContext()
    await write.json(
      `${__dirname}/../tmp/hoge-write/a.json`,
      {name:'This is a'},
    )(ctx)
  })
})

/* global describe, before, after, it */
