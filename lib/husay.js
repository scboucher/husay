/** Created by Samuel on 2015-02-20.*/
'use strict';
var chalk = require('chalk');
var husay = (function () {

    var coreColor = 'red', accentColor = 'white';
    var COLOR = {red:'red',cyan:'cyan',yellow:'yellow', white:'white'};
    return {
        endSay: function (hubot, lines) {
            lineOne = lines[0]
            if (hubot === undefined) {
                hubot = 'HUBOT';
            } else {
                hubot.substring(0, 5);
            }
            if (lineOne === undefined) {
                lineOne = '   Self-replication process   ';
            } else {
                lineOne.substring(0, '   Self-replication process   '.length-3);
                lineOne = '|'+lineOne+'  |';
            }

            return '                     _____________________________  ' +
                "\n" +
                ' _____              /                             \\ ' +
                "\n" +
                ' \\    \\             |   Self-replication process   |'
                    .replace('|   Self-replication process   |', lineOne) +
                "\n" +
                ' |    |    ' +
                chalk[coreColor]('_____') +
                '    |          complete...         |' +
                "\n" +
                ' |__' +
                chalk[accentColor]('\\\\') +
                '|   ' +
                chalk[coreColor]('/') +
                chalk[accentColor]('_____') +
                chalk[coreColor]('\\') +
                '   \\     Good luck with that.    / ' +
                "\n" +
                '   ' +
                chalk[accentColor]('|//') +
                chalk[coreColor]('+  |') +
                chalk[accentColor]('[^_/\\_]') +
                chalk[coreColor]('|') +
                '   /----------------------------  ' +
                "\n" +
                '  ' +
                chalk[coreColor]('|   | _|___') +
                '@@' +
                chalk[coreColor]('__|__') +
                '                                ' +
                "\n" +
                '  ' +
                chalk[coreColor]('+===+/  ///     ') +
                chalk[accentColor]('\\_\\') +
                '                               ' +
                "\n" +
                '   ' +
                chalk[accentColor]('| |_') +
                chalk[coreColor]('\\ /// HUBOT/'.replace('HUBOT', hubot)) +
                chalk[accentColor]('\\\\') +
                '                             ' +
                "\n" +
                '   ' +
                chalk[accentColor]('|___/') +
                chalk[coreColor]('\\//      /') +
                chalk[accentColor]('  \\\\') +
                '                            ' +
                "\n" +
                '         ' +
                chalk[coreColor]('\\      /   +---+') +
                '                            ' +
                "\n" +
                '          ' +
                chalk[coreColor]('\\____/    |   |') +
                '                            ' +
                "\n" +
                '           ' +
                chalk[accentColor]('| //|') +
                '    ' +
                chalk[coreColor]('+===+') +
                '                            ' +
                "\n" +
                '            ' +
                chalk[accentColor]('\\//') +
                '      |xx|                            ' +
                "\n";
        },
        startSay: function () {
            return '                     _____________________________  ' +
                "\n" +
                '                    /                             \\ ' +
                "\n" +
                ' ' +
                chalk[accentColor]('  //\\') +
                '              |      Extracting input for    |' +
                "\n" +
                ' ' +
                chalk[accentColor](' ////\\  ') +
                '  ' +
                chalk[coreColor]('_____') +
                '    |   self-replication process   |' +
                "\n" +
                ' ' +
                chalk[accentColor]('//////\\  ') +
                chalk[coreColor]('/') +
                chalk[accentColor]('_____') +
                chalk[coreColor]('\\') +
                '   \\                             / ' +
                "\n" +
                ' ' +
                chalk[accentColor]('=======') +
                chalk[coreColor](' |') +
                chalk[accentColor]('[^_/\\_]') +
                chalk[coreColor]('|') +
                '   /----------------------------  ' +
                "\n" +
                '  ' +
                chalk[coreColor]('|   | _|___') +
                '@@' +
                chalk[coreColor]('__|__') +
                '                                ' +
                "\n" +
                '  ' +
                chalk[coreColor]('+===+/  ///     ') +
                chalk[accentColor]('\\_\\') +
                '                               ' +
                "\n" +
                '   ' +
                chalk[accentColor]('| |_') +
                chalk[coreColor]('\\ /// HUBOT/') +
                chalk[accentColor]('\\\\') +
                '                             ' +
                "\n" +
                '   ' +
                chalk[accentColor]('|___/') +
                chalk[coreColor]('\\//      /') +
                chalk[accentColor]('  \\\\') +
                '                            ' +
                "\n" +
                '         ' +
                chalk[coreColor]('\\      /   +---+') +
                '                            ' +
                "\n" +
                '          ' +
                chalk[coreColor]('\\____/    |   |') +
                '                            ' +
                "\n" +
                '           ' +
                chalk[accentColor]('| //|') +
                '    ' +
                chalk[coreColor]('+===+') +
                '                            ' +
                "\n" +
                '            ' +
                chalk[accentColor]('\\//') +
                '      |xx|                            ' +
                "\n";
        },
        setColors: function (core, accent) {
            coreColor = core;
            accentColor = accent;
        }
    };
}()
);

module.exports = husay;