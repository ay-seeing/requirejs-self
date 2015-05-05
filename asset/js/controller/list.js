define([
  'text!headerHtml',
  'text!listHtml',
  'text!footerHtml'
], function(headerHtml, listHtml, footerHtml){
  var View = Backbone.View.extend({
    className: 'list-page',
    events: {
      "click .js-link": 'goListAction' 
    },
    render: function(){
      $("#header").html(headerHtml);
      $("#footer").html(footerHtml);
      this.$el.html(listHtml);
    },
    goListAction: function(e){
      e.preventDefault();
      var link = $(e.target).attr('href');
      Backbone.history.navigate(link,true);
    }
  });
  return View;
});