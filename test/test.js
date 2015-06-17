/*global describe, it */
/*jshint expr: true*/
/* jshint -W024 */
'use strict';
var parser = require('../lib/stringParser');
var expect = require('chai').expect;

describe('husay node module', function () {
  it(' tests the namePatser method', function () {
    expect(parser.nameParser('Hubot')).to.equal('Hubot');
    expect(parser.nameParser('Hubotdfgdgfdfg')).to.equal('Hubot');
    expect(parser.nameParser('Hubo')).to.equal('Hubo');
    expect(parser.firstLine('Hubo')).to.equal('/            Hubo             \\');
  });
});
