module.exports = ({ config }) => {
  config.module.rules.push({
    resourceQuery: /blockType=custom/,
    loader: require.resolve('./ignore-loader.js')
  })
  config.module.rules.push({
    test: /\.vue$/,
    loader: 'storybook-addon-vue-info/loader',
    enforce: 'post'
  })

  return config
}
