require.config({
	deps: ["main"],
  paths: {
  		app: 'app',
			jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
			react: "vendor/react.min",
			jsx: "vendor/jsx",
			JSXTransformer: 'vendor/JSXTransformer',
			q: "//cdnjs.cloudflare.com/ajax/libs/q.js/1.0.1/q",
			text: 'vendor/text',
			underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
  },
  //Declare dependencies for libraries here
  shim: {
		'underscore': {
			exports: '_'
			},
     'jquery': {
     	exports: '$'
     },
     'q': {
     	exports: 'Q'
     },
     JSXTransformer: {
			exports: "JSXTransformer"
		}
  },
  baseUrl: 'build',
  jsx: {
    fileExtension: '.jsx'
  }
});