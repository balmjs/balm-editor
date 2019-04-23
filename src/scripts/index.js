import autoInstall from './config/auto-install';
import configure from './config/configure';

import UiEditor from './editor/index.vue';

const version = require('../../package.json').version;

const BalmEditor = {
  version,
  install(Vue, options = {}) {
    // Configure the component' props
    configure(UiEditor, options);

    // Install the component
    Vue.component(UiEditor.name, UiEditor);
  }
};

autoInstall(BalmEditor);

export default BalmEditor;
