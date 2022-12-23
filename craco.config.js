const { resolve } = require('path')
const CracoLessPlugin = require('craco-less')
const resolvePath = (pathName) => resolve(__dirname, pathName)
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      '@': resolvePath('src'),
      components: resolvePath('src/components'),
      assets: resolvePath('src/assets'),
      hooks: resolvePath('src/hooks'),
      router: resolvePath('src/router'),
      utils: resolvePath('src/utils'),
      views: resolvePath('src/views'),
      service: resolvePath('src/service'),
      store: resolvePath('src/store')
    }
  }
}
