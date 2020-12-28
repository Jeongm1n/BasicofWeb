function ClickHandler(event){
	alert(event.target.value+'이 클릭됨!');
}

document.getElementById('bt2').onclick = function(event){
	alert(event.target.value+'이 클릭됨!');
}