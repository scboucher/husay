'use strict';
var husay = require('./lib/husay');
module.exports = function (str, main, accent) {
    //console.log(str || 'Rainbow');
    main = main || 'yellow'
    accent = accent || 'cyan'
    husay.setColors(main, accent);
    console.log(husay.endSay(' DBOT', str));
};
