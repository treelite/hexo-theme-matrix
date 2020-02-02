/**
 * @file Inline SVG
 * @author treelite(c.xinle@gmail.com)
 */

const fs = require('fs');
const path = require('path');
const DIR = path.resolve(__dirname, '../res');
const REG_PATH = /<path([^>]+)>/i;
const REG_D = /d\s*=\s*"([^"]+)"/i;
const REG_VIEW_BOX = /viewBox\s*=\s*"([^"]+)"/i;

hexo.extend.helper.register('svg', (filename, width, height, className) => {
    let file = path.resolve(DIR, filename + '.svg');
    file = fs.readFileSync(file, 'utf-8');
    const viewBox = file.match(REG_VIEW_BOX)[1] || '';
    let p = file.match(REG_PATH)[1] || '';
    p = p.match(REG_D)[1];

    if (!path) {
        return '';
    }

    return ''
        + '<svg' + (className ? ' className="' + className + '" ' : ' ') + 'viewBox="' + viewBox + '" version="1.1" width="' + width + '" height="' + height + '">'
        +   '<path fill-rule="evenodd" d="' + p + '" />'
        + '</svg>';
});
