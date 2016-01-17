var elixir = require('laravel-elixir');
var gulp = require('gulp');
var zip = require('gulp-zip');
var fs = require('fs');
var argv = require('yargs').argv;

require('laravel-elixir-vueify');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = '';
elixir.config.js.folder  = '';
elixir.config.css.folder = '';

elixir(function(mix) {
    mix.browserify([
      'app/index.js'
    ], 'build/js/build.js');

    mix.scripts([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
      'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
      'app/lib/trello/trello.client.min.js'
    ], 'build/js/vendor.js');

    mix.copy([
        'manifest.json',
        'app/popup.html',
        'app/settings.html'
    ], 'build');

    mix.copy('app/images', 'build/images');

    mix.copy('node_modules/bootstrap-sass/assets/fonts', 'build/fonts');
});

gulp.task('build', ['default'], function() {
  if (getVersion()) {
    updateManifest();
  }

  return gulp.src('build/**/*', { base: '.' })
    .pipe(zip('build.zip'))
    .pipe(gulp.dest('./'));
});

function updateManifest() {
  var manifest = JSON.parse(fs.readFileSync('./manifest.json', 'utf8'));
  manifest.version = getVersion()
  fs.writeFileSync('./manifest.json', JSON.stringify(manifest), 'utf8')
}

function getVersion() {
  return argv.version || argv.v
}
