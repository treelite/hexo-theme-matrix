/**
 * @file Collect all background images
 * @author treelite(c.xinle@gmail.com)
 */

var fs = require('fs');
var path = require('path');
var EXT_NAMES = ['jpg', 'png', 'gif'];

hexo.extend.helper.register('bgList', function () {
    var root = hexo.config.root;
    var dir = hexo.config.bg_dir;
    var dirs = dir.split('/');
    dirs.unshift(hexo.config.source_dir);
    var localDir = path.resolve.apply(path, dirs);
    if (!fs.existsSync(localDir)) {
        return '';
    }

    var imgs = [];
    var files = fs.readdirSync(localDir);
    for (var i = 0, file; file = files[i]; i++) {
        var extname = path.extname(file).substring(1);
        if (EXT_NAMES.indexOf(extname.toLowerCase()) >= 0) {
            imgs.push(root + [dir, file].join('/'));
        }
    }

    return imgs.join(';');
});
