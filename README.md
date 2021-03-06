pon-task-fs
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/pon-task-fs
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/pon-task-fs
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/pon-task-fs.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/pon-task-fs
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/pon-task-fs.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/pon-task-fs/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/pon-task-fs
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/pon-task-fs.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/pon-task-fs.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/pon-task-fs
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/pon-task-fs.svg
[bd_npm_url]: http://www.npmjs.org/package/pon-task-fs
[bd_npm_shield_url]: http://img.shields.io/npm/v/pon-task-fs.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Pon task for file system

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install pon-task-fs --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
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

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Signature.md.hbs" Start -->

<a name="section-doc-guides-03-signature-md"></a>

Signatures
---------


### `chmod(permissions, options) -> function`

Define task

| Param | type | Description |
| ---- | --- | ----------- |
| permissions | Object.&lt;string, string&gt; |  File pattern and permissions |
| options | Object |  Optional settings |


### `concat(src, dest, options) -> function`

Concat multiple file into one

| Param | type | Description |
| ---- | --- | ----------- |
| src | string&amp;#124;string[] |  |
| dest | function |  |
| options | Object |  Optional settings |


### `cp(linkages, options) -> function`

Define task

| Param | type | Description |
| ---- | --- | ----------- |
| linkages | Object.&lt;string, string&gt; |  Directory copy ruling |
| options | Object |  Optional settings |
| options.force | boolean |  Force create |
| options.ignore | string[] |  Ignore patterns to copy |


### `define(options) -> function`

Define task

| Param | type | Description |
| ---- | --- | ----------- |
| options | Object |  Optional settings |
| options.mkdir | Array |  Options for mkdir |


### `del(Patterns, options) -> function`

Define task

| Param | type | Description |
| ---- | --- | ----------- |
| Patterns | string&amp;#124;string[] |  File pattern to delete |
| options | Object |  Optional settings |


### `mkdir(dirnames, options) -> function`

Define task

| Param | type | Description |
| ---- | --- | ----------- |
| dirnames | string[] |  Directory name to make |
| options | Object |  Optional settings |


### `symlink(linkages, options) -> function`

Define symlink task

| Param | type | Description |
| ---- | --- | ----------- |
| linkages | Object.&lt;string, string&gt; |  File link ruling |
| options | Object |  Optional settings |
| options.force | boolean |  Force create |
| options.preferDir | boolean |  Create directory if source path does'nt exist |


### `write(filename, content, options) -> function`

Define task

| Param | type | Description |
| ---- | --- | ----------- |
| filename | string |  File name write |
| content | string&amp;#124;Buffer&amp;#124;function |  Content or content creator function |
| options | Object |  Optional settings |



<!-- Section from "doc/guides/03.Signature.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [Apache-2.0 License](https://github.com/realglobe-Inc/pon-task-fs/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [Pon][pon_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[pon_url]: https://github.com/realglobe-Inc/pon
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
