const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/site.js', 'public/js')

mix.postCss('resources/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
])

mix.copy('node_modules/@fortawesome/fontawesome-pro/css/fontawesome.min.css', 'public/css/fontawesome.min.css')
   .copy('node_modules/@fortawesome/fontawesome-pro/webfonts/fa-regular-400.ttf', 'public/webfonts/fa-regular-400.ttf')
   .copy('node_modules/@fortawesome/fontawesome-pro/webfonts/fa-regular-400.woff2', 'public/webfonts/fa-regular-400.woff2')
   .copy('node_modules/@fortawesome/fontawesome-pro/css/regular.min.css', 'public/css/fa-regular.min.css')

if (mix.inProduction()) {
   mix.version();
}

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss/nesting'),
//     require('tailwindcss'),
// ])
