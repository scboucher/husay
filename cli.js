#!/usr/bin/env node
'use strict';
var meow = require('meow');
var husay = require('./');

var cli = meow({
  help: [
    'Usage',
    '  husay <input>',
    '',
    'Example',
    '  husay Unicorn'
  ].join('\n')
});

husay(cli.input[0]);
