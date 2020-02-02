/**
 * @file External links
 * @author treelite(c.xinle@gmail.com)
 */

const LINKS = ['email', 'github', 'douban', 'feed'];

const TEXT = {
    feed: 'RSS'
};

const PREFIX_URL = {
    email: 'mailto:',
    github: 'https://github.com/',
    douban: 'http://www.douban.com/people/'
};

hexo.extend.helper.register('extLinks', () => {
    const html = [];
    LINKS.forEach(function (name) {
        const value = hexo.config[name];
        if (!value) {
            return;
        }

        const text = TEXT[name] || (name.charAt(0).toUpperCase() + name.substring(1));

        let src;
        if (name === 'feed') {
            src = hexo.config.root + hexo.config.feed.path;
        }
        else {
            src = PREFIX_URL[name] + value;
        }

        html.push(
            '<a href="' + src + '" ' + (name !== 'email' ? 'target="_blank"' : '') + ' title="' + text + '" class="' + name + '"></a>'
        );
    });

    if (html.length) {
        html.unshift('<section class="links">');
        html.push('</section>');
    }

    return html.join('');
});
