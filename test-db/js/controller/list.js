define(["text!listHtml"], function(str){
	function View(){
		document.getElementById("main").innerHTML = str;
	}
	return View;
});