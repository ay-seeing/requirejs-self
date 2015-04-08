/*
 * author   ay-seeing
 * date     2015-5-8
 * version  1.0
*/

define(['backbone'] , function(Backbone){
	var app = Backbone.Router.extend({
		router: {
			'': 'ctrl',
			'list': 'ctrl',
			'*path': '404'
		},
		ctrl: function(){
			var fragment = Backbone.history.fragment;
			fragment = fragment ? fragment : 'index';
			var ctrl = 'js/controller/' + fragment;

			require([ctrl] , function(View){
				var view = new View();
				view.render();
				$('#main').html(view.el);
			})
		},
		404: function(){
			console.log('404');
		},
		start: function(){
			// Start Backbone app
			Backbone.history.start({pushState: true});
		}
	});
	
	return new app;

});