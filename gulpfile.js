var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = '';
elixir.config.js.folder  = '';
elixir.config.css.folder = '';

elixir(function(mix) {
    mix.browserify('app/index.js', 'dist/js/build.js');

    mix.scripts([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
      'app/lib/trello_client.js'
    ], 'dist/js/vendor.js');

    mix.copy([
        'manifest.json',
        'app/popup.html',
        'app/settings.html'
    ], 'dist');

    mix.copy('app/images', 'dist/images');
});
