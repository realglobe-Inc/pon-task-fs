/**
 * Pon task for file system
 * @module pon-task-fs
 * @version 2.2.0
 */

'use strict'

const define = require('./define')
const chmod = require('./chmod')
const mkdir = require('./mkdir')
const unlink = require('./unlink')

let lib = define.bind(this)

Object.assign(lib, define, {
  define,
  chmod,
  mkdir,
  unlink
})

module.exports = lib
