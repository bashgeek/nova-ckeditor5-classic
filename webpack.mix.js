// const mix = require('laravel-mix')
//
// mix.sass('resources/sass/field.scss', 'dist/css/field.css');
// mix.js('resources/js/field.js', 'dist/js/field.js');

let mix = require('laravel-mix')

mix.setPublicPath('dist')
	.js('resources/js/field.js', 'js')
	.sass('resources/sass/field.scss', 'css')