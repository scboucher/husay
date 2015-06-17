/*global describe, it */
'use strict';
var assert = require('assert');
var parser = require('../lib/stringParser')
var husay = require('../');
var should = require('chai').should();

describe('husay node module', function () {
  it(' tests the namePatser method', function () {
    parser.nameParser('Hubot').should.equal('Hubot');
    parser.nameParser('Hubotdfgdgfdfg').should.equal('Hubot');
    parser.nameParser('Hubo').should.equal('Hubo');
    parser.firstLine('Hubo').should.equal('/            Hubo             \\');
  });
});
