require.config({
  baseUrl: 'asset',
  shim: {
    jquery: {
      exports: '$'
    },
    /*underscore: {
      exports: '_'
    },*/
    backbone: {
      deps: ['_', 'jquery']
    }
  },
  paths: {
    // Open source framework
    'jquery': 'vendor/jquery-2.1.3',
    'text': 'vendor/text',
    '_': 'vendor/underscore',
    'backbone': 'vendor/backbone',

    // Team modules
    'app': 'js/app',
    'hotTopic': 'js/view/hotTopic',

    // Template
    'headerHtml': 'template/header.html',
    'footerHtml': 'template/footer.html',
    'indexHtml': 'template/index.html',
    'listHtml': 'template/list.html',
    'topicHtml': 'template/hotTopic.html'
  }
});

// Start app
require(['app'], function(app){
  app.start();
});