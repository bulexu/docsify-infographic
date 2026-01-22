const plugin = (config) => (hook) => {
    // Parse dimensions from data-lang attribute
    const parseDimensions = (lang) => {
        const match = lang.match(/^infographic(?:\s+(\d+\.?\d*%|\d+px)\*(\d+\.?\d*%|\d+px))?$/i);
        if (match && match[1] && match[2]) {
            return { width: match[1], height: match[2] };
        }
        return null;
    };

    hook.afterEach((html, next) => {
        const htmlElement = document.createElement('div');
        htmlElement.innerHTML = html;

        htmlElement.querySelectorAll('pre[data-lang^="infographic"]').forEach((element) => {
            const replacement = document.createElement('div');
            replacement.textContent = element.textContent;
            replacement.classList.add('infographic');

            // Parse dimensions from data-lang attribute
            const lang = element.getAttribute('data-lang');
            const dimensions = parseDimensions(lang);
            if (dimensions) {
                replacement.dataset.width = dimensions.width;
                replacement.dataset.height = dimensions.height;
            }

            element.parentNode.replaceChild(replacement, element);
        });

        next(htmlElement.innerHTML);
    });

    hook.doneEach(() => {
        const { Infographic } = window.AntVInfographic || {};
        if (!Infographic) {
            console.warn('@antv/infographic is not loaded.');
            return;
        }

        const containers = document.querySelectorAll('.infographic');
        const { width: defaultWidth = '100%', height: defaultHeight = '100%' } = config || {};

        containers.forEach((container) => {
            // Use per-infographic dimensions if specified, otherwise use global config
            const width = container.dataset.width || defaultWidth;
            const height = container.dataset.height || defaultHeight;

            new Infographic({
                container: container,
                width: width,
                height: height,
            }).render(container.textContent);
        });
    });
};

export default plugin;
