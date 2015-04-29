define([
	'text!headerHtml',
	'text!indexHtml',
	'text!footerHtml'
],function(indexHtml){
	var View = Backbone.View.extend({
		className: 'index-page',
		events: {
			'click .js-lick': 'goListAction'
		},
		render: function(){
			this.$el.html(indexHtml);
		},
		/*
		 * @ description
		 * @ 跳转列表页
		 * @ 
		 * @ 
		 *
		*/
		goListAction: function(e){
			e.preventDefault();
			var link = $(e.target).attr('href');
			Backbone.history.navigate(link, true);
		}
	});
	return View;
});