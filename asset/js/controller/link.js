define(function(){
  var View = Backbone.View.extend({
    events: {
      'click .js-link': 'goListAction'
    },
    render: function(){
      //
    },
    goListAction: function(e){
      e.preventDefault();
      var link = $(e.target).attr('href');

      Backbone.history.navigate(link, true);
    }
  });
  return View;
});