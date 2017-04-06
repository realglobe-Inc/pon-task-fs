'use strict'

const pon = require('pon')
const { mkdir } = require('pon-task-fs')

async function tryExample () {
  let run = pon({
    'fs:mkdir': mkdir([
      'doc',
      'example',
      'lib',
      'test',
      'tmp'
    ])
  })

  run('fs:*')
}

tryExample()
