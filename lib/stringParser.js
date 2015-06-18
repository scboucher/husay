/**
 * Created by samuelboucher on 2015-06-16.
 */
var _ = require('lodash'),
    chalk = require('chalk');

var Parser = (function () {
    return {
        name: function (hubot) {
            return hubot.substring(0, 5);
        },
        firstLine: function (line) {
            var length = 28;
            if (line.length >= length) {
                return line.substring(0, length);
            } else {
                var whiteSpace = length - line.length;
                var righWhiteSpace = whiteSpace - Math.floor(whiteSpace / 2);
                return _.padRight(_.padLeft(line, length - righWhiteSpace), length);
            }
        },
        color: function (color) {
            if (typeOf(color) !== 'string') {
                return false;
            } else if (_.contains(chalk.styles, color)) {
                return true;

            } else {
                return false;
            }
        }
    }
}());
module.exports = Parser;