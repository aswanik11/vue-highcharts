module.exports = function(config) {
  config.set({
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    browsers: ['PhantomJS'],
    files: [
      'node_modules/vue/dist/vue.js',
      'node_modules/highcharts/highstock.js',
      'node_modules/highcharts/modules/map.js',
      'test/test.js'
    ],
    preprocessors: {
      'test/test.js': ['rollup', 'coverage']
    },
    rollupPreprocessor: {
      format: 'iife',
      moduleName: 'VueHighcharts',
      globals: {
        highcharts: 'Highcharts',
        vue: 'Vue'
      }
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'lcov',
      subdir: '.'
    }
  });
};
