import plugin from './plugin';

if (!window.$docsify) {
    window.$docsify = {};
}

const props = window.$docsify.infographicConfig || { width: '100%', height: '100%' };

window.$docsify.plugins = (window.$docsify.plugins || []).concat(plugin(props));
