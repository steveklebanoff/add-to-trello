var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = '';
elixir.config.js.folder  = '';
elixir.config.css.folder = '';

elixir(function(mix) {
    mix.browserify('app/index.js', 'dist/build.js');

    mix.copy([
        'manifest.json',
        'app/popup.html',
        'app/settings.html'
    ], 'dist');

    mix.copy('app/images', 'dist/images');

    mix.scripts([
      'node_modules/jquery/dist/jquery.js',
      'app/lib/trello_client.js'
    ], 'dist/vendor.js')
});
