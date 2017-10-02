// @flow
'use strict'

const md /*: string */ = require('fs')
  .readFileSync('README.md')
  .toString()

module.exports = md
