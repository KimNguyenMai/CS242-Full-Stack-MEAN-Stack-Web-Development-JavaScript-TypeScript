"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler = function (req, res) { return res.render('address', {
    title: 'This is the Address page',
    content: 'This is the content of Address page'
}); };
exports.default = handler;
