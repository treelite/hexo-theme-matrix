/**
 * @file Inline SVG
 * @author treelite(c.xinle@gmail.com)
 */

var fs = require('fs');
var path = require('path');
var DIR = path.resolve(__dirname, '../res');
var REG_PATH = /<path([^>]+)>/i;
var REG_D = /d\s*=\s*"([^"]+)"/i;
var REG_VIEW_BOX = /viewBox\s*=\s*"([^"]+)"/i;

hexo.extend.helper.register('svg', function (filename, width, height, className) {
    var file = path.resolve(DIR, filename + '.svg');
    file = fs.readFileSync(file, 'utf-8');
    var viewBox = file.match(REG_VIEW_BOX)[1] || '';
    var p = file.match(REG_PATH)[1] || '';
    p = p.match(REG_D)[1];

    if (!path) {
        return '';
    }

    return ''
        + '<svg' + (className ? ' className="' + className + '" ' : ' ') + 'viewBox="' + viewBox + '" version="1.1" width="' + width + '" height="' + height + '">'
        +   '<path fill-rule="evenodd" d="' + p + '" />'
        + '</svg>';
});
