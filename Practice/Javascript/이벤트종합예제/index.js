function addAddr(){
	const li = document.createElement('li');
	const ul = document.getElementById('addrlist');
	const newInfo = document.getElementById('name').value + ', ' + document.getElementById('tel').value;
	const text = document.createTextNode(newInfo);

	li.appendChild(text);
	ul.appendChild(li);
	document.getElementById('name').value = '';
	document.getElementById('tel').value = '';
}

function resetAddr(){
	document.getElementById('addrlist').innerHTML="";
}

function changeBg(){
	body=document.querySelector('body');
	if(body.className==="bgwhite"){
		body.className="bgyellow";
	}
	else{
		body.className="bgwhite";
	}
}