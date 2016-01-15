String.prototype.clearTpl = function(){
	return this.toString().replace('data-src', 'src');
}

/*Require Config*/
require.config({
    baseUrl: 'frontend/js',
    paths: {
        jquery: 'libs/jquery/jquery-1.9.1.min',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		text: 'libs/require/text',
		echo: 'libs/jquery/plugins/jqConsola'
    },
	shim: {
		underscore: {
		  exports: '_'
		},
		backbone: {
		  deps: ["underscore", "jquery"],
		  exports: "Backbone"
		}
	}
});

require(['jquery', 'underscore', 'backbone', 'text', 'echo'], function ($, _, Backbone, text, echo) {

	_.templateSettings = { interpolate : /\{\{(.+?)\}\}/g };

	require(['project'], function (project) {
		project.initialize();
	});

	/*
	require(['/js/views/modules/GalleryView.js'],
		function (GalleryView){
			//Creamos una instancia de nuestra galería principal
			new GalleryView({});
		}
	);
	*/

});
