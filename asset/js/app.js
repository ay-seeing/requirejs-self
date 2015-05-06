define([
  'backbone'
], function(Backbone) {
  var App = Backbone.Router.extend({
    routes: {
      '': 'ctrl',
      'index': 'ctrl',
      'list(/:id)': 'ctrl',
      '*path': '404'
    },
    ctrl: function() {
      var fragment = Backbone.history.fragment;
      fragment = fragment ? fragment : 'index';
      console.log(fragment);
      var ctrl = 'js/controller/' + fragment;

      // console.log(require.toUrl(ctrl));

      require([ctrl], function(View) {
        var view = new View();
        view.render();
        $('#main').html(view.el);
      });
    },
    404: function() {
      console.log('404');
    },
    start: function() {
    	// 添加route侦听事件
    	this.on('route:ctrl', function (actions) {
    		if(typeof actions==null){
		  		actions = "无参数";
		  	}
		    console.log( actions ); 
		  });
      // Start Backbone app
      Backbone.history.start({pushState: true});
    }
  });

  var myap = new App;
  /*myap.on('route:ctrl',function(){
  	alert(12);
  });*/
  return myap;
});