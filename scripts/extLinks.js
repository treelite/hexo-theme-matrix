/**
 * @file External links
 * @author treelite(c.xinle@gmail.com)
 */

var LINKS = ['email', 'github', 'douban', 'feed'];

var TEXT = {
    feed: 'RSS'
};

var PREFIX_URL = {
    email: 'mailto:',
    github: 'https://github.com/',
    douban: 'http://www.douban.com/people/'
};

hexo.extend.helper.register('extLinks', function () {
    var html = [];
    LINKS.forEach(function (name) {
        var value = hexo.config[name];
        if (!value) {
            return;
        }

        var text = TEXT[name] || (name.charAt(0).toUpperCase() + name.substring(1));
        html.push(
            '<a href="' + PREFIX_URL[name] + value + '" ' + (name !== 'email' ? 'target="_blank"' : '') + ' title="' + text + '" class="' + name + '"></a>'
        );
    });

    if (html.length) {
        html.unshift('<section class="links">');
        html.push('</section>');
    }

    return html.join('');
});
