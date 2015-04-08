require.config({
  // appDir: '../',
	baseUrl: "asset",
	paths: {
    // Open source framework
    "jquery": "vendor/jquery",
    "text": "vendor/text",
    "handlebars": "vendor/handlebars",

    // team modules
    "app": "js/app",

    // Template
		"indexHtml": "template/index.html",
		"listHtml": "template/list.html"
	},
  //shim专门用来配置不兼容的模块。每个模块要定义。例如此例中handlebars，不是符合AMD规范
  //----属性1：exports值（输出的变量名），表明这个模块外部调用时的名称；
  //----属性2：deps数组，表明该模块的依赖性。
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    },
    backbone: {
      deps: ['_','jquery']
    }
  }
});

// Start app
require(["app"], function(ap){
	ap.start();
});