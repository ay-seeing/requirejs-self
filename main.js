require.config({
	baseUrl: "asset",
	paths: {
		"jquery": ["http://libs.baidu.com/jquery/2.0.3/jquery","js/jquery"],
		"app": "js/app",
		"indexHtml": "template/index.html?5367",
		"listHtml": "template/list.html?90"
	}
});

// Start app
require(["app"], function(ap){
	ap.start();
});