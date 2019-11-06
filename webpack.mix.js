const mix = require('laravel-mix')

mix.sass('resources/sass/field.scss', 'dist/field.css');
mix.js('resources/js/field.js', 'dist/field.js');