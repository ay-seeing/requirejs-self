/*
 * @fileOverview    首页控制器
 * @author    ay-seeing
*/

define([
	'text!indexHtml',
	'handlebars'
], function(str){
	var View = Backbone.View.extend({
		className: "index.page",
		events: {
			'click .js-link': 'goListAction'
		},
		render: function(){
			this.$el.html(str);
		},
		/*
		 * @description
		 * 跳转到列表页
		*/
		goListAction: function(e){
			// 阻止默认事件
			e.preventDefault();
			var link = $(e.target).attr('href');
			Backbone.history.navigate(link, true);
		}
	});
	
	return View;
});