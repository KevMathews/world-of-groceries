var content = require('!!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/src/index.js!./main.js');

if (typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;

var options = { hmr: true };

options.transform = transform;
options.insertInto = undefined;

var update = require('!../node_modules/style-loader/lib/addStyles.js')(
	content,
	options
);

if (content.locals) module.exports = content.locals;

if (module.hot) {
	module.hot.accept(
		'!!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/src/index.js!./main.js',
		function() {
			var newContent = require('!!../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader/index.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/postcss-loader/src/index.js!./main.js');

			if (typeof newContent === 'string')
				newContent = [[module.id, newContent, '']];

			var locals = (function(a, b) {
				var key,
					idx = 0;

				for (key in a) {
					if (!b || a[key] !== b[key]) return false;
					idx++;
				}

				for (key in b) idx--;

				return idx === 0;
			})(content.locals, newContent.locals);

			if (!locals)
				throw new Error('Aborting CSS HMR due to changed css-modules locals.');

			update(newContent);
		}
	);

	module.hot.dispose(function() {
		update();
	});
}
