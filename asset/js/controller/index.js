define([
	'text!headerHtml',
	'text!indexHtml',
	'text!footerHtml'
], function(headerHtml, indexHtml, footerHtml) {
  var View = Backbone.View.extend({
    className: "index-page",
    events: {
    	'click .js-link': 'goListAction'
    },
    render: function() {
    	$("#header").html(headerHtml);
    	$("#footer").html(footerHtml);
      this.$el.html(indexHtml);
      // var topicView = new HotTopic();
      // this.$el.append(topicView.el);
    },
    goListAction: function(e){
    	e.preventDefault();
      var link = $(e.target).attr('href');

      Backbone.history.navigate(link, true);
    }
  });

  return View;
});