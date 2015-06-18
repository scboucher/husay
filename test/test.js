/*global describe, it */
/*jshint expr: true*/
/* jshint -W024 */
'use strict';
var parser = require('../lib/stringParser');
var expect = require('chai').expect;

describe('husay node module', function () {
  it(' tests the namePatser method', function () {
    expect(parser.name('Hubot')).to.equal('Hubot');
    expect(parser.name('Hubotdfgdgfdfg')).to.equal('Hubot');
    expect(parser.name('Hubo')).to.equal('Hubo');
    expect(parser.firstLine('Hubo')).to.equal('            Hubo            ');
  });
});
