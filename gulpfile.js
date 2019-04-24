const balm = require('balm');
const balmConfig = require('./config/balmrc');
const env = require('./config/env');

const gulp = require('gulp');

balm.config = balmConfig;

balm.go(mix => {
  if (env.buildDocs) {
    mix.copy('./docs/data/*', './dist/data');
    mix.remove(['./dist/img/photos', './dist/font/materialicons']);
  } else {
    //
  }
});

gulp.watch('src/styles/*', gulp.parallel('balm:sass'));
