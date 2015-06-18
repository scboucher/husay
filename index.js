'use strict';
var husay = require(__dirname + '/lib/husay');
module.exports = function (str, core, accent) {
    //console.log(str || 'Rainbow');

    core = core || 'yellow';
    accent = accent || 'cyan';
    husay.setColors(core, accent);
    console.log(husay.endSay(' DBOT', str));
};
