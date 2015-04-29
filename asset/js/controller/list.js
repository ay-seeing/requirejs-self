define([
  'text!listHtml'
], function(listHtml){
  var View = Backbone.View.extend({
    className: 'list-page',
    events: {
      "click .js-link": 'goListAction' 
    },
    render: function(){
      this.$el.html(listHtml);
    },
    goListAction: function(e){
      e.preventDefault();
      var link = $(e.target).attr('href');
      Backbone.history.navigate(link,true);
    }
  });
  return View();
});