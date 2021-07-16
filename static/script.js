function getreportinfo(obj){
	let act_items = document.getElementsByTagName("li");
	// for(let i=0; i<act_items.length;i++){
	// 	alert(act_items[i].value());
	// 	if(i>1){ break};
	// }
	let title = document.getElementById(obj.id).innerHTML;
	let link;
	if(obj.id.indexOf("http")>=0){
		link = obj.id;
	}
	else{
		link = obj.id + "/index.html";

	}
	document.getElementById("project_title").innerHTML = title;
	document.getElementById("report_link").src = link;
	document.getElementById("full_report_link").href = link;
}
	
