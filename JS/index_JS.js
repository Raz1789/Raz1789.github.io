var select = "About-Us-Select";
function showContent(obj){
	if(obj.className.substring(select.length-7,select.length) != "-Select"){
		var name = obj.className+"-Content"
		if(document.getElementsByClassName("About-Us-Content-Show").length >0){
			document.getElementsByClassName("About-Us-Content-Show")[0].className = "About-Us-Content";
		}
		if(document.getElementsByClassName("Unity-Content-Show").length >0){
			document.getElementsByClassName("Unity-Content-Show")[0].className = "Unity-Content";
		}
		if(document.getElementsByClassName("Java-Content-Show").length >0){
			document.getElementsByClassName("Java-Content-Show")[0].className = "Java-Content";
		}
		if(document.getElementsByClassName("Scala-Content-Show").length >0){
			document.getElementsByClassName("Scala-Content-Show")[0].className = "Scala-Content";
		}
	
		document.getElementsByClassName(select)[0].className = select.substring(0,select.length-7);
	
		document.getElementsByClassName(name)[0].className = obj.className+"-Content-Show";
		obj.className += "-Select";
		select = obj.className;
	}
}
