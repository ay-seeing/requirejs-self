({
  appDir: './',
  baseUrl: 'asset',
  dir: './build',
  paths: {
    "jquery": "empty",
    "app": "js/app",
    "indexHtml": "template/index.html",
    "listHtml": "template/list.html"
  },
  modules: [
    {name: '../main'}
  ]
});
