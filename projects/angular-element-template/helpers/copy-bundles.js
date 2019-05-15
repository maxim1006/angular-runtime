//
// This script copies over UMD bundles to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node /copy-bundles.js
//

const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.min.js', 'projects/angular-element-template/src/assets/scripts', {}, _ => {});
copy('node_modules/rxjs/bundles/*.min.js', 'projects/angular-element-template/src/assets/scripts/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.min.js', 'projects/angular-element-template/src/assets/scripts/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.min.js', 'projects/angular-element-template/src/assets/scripts/core-js', {}, _ => {});
