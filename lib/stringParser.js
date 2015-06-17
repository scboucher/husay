/**
 * Created by samuelboucher on 2015-06-16.
 */
var _ =require('lodash');
var stringParser = (function () {
    return {
        nameParser: function (hubot) {
            return hubot.substring(0, 5);
        },
        firstLine: function (line) {
            if (line.length >= 31) {
                return '/' + line.substring(0, 29) + '\\';
            } else {
                var whiteSpace = 29 - line.length;
                var righWhiteSpace = whiteSpace - Math.floor(whiteSpace/2);
                return '/' + _.padRight(_.padLeft(line,29 -righWhiteSpace),29) +"\\";
            }
        }
    }
}());
module.exports = stringParser;