/**
 * Test case for write.
 * Runs with mocha.
 */
'use strict'

const write = require('../lib/write.js')
const assert = require('assert')

describe('write', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Write', async () => {
    await write(
      `${__dirname}/../tmp/hoge.txt`,
      () => 'hoge'
    )
  })
})

/* global describe, before, after, it */
