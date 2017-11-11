/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const ponContext = require('pon-context')
const {ok} = require('assert')

describe('define', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Define', async () => {
    const ctx = ponContext({
      cwd: `${__dirname}/../tmp/testing-define`
    })
    const task = define({
      mkdir: [['foo', 'bar']]
    })
    ok(task)

  })
})

/* global describe, before, after, it */
