const plugin = (config) => (hook) => {
    hook.afterEach((html, next) => {
        const htmlElement = document.createElement('div');
        htmlElement.innerHTML = html;

        htmlElement.querySelectorAll('pre[data-lang=infographic]').forEach((element) => {
            const replacement = document.createElement('div');
            replacement.textContent = element.textContent;
            replacement.classList.add('infographic');
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
        const { width = '100%', height = '100%' } = config || {};

        containers.forEach((container) => {
            new Infographic({
                container: container,
                width: width,
                height: height,
            }).render(container.textContent);
        });
    });
};

export default plugin;
