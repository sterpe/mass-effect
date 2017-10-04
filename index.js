// @flow
'use strict'

const readme /*: string */ = require('fs')
  .readFileSync('README.md')
  .toString()

module.exports = readme
