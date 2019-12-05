/**
 * Pon task for file system
 * @module pon-task-fs
 * @version 3.2.0
 */

'use strict'

const define = require('./define')

let lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
