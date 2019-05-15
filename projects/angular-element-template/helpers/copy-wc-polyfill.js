//
// This script copies over some polyfills to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node /copy-wc-polyfill.js
//

const copy = require('copy');

console.log('Copy webcomponent polyfills ...');
copy('node_modules/@webcomponents/**/*.js', 'projects/angular-element-template/src/assets/scripts', {}, _ => {});
copy('node_modules/document-register-element/**/document-register-element.js', 'projects/angular-element-template/src/assets/scripts/document-register-element', {}, _ => {});
