const mix = require('laravel-mix')

mix.sass('resources/sass/field.scss', 'dist/css/field.css');
mix.js('resources/js/field.js', 'dist/js/field.js');