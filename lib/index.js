/**
 * Pon task for file system
 * @module pon-task-fs
 * @version 1.0.0
 */

'use strict'

const define = require('./define')
const chmod = require('./chmod')
const mkdir = require('./mkdir')

let lib = define.bind(this)

Object.assign(lib, define, {
  define,
  mkdir,
  chmod
})

module.exports = lib
