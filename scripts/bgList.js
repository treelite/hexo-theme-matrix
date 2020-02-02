/**
 * @file Collect all background images
 * @author treelite(c.xinle@gmail.com)
 */

const fs = require('fs');
const path = require('path');
const EXT_NAMES = ['jpg', 'png', 'gif'];

hexo.extend.helper.register('bgList', () => {
    const root = hexo.config.root;
    const dir = hexo.config.bg_dir;
    const dirs = dir.split('/');
    dirs.unshift(hexo.config.source_dir);
    const localDir = path.resolve.apply(path, dirs);
    if (!fs.existsSync(localDir)) {
        return '';
    }

    const imgs = [];
    const files = fs.readdirSync(localDir);
    for (let i = 0, file; file = files[i]; i++) {
        const extname = path.extname(file).substring(1);
        if (EXT_NAMES.indexOf(extname.toLowerCase()) >= 0) {
            imgs.push(root + [dir, file].join('/'));
        }
    }

    return imgs.join(';');
});
