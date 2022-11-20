module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => ({
      ...webpackConfig,
      entry: {
        main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(Boolean),
        index: './src/index.tsx',
      },
      output: {
        ...webpackConfig.output,
        filename: 'static/js/[name].js',
      },
      optimization: {
        ...webpackConfig.optimization,
        runtimeChunk: false,
      },
    }),
  },
};
