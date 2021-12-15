const {dest, src} = require('gulp');

const videos = () => {
  return src('./src/videos/*')
    .pipe(dest('./dist/videos'));
};

module.exports = videos;
