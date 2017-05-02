window.addEventListener('load', function(e){
	event.preventDefault();
	viewCaptcha();
});

var restart = document.getElementById('restart');
restart.addEventListener('click', function(e){
	viewCaptcha();
});

var validate = document.getElementById('validate');
validate.addEventListener('click',function(e){
	var txtcode = deletespaces(document.getElementById('txt-code').value);
	if(generate.value == txtcode.value){
		alert("Coincide");
	}else{
		alert("No coincide");
	}
});

	function viewCaptcha(){
		var test = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9');

		for(var i = 0; i < 6; i++){
			var t1 = test[Math.floor(Math.random() * test.length)];
			var t2 = test[Math.floor(Math.random() * test.length)];
			var t3 = test[Math.floor(Math.random() * test.length)];
			var t4 = test[Math.floor(Math.random() * test.length)];
			var t5 = test[Math.floor(Math.random() * test.length)];
			var t6 = test[Math.floor(Math.random() * test.length)];
			var t7 = test[Math.floor(Math.random() * test.length)];
		}
		var mostrar = t1 + ' ' + t2 + ' ' + t3 + ' ' + t4 + ' ' + t5 + ' ' + t6 + ' ' + t7;
		document.getElementById('generate').value = mostrar;	
	}

function deletespaces(string){
	return string.split(' ').join('');
}


