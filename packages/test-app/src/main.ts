import * as RM from '@jupyterlab/rendermime';

const rendermine = new RM.RenderMimeRegistry({
    initialFactories: RM.standardRendererFactories
});

console.log('Hello World');
console.log(rendermine);
