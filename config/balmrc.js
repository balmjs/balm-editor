const path = require('path');
const env = require('./env');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  server: {
    open: false
  },
  roots: {
    source: env.useDocs ? 'docs' : 'src'
  },
  styles: {
    ext: 'scss',
    autoprefixer: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'not dead']
  },
  scripts: {
    entry: env.useDocs
      ? {
          mylib: [
            'vue',
            'prismjs'
          ],
          app: './docs/scripts/main.js'
        }
      : {
          'balm-editor': './src/scripts/index.js'
        },
    library: 'BalmEditor',
    libraryTarget: 'umd',
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.md$/,
        loader: 'html-loader!markdown-loader'
      }
    ],
    plugins: [new VueLoaderPlugin()],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../docs/scripts')
    },
    eslint: true,
    options: {
      compress: {
        drop_console: false
      }
    },
    include: env.useDocs
      ? [path.resolve(__dirname, '../src/scripts')]
      : []
  },
  cache: env.buildDocs
};
