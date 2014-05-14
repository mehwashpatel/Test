function prepend_to_div(){
	var thoughts = document.getElementById('thoughts').value;
	if(thoughts!=''){
		var tdate = new Date();
		var tsec = tdate.getSeconds();
		document.getElementById('page').innerHTML = thoughts + ' - ' + tsec + '<br>' + document.getElementById('page').innerHTML;
		document.getElementById('thoughts').value='';
	}else{
		alert('Please enter something');
	}
	return false;
}