'use strict';
var husay = require('./lib/husay');
module.exports = function (str) {
    console.log(str || 'Rainbow');
    husay.setColors('yellow', 'cyan');
    console.log(husay.endSay(' DBOT', 'This is a fucking test calis'));
    console.log(husay.endSay('JOBOT'));

};
