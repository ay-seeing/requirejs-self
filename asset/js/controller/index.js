define(["text!indexHtml"], function(str){
	function View(){
    /*var data = {"name":"我是标题","content":"首页<br /><a href='#list'>列表页</a>"};
    var template = Handlebars.compile(str);
		document.getElementById("main").innerHTML = template(data);*/
    document.getElementById("main").innerHTML = str;
	}
	return View;
});