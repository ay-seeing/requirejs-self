define(["text!indexHtml"], function(str){
	function View(){
		document.getElementById("main").innerHTML = str;
	}
	return View;
});