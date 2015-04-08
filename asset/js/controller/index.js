define(["text!indexHtml","handlebars"], function(str){
	function View(){
    var data = {"name":"我是标题","content":"列表页"};
    var template = Handlebars.compile(str);
		document.getElementById("main").innerHTML = template(data);
    // document.getElementById("main").innerHTML = str;
	}
	return View;
});