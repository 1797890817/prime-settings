// system page options

//open kinfocenter
function kinfocenter(){
	const exec = require('child_process').exec;
	var comando = "kinfocenter";
	console.log(comando);
	exec(comando,function(error,call,errlog){
	});
}
