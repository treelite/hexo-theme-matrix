/**
 * @file hexo helper
 * @author treelite(c.xinle@gmail.com)
 */

var tags;

hexo.extend.helper.register('renderTags', function (ids) {

    var tagPath = this.config.root + this.config.tag_dir + '/';

    if (!tags) {
        tags = {};
        this.site.tags.forEach(function (item) {
            tags[item['_id']] = item.name;
        });
    }

    var res = [];
    ids.forEach(function (id) {
        res.push('<a href="' + tagPath + tags[id] + '/">' + tags[id] + '</a>');
    });

    return res.join('');
});
