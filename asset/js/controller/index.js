define([
	'text!headerHtml',
	'text!indexHtml',
	'text!footerHtml'
], function(headerHtml, indexHtml, footerHtml) {
  var View = Backbone.View.extend({
    className: "index-page",
    templateHeader: _.template(headerHtml),
    templateIndex: _.template(indexHtml),
    templateFooter: _.template(footerHtml),
    events: {
    	'click .js-link': 'goListAction'
    },
    render: function() {
      // 获取模板
      // this.header = _.template($("#header-t").html());
      // this.footer = _.template($("#footer-t").html());
      // this.indexPage = _.template($("#index-page").html());
      // this.listPage = _.template($("#list-page").html());

      // 渲染模板
      // var headerStr = this.header({message: "hello world!"});
      // var footerStr = this.footer({message: "hello world!"});
      // var indexStr = this.indexPage({message: "hello world!"});
      // var listStr = this.listPage({message: "hello world!"});
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